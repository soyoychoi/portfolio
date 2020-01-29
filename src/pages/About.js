import React, { Component } from "react"
import ReactGA from "react-ga"
import Observer from "react-intersection-observer"
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

class About extends Component {
  constructor(props) {
    super(props)
    this.state = { isVisible: false }
  }
  componentDidMount() {
    initGA()
    logPageView()
    window.onwheel = () => {}
  }

  handleAnimation1() {
    const second = document.querySelectorAll("#left h3 span")[0]
    second.style.animation = "appear 1s ease-in forwards"
  }
  handleAnimation2() {
    const third = document.querySelectorAll("#para p")[0]
    third.style.animation = "appearFromLeft 2s ease-in forwards"
    const fourth = document.querySelectorAll("#choi .col-sm-12 h5")[0]
    console.log(fourth)
    fourth.style.animation = "blink 1.5s ease-in infinite"
  }
  renderTooltip(props) {
    return <Tooltip {...props}>This is my last name.</Tooltip>
  }
  renderTooltip2(props) {
    return <Tooltip {...props}>This is my first name.</Tooltip>
  }
  render() {
    return (
      <div class="square">
        <div id="choi" class="row">
          <div class="col-sm-12">
            {this.state.isVisible ? (
              <h5 id="scroll">keep scrolling to get to know me</h5>
            ) : null}
          </div>
          <div id="left" class="col-sm-12">
            <Observer onChange={inView => this.setState({ isVisible: inView })}>
              {this.state.isVisible ? (
                <OverlayTrigger
                  placement="right"
                  delay={{ show: 250, hide: 400 }}
                  overlay={this.renderTooltip}
                >
                  <Button style={{ background: "transparent", border: "none" }}>
                    <h1>
                      <span
                        style={{ animation: "appear 1s ease-in forwards" }}
                        id="blue"
                      >
                        CHOI
                      </span>
                    </h1>
                  </Button>
                </OverlayTrigger>
              ) : null}
            </Observer>
          </div>
          <div id="left" class="col-sm-12">
            {this.state.isVisible ? (
              <OverlayTrigger
                placement="right"
                delay={{ show: 250, hide: 400 }}
                overlay={this.renderTooltip2}
              >
                <Button
                  style={{
                    background: "transparent",
                    border: "none",
                    textAlign: "left",
                  }}
                >
                  <h1>
                    <span
                      style={{ animation: "appear 1s ease-in forwards" }}
                      onAnimationEnd={this.handleAnimation1}
                      id="blue"
                    >
                      SO-YOUNG:
                    </span>
                  </h1>
                </Button>
              </OverlayTrigger>
            ) : null}
          </div>
          <div id="left" class="col-sm-12">
            {this.state.isVisible ? (
              <h3>
                <span onAnimationEnd={this.handleAnimation2}>
                  FULL STACK DEVELOPER BASED IN NYC
                </span>
              </h3>
            ) : null}
          </div>
          <div id="para" class="col-sm-12">
            {this.state.isVisible ? (
              <p>
                Currently a Senior at New York University majoring in Computer
                Science and Economics, and graduating in May 2020.
              </p>
            ) : null}
          </div>
        </div>
      </div>
    )
  }
}

export default About
