import React, { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate} from 'react-router-dom';
import LoadingSpinner from './loading';
import { Link } from 'react-router-dom';

function Login(props) {
    const navigate = useNavigate();
    const [email, setemail] = useState('');
    const [Password, setpassword] = useState('');
    const [show, toggleShow] = useState('True');
    const [loading, setloading] = useState(false);
    if(props.id!==''){
        navigate('/CreateCV');
    }
    if(props.id===''){
    function handlelogin(event) {
        setloading(true);
        event.preventDefault();
        axios.get("http://192.168.0.104:8081/")
            .then(res => {
                const students = res.data;
                students.map((element) => {
                    if(element.Password===Password && element.Email === email){
                        props.onSuccess(element);
                        navigate('/Dashboard');
                    }
                    else{
                        setloading(false);
                        toggleShow(!show);
                    }
                });
        })
        .catch(err =>{
            alert(err);
            setloading(false);
        })
    }
    
    return (
        
        <div className="container py-5">
            {
                loading &&
                
                <LoadingSpinner/>
            }
            <form onSubmit={ handlelogin }>
                <div className="mb-3 form-group">
                    <label htmlFor="Email" className="form-label">Email address</label>
                    <input type="text" required disabled={loading} onChange={e => {setemail(e.target.value); toggleShow('True')}} className="form-control" name="Email" id="Email" aria-describedby="emailHelp"/>
                </div>
                <div className="mb-3 form-group">
                    <label htmlFor="Password" className="form-label">Password</label>
                    <input type="Password" required name="Password" disabled={loading} onChange={e => {setpassword(e.target.value); toggleShow('True')}} className="form-control" id="Password"/>
                </div>
                <button id="Submit" className="btn btn-outline-primary" disabled={loading}>Submit</button>
                <Link to="/Sign-up" className="btn btn-outline-primary mx-3" id="Sign-up" href="#Sign up" >Sign Up</Link> <br/>
            </form>
            { !show && 
                <div className="alert alert-primary my-5" role="alert">
                    Please Enter Correct Email & Password!
                </div>
            }
            </div>
    )
}
} 

export default Login