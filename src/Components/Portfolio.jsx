/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */

import image from "../images/developer.png";

const imageAltText = "Developer desk with computer, coffee and thinking about engineering ideas";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "LinkUp Fullstack social media site 🎉",
    description:
      "A social media clone that. Uses Angular for the frontend and express for the backend. It is uses sqlServer for the database. It is a fullstack application that allows users to create posts, like posts, comment on posts, and follow other users.",
    url: "https://github.com/calvincec/LinkUp",
  },
  {
    title: "Shopie E-commerce site",
    description:
      "A fullstack e-commerce site that uses angular for the frontend and express for the backend. It is a fullstack application that allows users to view products, add products to cart, and checkout. it also enables admins to add products, delete products, and update products.",
    url: "https://github.com/calvincec/shopie",
  },
  {
    title: "My Resume Site",
    description:
      "Created from Microsoft's resume workshop and deployed to GitHub pages. Includes my experience and design abilities.",
    url: "https://github.com/microsoft/workshop-library/tree/main/full/build-resume-website",
  },
  {
    title: "Project Manager software",
    description:
      "A project manager software that allows users to create projects, add tasks to projects, and assign tasks to users. It is a fullstack application that uses html/css/javascript for the frontend and express for the backend. ",
    url: "https://github.com/calvincec/project-manager",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
     
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover", borderRadius: "5px", animation: "1s ease-out 0s 1 slideIn"}}
            alt={imageAltText}
          />
        </div>
        <div className="container portfoliocont"  >
          {projectList.map((project) => (
            <a href={project.url} target="_blank" rel="noopener noreferrer">
              <div className="box" key={project.title} >
                  <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
                <p className="small">{project.description}</p>
              </div>
            </a>  
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
