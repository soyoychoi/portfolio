import React from "react"
import Carousel from "react-bootstrap/Carousel"
import Button from "react-bootstrap/Button"
import OverlayTrigger from "react-bootstrap/OverlayTrigger"
import Tooltip from "react-bootstrap/Tooltip"

function renderTooltip(props) {
  return <Tooltip {...props}>Click on either side to see more!</Tooltip>
}

function Christmas2() {
  return (
    <div id="choi" class="row">
      <div id="wisecol9" class="col-sm-9">
        <OverlayTrigger
          placement="right"
          delay={{ show: 250, hide: 400 }}
          overlay={renderTooltip}
        >
          <Button style={{ background: "transparent", border: "none" }}>
            <Carousel>
              <Carousel.Item>
                <img id="wisewallet" src="christmasapp.png"></img>
                <Carousel.Caption>
                  <h3>LANDING PAGE</h3>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img id="wisewallet" src="christmasCreate.png"></img>
                <Carousel.Caption>
                  <h3>CREATE CARD PAGE</h3>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Button>
        </OverlayTrigger>
      </div>
      <div id="wisecol3" class="col-sm-3">
        <div id="caption" class="namecard">
          <div id="left" class="col-sm-12">
            <h1>Christmas</h1>
            <h1>Card Sender</h1>
            <h3>New York, 2019</h3>
            <h3>CSS, HTML, React, MongoDB, Giphy API</h3>
            <a href="https://calm-atoll-96618.herokuapp.com/">
              <h3>LAUNCH SITE ↗</h3>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Christmas2
