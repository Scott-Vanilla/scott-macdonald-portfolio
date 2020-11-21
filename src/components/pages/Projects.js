import React from "react";

//import personalTitle from "assets/personaltitle.jpg";
import underConstructionTitle from "assets/underconstruction.jpg";

const Projects = () => {
  //Title is 24px Brittanica
  return (
    <div className="portfolio-projects">
      <div className="portfolio-projects__title">
        {/* <img src={personalTitle} alt="Working at IBM: Audi Digital Studio" /> */}
        <img src={underConstructionTitle} alt="Under Construction" />
      </div>
      <div className="portfolio-audi__copy"></div>
    </div>
  );
};

export default Projects;
