import React from "react"
import Button from "react-bootstrap/Button"
import OverlayTrigger from "react-bootstrap/OverlayTrigger"
import Tooltip from "react-bootstrap/Tooltip"
import Overlay from "react-bootstrap/Overlay"

function renderTooltip(props) {
  return <Tooltip {...props}>Email me at soyoung.choi@nyu.edu.</Tooltip>
}

function Contact() {
  return (
    <div id="contact" class="row">
      <div id="left" class="col-sm-12">
        <h1>
          <span id="orangeOutline">IF YOU </span>
          <span id="redOutline">LIKED MY WORK</span>
        </h1>
      </div>
      <div id="left" class="col-sm-9">
        <OverlayTrigger
          placement="right"
          delay={{ show: 250, hide: 400 }}
          overlay={renderTooltip}
        >
          <Button style={{ background: "transparent", border: "none" }}>
            <h1>
              <a href="mailto:soyoung.choi@nyu.edu">
                <span id="blueOutline">LET'S CHAT</span>
              </a>
            </h1>
          </Button>
        </OverlayTrigger>
      </div>
      <div id="left" class="col-sm-9">
        <h1>
          <span id="orangeOutline">IF YOU </span>
          <span id="redOutline">DIDN'T</span>
        </h1>
      </div>
      <div id="left" class="col-sm-9">
        <OverlayTrigger
          placement="right"
          delay={{ show: 250, hide: 400 }}
          overlay={renderTooltip}
        >
          <Button style={{ background: "transparent", border: "none" }}>
            <h1>
              <a href="mailto:soyoung.choi@nyu.edu">
                <span id="blueOutline">LET'S CHAT</span>
              </a>
            </h1>
          </Button>
        </OverlayTrigger>
      </div>

      <div class="col-sm-12">
        <a href="Resume_So-YoungChoi.pdf">
          <h4>Download My Resume ⤓</h4>
        </a>
      </div>
    </div>
  )
}

export default Contact
