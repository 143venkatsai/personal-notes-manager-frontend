import React, {useState, useEffect} from "react";
import { Link, useNavigate } from "react-router-dom";
import BeatLoader from "react-spinners/BeatLoader";
import Cookies from "js-cookie";
import axios from "axios";

import "./style.css";

const Login = (props) =>{
    const {onLoginSuccess} = props;
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });
    const [trigger, setTrigger] = useState(false);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(() =>{
        const token = Cookies.get("token");
        if(token){
            navigate("/");
        }
    }, [navigate]);

    const handleSubmit = async (e) =>{
        e.preventDefault();
        setLoading(true);
        try{
            const {data} = await axios.post("https://personal-notes-manager-backend-9.onrender.com/auth/login", formData)
            Cookies.set("token", data.token);
            setLoading(false);
            alert("Login Success!!");
            onLoginSuccess();
            navigate('/');
        }catch(err){
            console.log(err);
            setLoading(false);
            alert("Login Failed! Invalid Credentials")
        }
    }

    const handleChange = (e) =>{
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
    }

    const loginText = "Login";

    return(
        <div className="login-sign-up-container container">
            <div className="col border rounded p-3 mb-3 shadow-lg" style={{maxWidth: "400px"}}>
                <h2 className="text-center">Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="email" className="form-label mb-0 text-muted"><strong>EMAIL<sup>*</sup></strong></label>
                        <input 
                            type="email" 
                            className="form-control" 
                            id="email" 
                            name="email"
                            value={formData.email}
                            placeholder="Enter your email"
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
                            placeholder="Enter your password"
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
                    <button type="submit" className="btn btn-primary w-100 mt-3">
                        {loading? (<BeatLoader color="#ffffff" size={15} data-testid="loader" />) : loginText}
                    </button>
                </form>
                <div>
                    <p className="mt-2 mb-1">Don't have an account? </p>
                    <Link to="/signup">
                        <button className="btn btn-default border w-100 bg-secondary text-light rounded">Register</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Login