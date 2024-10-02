import React, { useState } from "react";
import axios from "axios";

function Sms(){

    const initialValues = {content:"",to:""};

    const [inputs,setInputs] = useState(initialValues)

    function handleChange(e){
        const {name,value} = e.target;
        setInputs({...inputs,[name] : value})
    }

    function handleSubmit(e){
        e.preventDefault();
        let url = "http://127.0.0.1:5000/api/message/sms"

        axios.post(url,{
            content : inputs.content,
            to : inputs.to
        })
        .then((res=>console.log(res)))
        .catch((err) => console.error(err))
    }


    return(
        <>
        <main className="sms-page">
            <h1><a href="/" className="sms-heading">DASHBOARD</a></h1>
        <form className="form" onSubmit={handleSubmit}>
            <div className="form-inputs">
                <br/>
                <br/>
            <lable htmlFor="content"></lable>
            <input type="text" className="content" id="content" name="content" placeholder="Content" onChange={handleChange} />
            <br/>
            <label htmlFor="to"></label>
            <input type="number" className="to" id="to" name="to" placeholder="Number" onChange={handleChange} />
<br/>
            <button className="btn-submit">Submit</button>
            </div>
        </form>
        </main>
        </>
    )
}

export default Sms;