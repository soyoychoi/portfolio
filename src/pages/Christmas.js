import React from "react"

function Christmas() {
  return (
    <div id="christmas" class="row">
      <div id="left" class="col-sm-8">
        <h1 style={{ color: "#D32828" }}>
          <span>Christmas</span>
        </h1>
        <h1 style={{ color: "#478A5A" }}>
          <span>Card</span>
        </h1>
        <h1 style={{ color: "#F9C313" }}>
          <span>Sender</span>
        </h1>
      </div>
      <div id="explanation" class="col-sm-4">
        <div>
          <h1>CSS, HTML, React</h1>
          <h1>MongoDB, Giphy API</h1>
          <p>
            Users can log in to create and send Christmas cards to friends and
            family through email! Uses the GIPHY API to get Snoopy stickers that
            users can place on their cards.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Christmas
