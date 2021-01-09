import React from 'react'
import Project from "./Project";

const ProjectList = () => {
    // List of projects prior to the implementation of the backend and DB
    const projects = [
        {name: 'Virtual Shop', id: 1},
        {name: 'Intranet', id: 2},
        {name: 'Design of a Web page', id: 3}
    ]

    return (
        <ul className="project-list">
            {projects.map(project => (
                <Project project={project} key={project.id}/>
            ))}
        </ul>
    )
}

export default ProjectList