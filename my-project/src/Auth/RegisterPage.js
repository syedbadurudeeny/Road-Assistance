import axios from "axios";
import React, { useState } from "react";
import { isAdminAuthenticated, isDriverAuthenticated, isUserAuthenticated } from "../Config";
import { Link } from "react-router-dom";

const RegisterPage = () =>{

    const errorsInputs = {name: {required : false}, email : {required : false}, password : {required : false}, customError : null}
    const initialInputsValue = {name : "", email : "", password : ""};

    // const navigate = useNavigate();

    const [inputs,setInputs] = useState(initialInputsValue);
    const [errors,setErrors]= useState(errorsInputs);
    const [haveError,setHaveerror]= useState(true);

    function handleChange(e){
        const {name,value} = e.target;
        setInputs({...inputs,[name]:value})
    }

    function handleSubmit(e){
        e.preventDefault();

        let errors = errorsInputs;
        let hasError =false

        if(inputs.name === ""){
            errors.name.required = true
            hasError = true
        }
        if(inputs.email === ""){
            errors.email.required = true
            hasError = true
        }
        if(inputs.password === ""){
            errors.password.required = true
            hasError = true
        }

        setHaveerror(hasError)
        setErrors({...errors})
        setInputs(" ")


        if(!hasError){
           
            if(inputs.name === "admin"){
                let url = "http://127.0.0.1:5000/api/admin/register/admin";

                axios.post(url,{
                    name : inputs.name,
                    email: inputs.email,
                    password: inputs.password
                }).then((res)=>{
                    console.log(res)
                }).catch((err)=>{
                    console.log(err)
                })
            }

            if(inputs.name === "user"){
                let url = "http://127.0.0.1:5000/api/user/register/user";

                axios.post(url,{
                    name : inputs.name,
                    email: inputs.email,
                    password: inputs.password
                }).then((res)=>{
                    console.log(res)
                }).catch((err)=>{
                    console.log(err)
                })
            }

            if(inputs.name === "driver"){
                let url = "http://127.0.0.1:5000/api/driver/register/driver";

                axios.post(url,{
                    name : inputs.name,
                    email: inputs.email,
                    password: inputs.password
                }).then((res)=>{
                    console.log(res)
                }).catch((err)=>{
                    console.log(err)
                })
            }


            // navigate('/login')
        }

    }

    return(
        <>
      <main className="register-page">
      <div className="home-dash">
        <section className="content-edu ">
                <h2>Road-Asistance</h2>
            </section>
            <section className="nav-edu">
            <ul className="nav-links">
                {!isAdminAuthenticated() && !isUserAuthenticated() && !isDriverAuthenticated()?
                <li><Link to={'/login'} className="admin">Login</Link></li> : null}
                {!isAdminAuthenticated() && !isUserAuthenticated() && !isDriverAuthenticated()?
                <li><Link to={'/register'} className="admin">Register</Link></li> : null}
                {isAdminAuthenticated() || isUserAuthenticated() || isDriverAuthenticated()?
                <li><Link to={'/'} className="admin">Dashboard</Link></li> : null}
                {isAdminAuthenticated() || isUserAuthenticated() || isDriverAuthenticated()?
                <li><Link to={'/mechanic'} className="admin">Mechanic</Link></li> : null}
                {isAdminAuthenticated() || isUserAuthenticated() || isDriverAuthenticated()?
                <li><Link to={'/user'} className="admin">User</Link></li> : null}
            </ul>
            </section>
        </div>
            <form className="form" onSubmit={handleSubmit}>
                <div className="form-inputs">
                <h3 style={{color:"white"}}>REGISTER</h3>
                <br/>
                {/* <label htmlFor="name">Name</label> */}
                <input type="text" className="name" id="name" name="name" placeholder="Name" 
                onChange={handleChange} />
                {errors.name.required ? <div>Enter Your Name</div> : null}
                <br/>
                <br/>

                {/* <label htmlFor="email">Email</label> */}
                <input type="email" className="email" id="email" name="email" placeholder="Email" 
                onChange={handleChange} />
                {errors.email.required ? <div>Enter Your Email</div> : null}
                <br/>
                <br/>

                {/* <label htmlFor="password">Password</label> */}
                <input type="password" className="password" id="password" name="password" placeholder="Password"  
                onChange={handleChange} />
                {errors.password.required ? <div>Enter Your Password</div> : null}
                <br/>
                <br/>

                {errors.customError ? errors.customError : null}

                <button disabled={!haveError} className="btn-submit">Submit</button>

                {/* <div>Already You Have Account ? Please <Link to={'/login'}>Login</Link></div> */}
                </div>
            </form>
            </main>
       </>
    )

}

export default RegisterPage;