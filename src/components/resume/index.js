import React from "react";
import "./resume.css";

const Resume = () => {
  const handleDownload = () => {
    // Perform any necessary logic before downloading

    // Define the URL of the image to download
    const imageUrl =
      "https://resumeworded.com/assets/images/resume-guides/full-stack-developer.png";

    // Create a temporary link element
    const link = document.createElement("a");
    link.href = imageUrl;
    link.download = "entry-level-png";
    link.target = "_blank";

    // Trigger the click event on the link to start the download
    link.click();
  };

  return (
    <div className="bigdiv">
      <h1>Resume</h1>
      <p>
        Download my
        <button className="button" onClick={handleDownload}>
          Resume
        </button>
      </p>
      <div>
        <div>
          <h4 className="frontend">Front-end Proficiencies</h4>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>JQuery</li>
            <li>Responsive design</li>
            <li>React</li>
          </ul>
        </div>

        <div>
          <h4>Back-end Proficiencies</h4>
          <ul>
            <li>APIs</li>
            <li>Node</li>
            <li>Express</li>
            <li>MySQL, sequelize</li>
            <li>REST</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Resume;
