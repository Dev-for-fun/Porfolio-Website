import React from "react";
import "./Work.scss";
const Work = () => {
  return (
    <div className="app__work" id="work">
      <h1>Open Source Projects</h1>
      <div className="app__work-projects">
        <div className="app__work-project">
          <h2>SocialPedia</h2>
          <p className="p-text">
            🚀A social media website where users interact with each other.
            Authorized users can upload their posts, like/unlike others posts
            and add/remove other users as their friends. All essential features
            like authentication,authorization(with cookies) and interactive UI
            were taken into consideration
          </p>
          <div className="project-tech">
            {["Javascript", "ReactJS", "ExpressJS", "NodeJS", "MongoDB"].map(
              (item) => (
                <div className="skill">{item}</div>
              )
            )}
          </div>
        </div>
        <div className="app__work-project">
          <h2>Whatsapp Clone</h2>
          <p className="p-text">
            Architectured and implemented responsive features,
            ensuring seamless real-time communication functionalities akin to
            WhatsApp
          </p>
          <div className="project-tech">
            {["Javascript", "ReactJS", "ExpressJS", "NodeJS", "MongoDB"].map(
              (item) => (
                <div className="skill">{item}</div>
              )
            )}
          </div>
        </div>
        <div className="app__work-project">
          <h2>News App</h2>
          <p className="p-text">
            🚀A ReactJS application which uses new api to fetch all the latest news from different categories of daily life.
          </p>
          <div className="project-tech">
            <div className="skill">ReactJS</div>
          </div>
        </div>
      </div>
      <div className="app__flex app__work-buttons">
        <a href="https://github.com/Dev-for-fun?tab=repositories" target="/blank">
          MORE PROJECTS
        </a>
        <a
          href="https://drive.google.com/file/d/1YdoHqs1c1WT5WV8sWB55_Bz57sPMPBPB/view?usp=sharing "
          target="/blank"
        >
          VIEW RESUME
        </a>
      </div>
    </div>
  );
};

export default Work;
