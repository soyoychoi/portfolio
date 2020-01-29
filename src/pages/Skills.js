import React, { Component } from "react"
import ReactGA from "react-ga"
import Button from "react-bootstrap/Button"
import OverlayTrigger from "react-bootstrap/OverlayTrigger"
import Tooltip from "react-bootstrap/Tooltip"

export const initGA = () => {
  console.log("GA Init")
  ReactGA.initialize()
}
export const logPageView = () => {
  ReactGA.set({ page: window.location.pathname })
  ReactGA.pageview(window.location.pathname)
}

class Skills extends Component {
  constructor(props) {
    super(props)
    this.state = {
      animation1: false,
      animation2: false,
      animation3: false,
      spans: [],
      spanInnerHTML: [],
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleClick2 = this.handleClick2.bind(this)
    this.handleClick3 = this.handleClick3.bind(this)
    this.rerender = this.rerender.bind(this)
    this.randomise = this.randomise.bind(this)
    this.colorRandom = this.colorRandom.bind(this)
  }

  componentDidMount() {
    initGA()
    logPageView()
    const spans = document.querySelectorAll("#skillCol h4 span")
    this.setState({ spans: spans })
    spans.forEach(span => {
      this.state.spanInnerHTML.push(span.textContent)
    })
    console.log(this.state.spanInnerHTML)
  }

  rerender() {
    const spansNow = document.querySelectorAll("#skillCol h4 span")
    console.log(this.state.spanInnerHTML)
    this.state.spans.forEach((span, count) => {
      if (spansNow[count] !== undefined && span !== undefined) {
        spansNow[count].style = span.style
        spansNow[count].textContent = this.state.spanInnerHTML[count]
      }
    }, 0)
  }

  async handleClick(e) {
    if (!this.state.animation1) {
      e.target.style.animation = "fallingLeft 1s linear forwards"
      e.target.textContent = this.randomise()
      e.target.style.color = this.colorRandom()
    } else {
      e.target.style.animation = "none"
    }
    document.getElementById("press").play()

    await this.setState({ animation1: !this.state.animation1 })
  }
  async handleClick2(e) {
    if (!this.state.animation2) {
      e.target.textContent = this.randomise()
      e.target.style.color = this.colorRandom()
      e.target.style.animation = "fallingRight 1s linear forwards"
    } else {
      e.target.style.animation = "none"
    }
    document.getElementById("press").play()

    await this.setState({ animation2: !this.state.animation2 })
  }
  async handleClick3(e) {
    if (!this.state.animation3) {
      e.target.textContent = this.randomise()
      e.target.style.color = this.colorRandom()
      e.target.style.animation = "fallingRandom 1s linear forwards"
    } else {
      e.target.style.animation = "none"
    }
    document.getElementById("press").play()

    await this.setState({ animation3: !this.state.animation3 })
  }

  colorRandom() {
    const color = ["blue", "pink", "grey", "orange", "red", "green", "purple"]
    const rand = Math.floor(Math.random() * 7)
    return color[rand]
  }
  randomise() {
    const texts = [
      "Kareoke",
      "Binge watching Korean dramas",
      "Coding for 10+ hours straight",
      "All things chocolate",
      "Finding brunch spots",
      "Spending my mom’s money",
      "Tutoring",
      "Counseling in fields I have little to zero experience in like dating",
      "Listening to people's love lives",
      "Maintaining calm when all goes wrong",
      "Optimistic",
      "Encouraging",
      "Laughing louder than I probably should",
      "Strolling by the Hudson river",
      "Writing essays",
    ]

    const rand = Math.floor(Math.random() * 15)
    console.log(rand)
    return texts[rand]
  }

  renderTooltip(props) {
    return (
      <Tooltip {...props}>
        Click on the skills to see my personal skills!
      </Tooltip>
    )
  }

  render() {
    return (
      <div class="naviRect">
        <div id="choi" class="row">
          <audio id="press" src="press.mp3" preload="auto">
            Your browser does not support the <code>audio</code> element.
          </audio>
          <div id="left" class="col-sm-12">
            <OverlayTrigger
              placement="right"
              delay={{ show: 250, hide: 400 }}
              overlay={this.renderTooltip}
            >
              <Button style={{ background: "transparent", border: "none" }}>
                <h2>
                  <span id="green">SKILLS</span>
                </h2>
              </Button>
            </OverlayTrigger>
            <div id="left" class="col-sm-12">
              <Button onClick={this.rerender} className="backToOG">
                Back to Coding Skills
              </Button>
            </div>
          </div>
          <div id="skillCol" class="col-sm-3">
            <h4>
              <span
                onClick={this.handleClick}
                onAnimationEnd={() => {
                  const next = document.querySelectorAll("#skillCol h4 span")[1]
                  next.style.animation = "fallingLeft 1s linear forwards"
                }}
                id="skill"
              >
                AWS
              </span>
            </h4>
            <h4>
              <span
                onClick={this.handleClick}
                onAnimationEnd={() => {
                  const next = document.querySelectorAll("#skillCol h4 span")[2]
                  next.style.animation = "fallingLeft 1s linear forwards"
                }}
              >
                CSS
              </span>
            </h4>
            <h4>
              <span onClick={this.handleClick}>HTML</span>
            </h4>
            <h4>
              <span onClick={this.handleClick}>React</span>
            </h4>
            <h4>
              <span onClick={this.handleClick}>Heroku</span>
            </h4>
          </div>
          <div id="skillCol" class="col-sm-3">
            <h4>
              <span
                onClick={this.handleClick2}
                onAnimationEnd={() => {
                  const next = document.querySelectorAll("#skillCol h4 span")[4]
                  next.style.animation = "fallingRight 1s linear forwards"
                }}
                id="skill"
              >
                C
              </span>
            </h4>
            <h4>
              <span
                onClick={this.handleClick2}
                onAnimationEnd={() => {
                  const next = document.querySelectorAll("#skillCol h4 span")[5]
                  next.style.animation = "fallingRight 1s linear forwards"
                }}
              >
                Java
              </span>
            </h4>
            <h4>
              <span
                onClick={this.handleClick2}
                onAnimationEnd={() => {
                  const next = document.querySelectorAll("#skillCol h4 span")[6]
                  next.style.animation = "fallingRight 1s linear forwards"
                }}
              >
                Javascript
              </span>
            </h4>
            <h4>
              <span onClick={this.handleClick2}>Python</span>
            </h4>
            <h4>
              <span onClick={this.handleClick2}>MongoDB</span>
            </h4>
          </div>
          <div id="skillCol" class="col-sm-3">
            <h4>
              <span
                onClick={this.handleClick3}
                onAnimationEnd={() => {
                  const next = document.querySelectorAll("#skillCol h4 span")[9]
                  next.style.animation = "fallingRandom 1s linear forwards"
                }}
              >
                Swift
              </span>
            </h4>
            <h4>
              <span onClick={this.handleClick3}>XCode</span>
            </h4>
            <h4>
              <span onClick={this.handleClick3}>Objective-C</span>
            </h4>
          </div>
        </div>
      </div>
    )
  }
}

export default Skills
