import React from 'react'
import emoji from './emoji.png'

function ThankYou() {
  return (
    <div className='thankyou'>
        <div>
            <div className='image-div'>
                <img src={emoji} alt="thank you emoji" />
            </div>
            <h5>
            Thank you for<br/>
            sharing your story!
            </h5>

            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

            <button className='btn'>Close</button>
        </div>
    </div>
  )
}

export default ThankYou