import React from 'react'
import "./Contact.scss"
import {motion} from 'framer-motion';
import { FaGithub,FaLinkedin  } from "react-icons/fa";
import { CiLocationOn,CiMail } from "react-icons/ci";
import { images } from '../../constants'
import Lottie from 'lottie-react';

const handleClick = (link) => {
  setTimeout(() => {
    window.open(link, '_blank');
  }, 0);
}
const Contact = () => {

  return (
    <div className="app__contact" id='contact'>
      <div className="app__contact-left">
        <h1>Reach out to Me!</h1>
        <p className="p-text">
        DISCUSS A PROJECT OR JUST WANT TO SAY HI? MY INBOX IS OPEN FOR ALL.
        </p>
        <p className='achievements'>"Full Stack Developer | Java Developer | Leetcode (Max Rating:1441) | CSE'24"</p>
        <div className="location">
          <CiLocationOn/>
          <p>India</p>
        </div>
        <p className="opportunity">Open for opportunities: Yes</p>
        <div className="socials">
          <FaGithub className='social' onClick={()=>handleClick("https://github.com/Dev-for-fun")}/>
          <FaLinkedin className='social' onClick={()=>handleClick("https://www.linkedin.com/in/gajendra-singh-rathore-896a44247/")}/>
          <CiMail className='social' onClick={()=>handleClick("mailto:gajendra.rathore.dev07@gmail.com")}/>
        </div>
      </div>
      <div className="app__contact-right">
        <Lottie animationData={images.contact} className='contact-animation'/>
      </div>
    </div>
  )
}

export default Contact