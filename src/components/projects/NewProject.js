import React, {useState} from 'react'

const NewProject = () => {
    const [project, setProject] = useState({
        name: ''
    })

    const handleInput = ({target}) => {
        setProject( state => ({
            ...state,
            [target.name]: target.value
        }))
    }

    const handleSubmit = e => {
        e.preventDefault();
    }

    return (
        <>
            <button
                type="button"
                className="btn btn-primary btn-block"
            >New Project
            </button>
            <form
                onSubmit={handleSubmit}
                className="form-new-project"
            >
                <input
                    type="text"
                    className="input-text"
                    placeholder="Project's name"
                    name="name"
                    value={project.name}
                    onChange={handleInput}
                />
                <input
                    type="submit"
                    className="btn btn-block btn-primary"
                    value="Add Project"
                />
            </form>
        </>
    )
}

export default NewProject