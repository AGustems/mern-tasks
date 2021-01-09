import React from "react";

const TaskForm = () => {
    return (
        <div className="form">
            <form>
                <div className="input-container">
                    <input
                        type="text"
                        className="input-text"
                        placeholder="Task Name"
                        name="name"
                    />
                </div>
                <div className="input-container">
                    <input
                        type="submit"
                        className="btn btn-primary btn-submit btn-block"
                        value="Add Task"
                    />
                </div>
            </form>
        </div>
    )
}

export default TaskForm