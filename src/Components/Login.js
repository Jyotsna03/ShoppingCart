import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {toast } from "react-toastify";

const Login = () => {

    const [id, setId] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        let regobj = {Email, password };
        //console.log(regobj);

        fetch("http://localhost:3001/",{
            method: "POST",
            headers: {'content-type':'application/json'},
            body:JSON.stringify(regobj)
        }).then((res) =>{
            toast.success('Registered Sucessfully')
            navigate('/home');
        }).catch((err) => {
            toast.error('Failed :' +err.message);
        });

    }

    return (
        <div className='wrapper'>
            <form onSubmit={handleSubmit}>
                <h1>Login</h1>
                <div className='input-box'>
                    <input type='text' placeholder='Username' value={id} onChange={e => setEmail(e.target.value)} required />
                </div>
                <div className='input-box'>
                    <input type='password' placeholder='Password' value={password} onChange={e => setPassword(e.target.value)} required />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;
