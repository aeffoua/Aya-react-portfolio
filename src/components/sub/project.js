import React, { useEffect } from "react";
import TextAnimation from "./TextAnimator";

const Projects = ({ projectName, picture }) => {
  useEffect(() => {
    const handleScroll = () => {
      const projectImage = document.querySelector(".project-image");
      const scrollPosition = window.pageYOffset;

      if (projectImage) {
        projectImage.style.transform = `translateY(${scrollPosition * 0.5}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const stackStyle = {
    position: "relative",
    overflow: "hidden",
    height: "300px", // Ajoutez la hauteur souhaitée ici
  };

  const imageStyle = {
    backgroundImage: `url(${picture})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "100%",
    height: "100%",
    position: "absolute",
    top: 0,
    left: 0,
  };

  return (
    <div className="stack" >
      <div className="project-image stack-item" style={imageStyle}></div>
      <div className="project-description stack-item">
        <TextAnimation textToAnimate={projectName} loop={false} />

        {/* add a 3rd div with description of the project, under the title with smaller font
        // make the contact form and the about me text
        // find a design for both */}
      </div>
    </div>
  );
};

export default Projects;