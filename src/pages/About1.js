import React, { Component } from "react"
import ReactGA from "react-ga"
import Observer from "react-intersection-observer"

export const initGA = () => {
  console.log("GA Init")
  ReactGA.initialize()
}
export const logPageView = () => {
  ReactGA.set({ page: window.location.pathname })
  ReactGA.pageview(window.location.pathname)
}

class About1 extends Component {
  constructor(props) {
    super(props)
    this.state = { isVisible: false, changed: false }
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {
    initGA()
    logPageView()
  }

  async handleClick() {
    if (this.state.changed) {
      document.getElementById("face").src = "myface.png"
      document.getElementById("face").style.animation =
        "appear 2s ease-in forwards"
      document.getElementById("boing").pause()

      await this.setState({ changed: false })
    } else {
      document.getElementById("face").src = "doodle.png"
      document.getElementById("face").style.animation =
        "knockOver 3s linear forwards"
      document.getElementById("boing").play()
      await this.setState({ changed: true })
    }
  }

  render() {
    return (
      <div id="choi" class="row">
        <div id="left" class="col-sm-12">
          <Observer onChange={inView => this.setState({ isVisible: inView })}>
            {this.state.isVisible ? (
              <div>
                <audio id="boing" src="boing.mp3" preload="auto">
                  Your browser does not support the <code>audio</code> element.
                </audio>
                <img
                  style={{ animation: "appear 3s ease-in forwards" }}
                  id="face"
                  onClick={this.handleClick}
                  src="myface.png"
                ></img>
              </div>
            ) : null}
          </Observer>
        </div>
        <div id="right" class="col-sm-7">
          <div class="namecard">
            <div class="row">
              <div class="col-sm-12">
                <h4>
                  <a href="Resume_So-YoungChoi.pdf">
                    <span>Download My Resume ⤓</span>
                  </a>
                </h4>
              </div>
              <div class="col-sm-12">
                <h4>
                  <a href="mailto:soyoung.choi@nyu.edu">
                    <span>Contact Me →</span>
                  </a>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default About1
