import  React, {useState} from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import "./style.css"

const SignUp = (props) =>{
    const {onSignupSuccess} = props;
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
    });
    const [trigger, setTrigger] = useState(false);

    const handleSubmit = async (e) =>{
        e.preventDefault();
        try{
            await axios.post("https://personal-notes-manager-backend-9.onrender.com/auth/signup", formData);
            alert("Signup successfull!! Please login!.");
            onSignupSuccess();
        }catch(err){
            console.log("Signup Error:", err.response.data);
            alert("Signup Failed!" + (err.response?.data?.message || ""));
        }
    }

    const handleChange = (e) =>{
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
    }

    return(
        <div className="login-sign-up-container container">
            <div className="col border rounded p-3 mb-3 shadow-lg" style={{maxWidth: "400px"}}>
                <h2 className="text-center">Signup</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name" className="form-label mb-0 text-muted"><strong>NAME<sup>*</sup></strong></label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="name" 
                            name="name"
                            value={formData.name}
                            placeholder="Enter name"
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email" className="form-label mb-0 mt-2 text-muted"><strong>EMAIL<sup>*</sup></strong></label>
                        <input 
                            type="email" 
                            className="form-control" 
                            id="email" 
                            name="email"
                            value={formData.email}
                            placeholder="Enter email"
                            onChange={handleChange}
                            required
                        />
                    </div>   
                    <div className="form-group">
                        <label htmlFor="password" className="form-label mb-0 mt-2 text-muted"><strong>PASSWORD<sup>*</sup></strong></label>
                        <input 
                            type={trigger? "text": "password"}
                            className="form-control" 
                            id="password" 
                            name="password"
                            value={formData.password}
                            placeholder="Create password"
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group m-1">
                        <input
                            type="checkbox"
                            className="form-check-input"
                            id="checkbox"
                            name="checkbox"
                            checked={trigger}
                            onChange={(e) => setTrigger(e.target.checked)}
                        />
                        <label className="form-check-label ps-1" htmlFor="checkbox">Show Password</label>
                    </div>
                    <button type="submit" className="btn btn-primary w-100 mt-3">Register</button>
                </form>
                <div>
                    <p className="mt-2 mb-1">Already have an account? </p>
                    <Link to="/login">
                        <button className="btn btn-default border w-100 bg-secondary text-light rounded">Login</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default SignUp