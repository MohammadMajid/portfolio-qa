import React from "react";
import { ProjectData } from "../../Common/Data/Project";
import Separator from "../../Common/Separator/Separator";
import Seperator from "../../Common/Separator/Separator";
import ProjectCard from "./ProjectCard";
import "./Projects.css";

function Project() {
  const data = ProjectData;
  return (
    <div className="projects">
      <Separator></Separator>
      <label className="section-title">Featured work</label>
      <div>
        {data.map((project) => {
          return <ProjectCard project={project}></ProjectCard>;
        })}
      </div>
    </div>
  );
}

export default Project;
