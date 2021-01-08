import React, {useState} from 'react'
import {Link} from 'react-router-dom'
const Login = () => {
    const [user, setUser] = useState({
        email: '',
        password: ''
    })

    const handleChange = ({target}) => {
        setUser( state => ({
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
             <h1>Login</h1>
             <form onSubmit={handleSubmit}>
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
                     <input
                        type="submit"
                        className="btn btn-primary btn-block"
                        value="Login"/>
                 </div>
             </form>
             <Link to={'/new-account'} className="account-link"> Create new account </Link>
         </div>
     </div>
    )
}

export default Login