import React from 'react'
import "../css/Contact.css"
import { Link } from 'react-router-dom'

export const Contact = () => {
  return (
    <div className="container-contact">
      <div className="background-contact">
        <h1 className='contact-headtxt'>Need</h1> 
        <h1 className='contact-headtxt'>Consultation?</h1>
        <p className='contact-prg'>Do you need professional advice for your event? With unique quality and accuracy, XtravaGala provides tailored services that guarantee your vision can be achieved with ease. Contact us right now to create a memorable event and let us take care of the details. </p>
        <Link to='/contact'><button class="button-57" role="button"><span class="text">Consult</span><span>Inquire Now</span></button></Link>
        </div>
    </div>
  )
}
