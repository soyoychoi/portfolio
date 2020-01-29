import React, { Component } from "react"
import ReactGA from "react-ga"

export const initGA = () => {
  console.log("GA Init")
  ReactGA.initialize()
}
export const logPageView = () => {
  ReactGA.set({ page: window.location.pathname })
  ReactGA.pageview(window.location.pathname)
}
class Navi3 extends Component {
  constructor(props) {
    super(props)
    this.handleSectChange = this.handleSectChange.bind(this)
  }
  handleSectChange = e => {
    console.log(e.target.className)
    this.props.onSelect(e.target.className)
  }
  render() {
    return (
      <div>
        <div class="naviRect">
          <div id="navi" class="row">
            <div id="left" class="col-sm-12">
              <img id="arrow1" src="leftarrow.png"></img>
              <h1>
                <span
                  id="firstSpan"
                  className="about1"
                  onClick={this.handleSectChange}
                >
                  About
                </span>
              </h1>
              <h1>
                <span className="work1" onClick={this.handleSectChange}>
                  Work
                </span>
              </h1>
              <img id="arrow1" src="arrow.png"></img>
              <h1>
                <a href="Resume_So-YoungChoi.pdf">
                  <span>Download Resume</span>
                </a>
              </h1>
              <h1>
                <span className="contact" onClick={this.handleSectChange}>
                  Contact or Hire Me
                </span>
              </h1>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Navi3
