import React, { Component } from "react"
import ReactGA from "react-ga"
import "../styles/global.css"
import "bootstrap/dist/css/bootstrap.min.css"
import Home from "./home.js"
import About from "./About.js"
import About1 from "./About1.js"
import Skills from "./Skills.js"
import Work from "./Work.js"
import WiseWallet from "./WiseWallet.js"
import WiseWallet2 from "./WiseWallet2.js"
import Christmas from "./Christmas.js"
import Christmas2 from "./Christmas2.js"
import Sakura from "./Sakura.js"
import Sakura2 from "./Sakura2.js"
import Contact from "./Contact.js"
import Navi from "../components/navi.js"
import Navi2 from "../components/navi2.js"
import Navi3 from "../components/navi3.js"

export const initGA = () => {
  console.log("GA Init")
  ReactGA.initialize()
}
export const logPageView = () => {
  ReactGA.set({ page: window.location.pathname })
  ReactGA.pageview(window.location.pathname)
}
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      didMount: false,
      scrollSection: "",
      xMain: 0,
      yMain: 0,
      xTrailing: 0,
      yTrailing: 0,
    }
    this.navi1 = React.createRef()
    this.about1 = React.createRef()
    this.about2 = React.createRef()
    this.about3 = React.createRef()
    this.work1 = React.createRef()
    this.navi2 = React.createRef()
    this.work2 = React.createRef()
    this.work3 = React.createRef()
    this.work4 = React.createRef()
    this.work5 = React.createRef()
    this.work6 = React.createRef()
    this.work7 = React.createRef()
    this.navi3 = React.createRef()
    this.contact = React.createRef()
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    initGA()
    logPageView()
    window.onwheel = this.handleScroll
    this.setState({ didMount: true })
  }

  handleMouseMove = e => {
    // Using pageX and pageY will cause glitching when you scroll the window down
    // because it measures the distance from the top left rendered corner, not
    // top left visible corner
    const { clientX, clientY } = e

    // we set the main circle coordinates as soon as the mouse is moved
    this.setState(
      {
        xMain: clientX,
        yMain: clientY,
      },
      () => {
        // this callback is invoked after the first setState finishes
        //
        // here we schedule saving the trailing coordinates in state 100ms
        // after the main coordinates have been set to simulate the trailing
        setTimeout(() => {
          this.setState({
            xTrailing: clientX,
            yTrailing: clientY,
          })
        }, 100)
      }
    )
  }

  handleScroll = () => {
    switch (this.state.scrollSection) {
      case "navi1":
        this.navi1.current.scrollIntoView({ behavior: "smooth" })
        this.setState({ scrollSection: "" })
        break
      case "navi2":
        this.navi2.current.scrollIntoView({ behavior: "smooth" })
        this.setState({ scrollSection: "" })
        break
      case "navi3":
        this.navi3.current.scrollIntoView({ behavior: "smooth" })
        this.setState({ scrollSection: "" })
        break
      case "about1":
        this.about1.current.scrollIntoView({ behavior: "smooth" })
        this.setState({ scrollSection: "" })
        break
      case "about2":
        this.about2.current.scrollIntoView({ behavior: "smooth" })
        this.setState({ scrollSection: "" })
        break
      case "about3":
        this.about3.current.scrollIntoView({ behavior: "smooth" })
        this.setState({ scrollSection: "" })
        break
      case "work1":
        this.work1.current.scrollIntoView({ behavior: "smooth" })
        this.setState({ scrollSection: "" })
        break
      case "work2":
        this.work2.current.scrollIntoView({ behavior: "smooth" })
        this.setState({ scrollSection: "" })
        break
      case "work3":
        this.work3.current.scrollIntoView({ behavior: "smooth" })
        this.setState({ scrollSection: "" })
        break
      case "work4":
        this.work4.current.scrollIntoView({ behavior: "smooth" })
        this.setState({ scrollSection: "" })
        break
      case "work5":
        this.work5.current.scrollIntoView({ behavior: "smooth" })
        this.setState({ scrollSection: "" })
        break
      case "work6":
        this.work6.current.scrollIntoView({ behavior: "smooth" })
        this.setState({ scrollSection: "" })
        break
      case "work7":
        this.work7.current.scrollIntoView({ behavior: "smooth" })
        this.setState({ scrollSection: "" })
        break
      case "contact":
        this.contact.current.scrollIntoView({ behavior: "smooth" })
        this.setState({ scrollSection: "" })
        break
      default:
        break
    }
  }

  componentWillUnmount() {
    window.removeEventListener("onwheel", () => {})
  }

  handleChange = async section => {
    await this.setState({ scrollSection: section })
    this.handleScroll()
  }

  render() {
    const { xMain, yMain, xTrailing, yTrailing } = this.state
    return !this.state.didMount ? (
      <div>
        <figure class="circle"></figure>
      </div>
    ) : (
      <div>
        <title>So-Young Choi</title>
        <div className="cursors">
          <div
            className="cursor"
            style={{
              left: xMain,
              top: yMain,
            }}
          />
          <div
            className="cursor"
            style={{
              left: xTrailing,
              top: yTrailing,
            }}
          />
        </div>
        <div class="outer-wrapper">
          <div class="wrapper" onMouseMove={e => this.handleMouseMove(e)}>
            <div class="slide one">
              <Home onSelect={this.handleChange} />
            </div>
            <div ref={this.navi1} class="slide two">
              <Navi onSelect={this.handleChange} />
            </div>
            <div ref={this.about1} class="slide two">
              <About />
            </div>
            <div id="myportrait" ref={this.about2} class="navi two">
              <About1 />
            </div>
            <div ref={this.about3} class="slide three">
              <Skills />
            </div>
            <div ref={this.navi2} class="slide five">
              <Navi2 onSelect={this.handleChange} />
            </div>
            <div ref={this.work1} class="slide four">
              <Work />
            </div>
            <div ref={this.work2} class="slide three">
              <WiseWallet />
            </div>
            <div ref={this.work3} class="slide four">
              <WiseWallet2 />
            </div>
            <div ref={this.work4} id="five" class="slide five">
              <Christmas />
            </div>
            <div ref={this.work5} id="six" class="slide six">
              <Christmas2 />
            </div>
            <div ref={this.work6} id="seven" class="slide seven">
              <Sakura />
            </div>
            <div ref={this.work7} id="seven" class="slide eight">
              <Sakura2 />
            </div>
            <div ref={this.navi3} class="slide six">
              <Navi3 onSelect={this.handleChange} />
            </div>
            <div ref={this.contact} class="slide nine">
              <Contact />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default App
