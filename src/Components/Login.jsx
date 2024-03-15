import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const [errors, setErrors] = useState({});
    const [valid, setValid] = useState(true);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch('http://localhost:3000/users')
            .then(response => response.json())
            .then(users => {
                const foundUser = users.find(user => user.email === formData.email && user.password.toString() === formData.password);

                if (foundUser) {
                    alert('Login successful');
                    navigate('/product');
                } else {
                    setErrors({ message: 'Invalid email or password' });
                    setValid(false);
                }
            })
            .catch(error => {
                console.error('Error fetching user data:', error);
                setErrors({ message: 'Something went wrong. Please try again later.' });
                setValid(false);
            });
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <div className="signup-form">
                        <form className="mt-5 border p-4 bg-light shadow" onSubmit={handleSubmit}>
                            <h4 className="mb-5 text-secondary">Login Page</h4>
                            {!valid && <span className="text-danger">{errors.message}</span>}
                            <div className="row">
                                <div className="mb-3 col-md-12">
                                    <label>Email <span className="text-danger">*</span></label>
                                    <input
                                        type="email"
                                        name="email"
                                        className="form-control"
                                        placeholder="Enter Email"
                                        autoComplete="off"
                                        value={formData.email}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="mb-3 col-md-12">
                                    <label>Password<span className="text-danger">*</span></label>
                                    <input
                                        type="password"
                                        name="password"
                                        className="form-control"
                                        placeholder="Enter Password"
                                        value={formData.password}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="col-md-12">
                                    <button className="btn btn-primary float-end">Login</button>
                                </div>
                            </div>
                        </form>
                        {!valid && <p>{errors.message}</p>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;





// import axios from 'axios';
// import React, { useState } from 'react';


// const Login = () => {

//     const [FormData, setFormData] = useState({
//         email: '',
//         password: ''
//     })

//     const [errors, setErrors] = useState({})
//     const [isvalid, setValid] = useState(true)


//     const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log("submitted")

//         let validationErrors = {}
//         if (FormData.email === "" || FormData.email === null) {
//             ;
//             setValid(false);
//             validationErrors.email = "Email required"
//         }

//         if (FormData.password === "" || FormData.password === null) {
//             setValid(false);
//             validationErrors.password = "Password required"
//         }

//         setErrors(validationErrors)
//         setValid(isvalid)
//         axios.get('http://localhost:3000/users')
//             .then(result => {
//                 let foundUser = result.data.find(user => user.email === FormData.email);
//                 if (foundUser) {
//                     if (foundUser.password === FormData.password) {
//                         alert("Login successful");


//                     } else {
//                         setValid(false);
//                         validationErrors.password = "Wrong password";
//                     }
//                 } else {
//                     setValid(false);
//                     validationErrors.email = "User not found";
//                 }
//                 setErrors(validationErrors);
//                 setValid(isvalid);
//             })
//             .catch(err => console.log(err));



//     }
//     return (
//         <div className="container">
//             <div className="row">
//                 <div className="col-md-6 offset-md-3">
//                     <div className="signup-form">
//                         <form className="mt-5 border p-4 bg-light shadow" onSubmit={handleSubmit}>
//                             <h4 className="mb-5 text-secondary">Login Page</h4>
//                             {
//                                 isvalid ? <></> :
//                                     <span className='text-danger'>
//                                         {errors.email}{errors.password}
//                                     </span>
//                             }
//                             <div className="row">
//                                 <div className="mb-3 col-md-12">
//                                     <label>
//                                         Email <span className="text-danger">* </span>
//                                     </label>
//                                     <input
//                                         type="email"
//                                         name="email"
//                                         className="form-control"
//                                         placeholder="Enter Email"
//                                         autoComplete='off'
//                                         onChange={(Event) => setFormData({ ...FormData, email: Event.target.value })}
//                                     />
//                                 </div>
//                                 {/* Password*/}
//                                 <div className="mb-3 col-md-12">
//                                     <label>
//                                         Password<span className="text-danger">*</span>
//                                     </label>
//                                     <input
//                                         type="password"
//                                         name="password"
//                                         className="form-control"
//                                         placeholder="Enter Password"
//                                         onChange={(Event) => setFormData({ ...FormData, password: Event.target.value })}
//                                     />
//                                 </div>
//                                 <div className="col-md-12">
//                                     <button className="btn btn-primary float-end"> Login </button>
//                                 </div>
//                             </div>
//                         </form>

//                     </div>
//                 </div>
//             </div>

//         </div>
//     )

// }

// export default Login;








// // import React, { useState } from 'react';
// // import { useNavigate } from 'react-router-dom';

// // const Login = () => {
// //     const [email, setEmail] = useState('');
// //     const [password, setPassword] = useState('');
// //     const [error, setError] = useState('');

// //     let navigate = useNavigate();
// // // async await
// // //(async fetch('http://localhost:3000/users')).json

// //     const handleLogin = (e) => {
// //         e.preventDefault();
// //         if (email && password) {
// //             fetch('/users')
// //                 .then((res) => res.json())
// //                 .then((data) => {
// //                     const user = data.users.find((u) => u.email === email && u.password === password);
// //                     if (user) {
// //                         alert('Logged in');
// //                         setError('');
// //                         navigate('/Product');
// //                     } else {
// //                         alert('User does not exist');
// //                         setError('Invalid username or password');
// //                     }
// //                 })
// //                 .catch((error) => {
// //                     console.error('Error fetching users:', error);
// //                     setError('An error occurred while logging in');
// //                 });
// //         }
// //     };

// //     return (
// //         <div className='wrapper'>
// //             <form onSubmit={handleLogin}>
// //                 <h1>Login</h1>
// //                 <div className='input-box'>
// //                     <input type='text' placeholder='Username' value={email} onChange={(e) => setEmail(e.target.value)} />
// //                 </div>
// //                 <div className='input-box'>
// //                     <input type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
// //                 </div>
// //                 {error && <div className='error'>{error}</div>}
// //                 <button type="submit">Login</button>
// //             </form>
// //         </div>
// //     );
// // };

// // export default Login;
