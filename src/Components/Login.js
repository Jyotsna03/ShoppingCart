import e from 'express';
import React, { useState } from 'react';

const Login = () => {

    const[id,idchange] = useState("");
    const[password,passwordchange] = useState("");
    const handlesubmit=(e)=> {
        e.preventDefault();

    }
    return (
        <div className='wrapper' onSubmit={handlesubmit}>
            <form action=''>
                <h1>Login</h1>
                <div className='input-box'>
                    <input type='text' placeholder='Username' required/>
                    <input value ={id} onChange={e=>idchange(e.target.value)} className='form'></input>
                </div>
                <div className='input-box'>
                    <input type='password' placeholder='Password' required/>
                    <input value ={password} onChange={e=>passwordchange(e.target.value)} className='passwd'></input>
                
                </div>
<button type="submit">Login</button>
            </form>
            </div>
    );
};

export default Login;