
import React from 'react'

export default function Footer(props) {
  return (
    <div className="row fixed-bottom">
      <button
        className="bg-dark col-2 text-white"
        onClick={() => {
          props.resetQuantity()
        }}
      >
        Privacy
      </button>
      <div className="col-8 bg-dark text-white text-center">
      Thanks to review Deepika Studio World ❤️
      </div>
      <button className="bg-dark col-2 text-white">copyright © 2024</button>
    </div>
  )
}
