import React,{useState} from 'react'
import './contact.scss'


export default function Contact() {

const [showMessage, setShowMessage] = useState(false)

const handleSubmit = (e)=>{
  e.preventDefault();
  setShowMessage(true)
}

  return (
    <div className='contact' id='contact'>
      <div className="left">
        <img src="./assets/contact.png" alt="" />
      </div>
      <div className="right">
        <h2>Contact Us</h2>
        <form action="" onClick={handleSubmit}>
          <input type="text" placeholder='Enter your name'/>
          <input type="text" placeholder='Enter your email'/>
          <input type="text" placeholder='Enter your contact no.'/>
          <textarea name="" placeholder='Leave a message' id="" cols="30" rows="10"></textarea>
          <button type='submit'>Send</button>
          {showMessage && <span>Thank You!We will contact you ASAP. </span>}
        </form>
      </div>
    </div>
  )
}
