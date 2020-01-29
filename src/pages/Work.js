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

class Work extends Component {
  constructor(props) {
    super(props)
    this.state = { isVisible: false }
    this.handleEnd = this.handleEnd.bind(this)
  }

  componentDidMount() {
    initGA()
    logPageView()
  }

  handleEnd() {
    const col = document.querySelectorAll("#work2")[0]
    col.style.animation = "appear 1s ease-in forwards"
  }

  handleEnd2() {
    const p = document.querySelectorAll("#workcol p")[0]
    p.style.animation = "appearFromLeft 1s ease-in forwards"
    const arrow = document.getElementById("blackarrow")
    arrow.style.animation = "move 1s ease-in infinite"
    const git = document.getElementById("git")
    git.style.animation = "appearFromLeft 1s ease-in forwards"
  }

  render() {
    return (
      <div>
        <div id="choi" class="row">
          <div id="workcol" class="col-sm-3">
            <Observer onChange={inView => this.setState({ isVisible: inView })}>
              {this.state.isVisible ? (
                <div>
                  <h2
                    style={{ animation: "appear 1s ease-in forwards" }}
                    id="work1"
                  >
                    <span>ViE</span>
                  </h2>
                  <h2
                    style={{ animation: "appear 1s ease-in forwards" }}
                    id="work1"
                    onAnimationEnd={this.handleEnd}
                  >
                    <span>MY</span>
                  </h2>
                </div>
              ) : null}
            </Observer>
            {this.state.isVisible ? (
              <div>
                <p>
                  in web development using CSS, HTML, Javascript, React, and iOS
                  app development using SwiftUI and Objective-C and XCode). If
                  you want to see more of my back-end work, please visit my
                  Github.{" "}
                </p>
                <img id="blackarrow" src="blackarrow.png"></img>
                <a href="https://github.com/soyoychoi">
                  <img id="git" src="github.png"></img>
                </a>
              </div>
            ) : null}
          </div>
          {this.state.isVisible ? (
            <div onAnimationEnd={this.handleEnd2} id="work2" class="col-sm-9">
              <h1>
                <span>W</span>
              </h1>
              <h1>
                <span style={{ paddingLeft: "1%" }}> O</span>
              </h1>
              <h1>
                <span style={{ paddingLeft: "1%" }}> R</span>
              </h1>
              <h1>
                <span style={{ paddingLeft: "1%" }}> K</span>
              </h1>
            </div>
          ) : null}
        </div>
      </div>
    )
  }
}

export default Work
