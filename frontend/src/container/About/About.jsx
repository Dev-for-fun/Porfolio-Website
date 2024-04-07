import React from 'react'
import "./About.scss"
import { FaReact,FaJava, FaNode, FaSass,FaDocker,FaHtml5,FaCss3Alt   } from "react-icons/fa";
import { SiJavascript, SiMysql,SiTailwindcss  } from "react-icons/si";
import {motion} from 'framer-motion';

import Lottie from 'lottie-react';
import { images } from '../../constants'

function renderIcon(item) {
  switch (item) {
    case "Java":
      return <FaJava />;
    case "Docker":
      return <FaDocker />;
    case "NodeJS":
      return <FaNode />;
    case "Sass":
      return <FaSass />;
    case "React":
      return <FaReact />;
    case "Javascript":
      return <SiJavascript />;
    case "Tailwind":
      return <SiTailwindcss/>
    case "Sql":
      return <SiMysql/>
    case "html":
      return <FaHtml5/>
    case "Css":
      return <FaCss3Alt/>
    default:
      return null;
    
  }
}
const About = () => {
  return (
    <motion.div className="app__about app__flex" id='about' whileInView={{ x:[300,0]}}
    transition={{duration:0.5}}>
      <div className="app__about-content">
        <h1>What I do</h1>
        <p className='p-text'>Crazy Full Stack Developer who wants to explore every teck stack</p>
        <div className="about-skills">
          {["Java","Javascript","Docker","html","Css","NodeJS","React","Sass","Tailwind","Sql"].map((item,index)=>(
            <div className="skill" key={index}>
              {renderIcon(item)}
              <p>{item}</p>
            </div>
          ))}
        </div>
        <p className='p-text'>⚡Develop highly interactive Front end / User Interfaces for your web and mobile applications</p>
        <p className='p-text'>⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks</p>
        <p className='p-text'>⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean</p>
      </div>
      <Lottie animationData={images.about} className='app__about-animation'/>
    </motion.div>
  )
}

export default About