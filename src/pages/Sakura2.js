import React from "react"
import Carousel from "react-bootstrap/Carousel"
import Button from "react-bootstrap/Button"
import OverlayTrigger from "react-bootstrap/OverlayTrigger"
import Tooltip from "react-bootstrap/Tooltip"

function renderTooltip(props) {
  return <Tooltip {...props}>Click on either side to see more!</Tooltip>
}
function Sakura2() {
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
                <img id="wisewallet" src="sakuraRunner.png"></img>
                <Carousel.Caption>
                  <h3>HOME SCENE</h3>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img id="wisewallet" src="settingscene.png"></img>
                <Carousel.Caption>
                  <h3>SETTING SCENE</h3>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img id="wisewallet" src="gamescene.png"></img>
                <Carousel.Caption>
                  <h3>GAME SCENE</h3>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img id="wisewallet" src="gameoverscene.png"></img>
                <Carousel.Caption>
                  <h3>GAME OVER SCENE</h3>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Button>
        </OverlayTrigger>
        <img id="wisewallet" src="rectangle.png"></img>
      </div>
      <div id="wisecol3" class="col-sm-3">
        <div id="caption" class="namecard">
          <div id="left" class="col-sm-12">
            <h1>Sakura Runner</h1>
            <h3>New York, 2019</h3>
            <h3>Swift, XCode</h3>
            <a href="https://github.com/soyoychoi/sakura-runner">
              <h3>LAUNCH SITE ↗</h3>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sakura2
