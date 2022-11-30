import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TextField } from "@mui/material";

export const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const nevigate=useNavigate()

    const handleEmail = (e) =>{
        console.log(e.target.value);
        setEmail(e.target.value);
    }

    const handlePassword = (e) =>{
        console.log(e.target.value);
        setPassword(e.target.value);
    }
    const getlogindata=async(e)=>{
        e.preventDefault();
       const logindata=await axios.post(`http://localhost:8080/api/login/${email}&${password}`);
       console.log(logindata.data)
       if(logindata.data==='invalid login credentials'){

        nevigate("/")

       }else{
        nevigate("/afterlogin");
       }
    }
    return (
        <>
            <div id="bg"></div>

            <form>
                <div class="form-field">
                    <input type="email" placeholder="Email / Username" required onChange={(e)=>handleEmail(e)}/>
                </div>

                <div class="form-field">
                    <input type="password" placeholder="Password" required onChange={(e)=>handlePassword(e)}/>
                </div>

                <div class="form-field">
                    <button class="btn" type="submit" onClick={getlogindata}>Log in</button>
                </div>
            </form>
        </>
    )
}