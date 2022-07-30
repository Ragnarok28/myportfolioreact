import React from "react";
import "./projects.css";
import Carousel from "./Carousel";
import { projectsimages } from "./data";

function Projects() {
    return (
        <div className="projects" id="projects">
            <div className="projects-content">
                <h1><span className='text-brown'>My</span> Projects</h1>
                <h2 className="text-dark">Check out my personal projects:</h2>
            </div>
            {/* Carousel*/}
            <Carousel images={projectsimages} />
        </div>
    );
}





export default Projects;





