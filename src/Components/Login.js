import { useRef, useState, useEffect } from "react";
import React from 'react'



const Login = () => {
    //adding react hooks
    const userRef = useRef();
    const errRef = useRef();

    const [user,setUser] = useState('');
    const [pwd,setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    

  return (
    <div>

        
        </div>
  )
}

export default Login;








// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const Login = () => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [error, setError] = useState('');

//     let navigate = useNavigate();
// // async await 
// //(async fetch('http://localhost:3000/users')).json

//     const handleLogin = (e) => {
//         e.preventDefault();
//         if (email && password) {
//             fetch('http://localhost:3000/users')
//                 .then((res) => res.json())
//                 .then((data) => {
//                     const user = data.users.find((u) => u.email === email && u.password === password);
//                     if (user) {
//                         alert('Logged in');
//                         setError('');
//                         navigate('/Product');
//                     } else {
//                         alert('User does not exist');
//                         setError('Invalid username or password');
//                     }
//                 })
//                 .catch((error) => {
//                     console.error('Error fetching users:', error);
//                     setError('An error occurred while logging in');
//                 });
//         }
//     };

//     return (
//         <div className='wrapper'>
//             <form onSubmit={handleLogin}>
//                 <h1>Login</h1>
//                 <div className='input-box'>
//                     <input type='text' placeholder='Username' value={email} onChange={(e) => setEmail(e.target.value)} />
//                 </div>
//                 <div className='input-box'>
//                     <input type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
//                 </div>
//                 {error && <div className='error'>{error}</div>}
//                 <button type="submit">Login</button>
//             </form>
//         </div>
//     );
// };

// export default Login;
