import React, { Component } from "react"

function subHeader() {
  return (
    <div>
      <div class="subHeader">
        <h2>Scroll to ride the train!</h2>
        <div class="row">
          <div class="col-sm-4">
            <h5>Hi, I’m So-Young Choi, a full stack developer based in NYC.</h5>
          </div>
          <div class="col-sm-2">
            <img id="wordBtn1" src="About.png"></img>
          </div>
          <div class="col-sm-2">
            <img id="wordBtn2" src="work.png"></img>
          </div>
          <div class="col-sm-4">
            <h5>
              <img id="btn3" src="R.png"></img> Download{" "}
              <div class="col" style={{ paddingLeft: "20%" }}>
                Resume. Late nights take <img id="btn4" src="M.png"></img> to
                contact me.
              </div>
            </h5>
          </div>
        </div>
      </div>
    </div>
  )
}

export default subHeader
