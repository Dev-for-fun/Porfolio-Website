import React from 'react'
import "./Experience.scss"
import {motion} from 'framer-motion';
import { images } from '../../constants'
import Lottie from 'lottie-react';
const Experience = () => {
  return (
    <div id="experience" className="app__experience app__flex">
      <motion.div className="app__experience-left"
        whileInView={{x:[-100,0], opacity:[0,1]}}
        transition={{duration:0.5}}
      >
        <h1>Experience</h1>
        <Lottie animationData={images.experience} className='experience-animation'/>
      </motion.div>
      <motion.div className="app__experience-right"
        whileInView={{x:[100,0], opacity:[0,1]}}
        transition={{duration:0.5,delayChildren:0.5}}
      >
        <div className="experience-box">
          <p className="experience-time p-text">Oct 2023 - Feb 2024</p>
          <div className="experience-info">
            <h2>Associate Software Developer, RoboMQ</h2>
            <p className="p-text">Developed and maintained software applications.Contributed to the full software development lifecycle, including design, development, testing, deployment and maintenance.Collaborated with senior developers to learn new technologies and technological skills.</p>
            <div className="experience-skills">
              {['ReactJS','Java','SQL','RabbitMQ','Docker','Kubernetes'].map((item,index)=>(
                <div className="experience-skill" key={index}>{item}</div>
              ))}
            </div>
          </div>
        </div>
        <div className="experience-box">
          <p className="experience-time p-text">May - September 2023</p>
          <div className="experience-info">
            <h2>MERN Developer Intern, Arootle</h2>
            <p className="p-text">Leveraged my expertise in full-stack development to create robust and dynamic web applications. Collaborating closely with cross-functional teams, I contributed to the entire software development lifecycle, from concept ideation to deployment and maintenance. Utilizing MERN stack technologies, I designed and implemented scalable solutions, ensuring high performance and seamless user experiences. Additionally, I actively participated in code reviews, troubleshooting, and optimization efforts, consistently striving for excellence in delivering innovative software solutions that met both technical requirements and business objectives.</p>
            <div className="experience-skills">
              {['ReactJS','Javascript','NodeJs','ExpressJS','MongoDB','SQL','Docker'].map((item,index)=>(
                <div className="experience-skill" key={index}>{item}</div>
              ))}
            </div>
          </div>
        </div>
        
      </motion.div>
    </div>
  )
}

export default Experience