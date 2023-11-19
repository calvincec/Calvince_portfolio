/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that 
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "../images/motion-background.jpg";

const imageAltText = "purple and blue abstract background";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "Calvince is a passionate electrical engineering student with a strong background in quality engineering and full-stack programming. Proficient in JavaScript, Express.js, Angular, MSSQL, and software testing, and dedicated to embracing technology's potential. A natural leader, effective communicator, and collaborative team player. Eager to contribute to innovative projects and tech-driven solutions.";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "Quality assurance/Quality assurance",
  "Electrical engineering",
  "Full-stack programming",
  "Angular Framework",
  "Express.js",
  "Restfull API",
  "Figma design",
  "AutoCAD",
  "MSSQL",
  "Jira",
  "Git/Github"
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  "Through Engineering, I gain Analytical skills and attention to detail, Computing being my best extra-curricular activity has sparked my passion for technology and innovation.";

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="abtbackground" src={image} alt={imageAltText} />
      <div className="aboutcards"
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
          borderRadius: "10px",
          boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.2)",
          transition: "background-color 0.3s ease-in-out"
        }}
        onMouseOver={(e) => {e.currentTarget.style.backgroundColor = "#4E567E"
                             e.currentTarget.style.color = "white"}}
        onMouseOut={(e) => {e.currentTarget.style.backgroundColor = "white"
                            e.currentTarget.style.color = "#4E567E"}}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
