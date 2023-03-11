import React from "react";
import { Link } from "react-router-dom";
import { Consumer } from "./context";
import ProjectCard from "./ProjectCard";
function ProjectSection() {
  return (
    <Consumer>
      {(value) => {
        const { projects } = value;
        return (
          <div className="container text-center my-5">
            <h1 className="font-weight-light">
              My <span className="text-info">Pictures</span>
            </h1>
            <div className="lead">Aryan's favourite pics of mine</div>
            <div className="row my-5 pt-3">
              {projects.slice(0, 3).map((project) => (
                <div key={project.id} className="col-12 col-md-4 my-2">
                  <ProjectCard project={project} />
                </div>
              ))}
            </div>
            <div className="my-5">
              <Link to="/AllProjects" className="text-dark text-right">
                <h5>
                  See more
                  <i className="fas fa-arrow-right align-middle"></i>
                </h5>
              </Link>
            </div>
          </div>
        );
      }}
    </Consumer>
  );
}

export default ProjectSection;
