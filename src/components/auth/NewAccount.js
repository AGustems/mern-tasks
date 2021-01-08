import React, {useState} from 'react'
import {Link} from "react-router-dom";

const NewAccount = () => {
    const [user, setUser] = useState({
        name: '',
        email:'',
        password: '',
        confirmation: ''
    })

    const handleChange = ({target}) => {
        setUser(state => ({
            ...state,
            [target.name]: target.value
        }))
    }

    const handleSubmit = e => {
        e.preventDefault()
    }

    return(
        <div className="user-form">
            <div className="form-container shadow-dark">
                <h1>Sign Up</h1>
                <form onSubmit={handleSubmit}>
                    <div className="form-field">
                        <label htmlFor="name">Name</label>
                        <input type="text"
                               id="name"
                               name="name"
                               value={user.name}
                               placeholder="Your name"
                               onChange={handleChange}/>
                    </div>
                    <div className="form-field">
                        <label htmlFor="email">Email</label>
                        <input type="email"
                               id="email"
                               name="email"
                               value={user.email}
                               placeholder="Your email"
                               onChange={handleChange}/>
                    </div>
                    <div className="form-field">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={user.password}
                            placeholder="Your password"
                            onChange={handleChange}/>
                    </div>
                    <div className="form-field">
                        <label htmlFor="confirmation">Confirm Password</label>
                        <input
                            type="password"
                            id="confirmation"
                            name="confirmation"
                            value={user.confirmation}
                            placeholder="Repeat your password"
                            onChange={handleChange}/>
                    </div>

                    <div className="form-field">
                        <input
                            type="submit"
                            className="btn btn-primary btn-block"
                            value="Sign up"/>
                    </div>
                </form>
                <Link to={'/'} className="account-link"> Go to Log in </Link>
            </div>
        </div>
    )
}

export default NewAccount