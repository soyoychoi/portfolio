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
class WiseWallet extends Component {
  constructor(props) {
    super(props)
    this.state = { isVisible: false }
  }
  componentDidMount() {
    initGA()
    logPageView()
    let spans = document.querySelectorAll("#mont span")
    spans.forEach((span, idx) => {
      span.addEventListener("click", e => {
        e.target.classList.add("active")
      })
      span.addEventListener("animationend", e => {
        e.target.classList.remove("active")
      })
      // Initial animation
      setTimeout(() => {
        span.classList.add("active")
      }, 1400 * (idx + 1))
    })
  }

  handleEnd = e => {
    e.target.style.animation = undefined
    e.target.style.color = "#5ecb6b"
  }
  handleEnd2 = e => {
    e.target.style.textDecoration = "underline"
    this.setState({ animationIsDone: true })
  }
  handleClick = e => {
    e.target.style.animation = "toplong 1.5s ease-in"
    e.target.style.animationIterationCount = 1
  }
  handleClick2 = e => {
    e.target.style.animation = "ballet 1.5s ease-in"
  }
  handleClick3 = e => {
    e.target.style.animation = "rotate 1.5s ease-in"
  }
  handleClick4 = e => {
    e.target.style.animation = "balance 1.5s ease-in"
  }
  handleClick5 = e => {
    e.target.style.textDecoration = "underline"
  }
  render() {
    return (
      <div id="choi" class="row">
        <div id="center" class="col-sm-12">
          <img id="leaf" src="leaf.png"></img>
        </div>
        <div id="center" class="col-sm-12">
          <h1 id="mont">
            <span onClick={this.handleClick} onAnimationEnd={this.handleEnd}>
              W
            </span>
            <span onClick={this.handleClick2} onAnimationEnd={this.handleEnd}>
              I
            </span>
            <span onClick={this.handleClick3} onAnimationEnd={this.handleEnd}>
              S
            </span>
            <span onClick={this.handleClick4} onAnimationEnd={this.handleEnd}>
              E
            </span>
            <span onClick={this.handleClick5} onAnimationEnd={this.handleEnd2}>
              WALLET
            </span>
          </h1>
        </div>
        <div id="left" class="col-sm-12">
          <h4 id="exp">
            <span>is a directory for finding sustainable brands.</span>
          </h4>
        </div>
        <div id="left" class="col-sm-12">
          <h4 id="lang">
            <span>React, CSS, HTML, EmailJS</span>
          </h4>
          <h4 id="pos">
            <span>Position: CTO and Front-end Developer</span>
          </h4>
        </div>
        <div id="left" class="col-sm-6">
          <h4 id="deed">
            <span>
              I designed and developed the entire front-end of the site.
              Illustrations were done by Won-Hyoung Choi.
            </span>
          </h4>
        </div>
      </div>
    )
  }
}

export default WiseWallet
