import React from 'react'
import Sidebar from "../layout/Sidebar";
import Bar from "../layout/Bar";
import TaskForm from "../tasks/TaskForm";

const Projects = () => {
    return (
        <div className="container-app">
            <Sidebar/>
            <div className="section-principal">
                <Bar/>
                <main>
                    <TaskForm/>
                    <div className="task-container">

                    </div>
                </main>
            </div>
        </div>
    )
}

export default Projects