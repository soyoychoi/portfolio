import React from "react"
import ReactGA from "react-ga"

export const initGA = () => {
  console.log("GA Init")
  ReactGA.initialize()
}
export const logPageView = () => {
  ReactGA.set({ page: window.location.pathname })
  ReactGA.pageview(window.location.pathname)
}

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.handleSectChange = this.handleSectChange.bind(this)
    this.animation5end = this.animation5end.bind(this)
  }

  componentDidMount() {
    const first = document.querySelectorAll("#hey h1 span")[0]
    first.style.animation = "appear 0.4s ease-in forwards"
    initGA()
    logPageView()
  }

  handleSectChange = () => {
    this.props.onSelect("navi1")
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", () => {})
  }

  animation1end() {
    const second = document.querySelectorAll("#so")[0]
    second.style.animation = "blink 1s ease-in forwards"
  }

  animation2end() {
    const third = document.querySelectorAll("#Iam")[0]
    third.style.animation = "blink 1s ease-in forwards"
  }

  animation3end() {
    const fourth = document.querySelectorAll("#orange")[0]
    fourth.style.animation = "blink 1s ease-in forwards"
    const fifth = document.querySelectorAll("#orange")[1]
    fifth.style.animation = "blink 1s ease-in forwards"
  }

  animation4end() {
    const sixth = document.querySelectorAll("#arrow")[0]
    sixth.style.animation = "blink 1s ease-in forwards"
    const seventh = document.querySelectorAll("#scroll")[0]
    seventh.style.animation = "blink 1.5s ease-in forwards"
  }

  animation5end() {
    const second = document.querySelectorAll("#so")[0]
    second.style.animation = "fillColor 1s ease-in forwards"
    const sixth = document.querySelectorAll("#arrow")[0]
    sixth.style.animation = "move 1s ease-in infinite"
    const seventh = document.querySelectorAll("#scroll")[0]
    seventh.style.animation = "blink 1.5s ease-in infinite"
    this.handleSectChange()
  }

  render() {
    return (
      <div>
        <div class="row">
          <div class="col-sm-10">
            <div class="square">
              <div class="col-sm-12">
                <h5 id="scroll">scroll to view my work</h5>
              </div>
              <div id="hey" class="col-sm-12">
                <h1>
                  <span onAnimationEnd={this.animation1end}>Hey,</span>
                </h1>
              </div>
              <div class="col-sm-4">
                <h1>
                  <span onAnimationEnd={this.animation2end} id="so">
                    SO -
                  </span>
                </h1>
              </div>
              <div class="col-sm-8">
                <img
                  onAnimationEnd={this.animation3end}
                  id="Iam"
                  src="Iam.png"
                ></img>
              </div>
              <div class="col-sm-12">
                <h1>
                  <span id="orange">YOUNG</span>
                </h1>
              </div>
              <div class="col-sm-12">
                <h1>
                  <span onAnimationEnd={this.animation4end} id="orange">
                    CHOI
                  </span>
                  <img
                    onAnimationEnd={this.animation5end}
                    id="arrow"
                    src="arrow.png"
                  ></img>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Home
