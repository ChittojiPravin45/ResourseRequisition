import axios from "axios";
import React, { useState } from "react";
import { json, useNavigate } from "react-router-dom";
import { TextField, Button, Alert } from "@mui/material";
import { AfterLogin } from "./AfterLogin";


export const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [valid, setValid] = useState(false)
    const nevigate = useNavigate()

    const handleEmail = (e) => {
        console.log(e.target.value);
        setEmail(e.target.value);
    }

    const handlePassword = (e) => {
        // console.log(e.target.value);
        setPassword(e.target.value);
    }
    const getlogindata = async (e) => {
        e.preventDefault();
        const logindata = await axios.post(`http://localhost:8080/api/login/${email}&${password}`);
        // console.log(logindata)

        if (logindata.data.employeeEmail === null) {
            setValid(true)
            nevigate("/")

        } else {
            // nevigate("/afterlogin");
            sessionStorage.setItem("logindata", JSON.stringify(logindata.data))
            setOpen(true);

        }
    }
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <>
            <div id="bg"></div>

            <form className="loginpage">
                <div class="form-field">
                    <TextField variant="standard" label="Enter Email/UserName" type="text" required onChange={(e) => handleEmail(e)}></TextField>
                </div>
                <br /><br />
                <div class="form-field">
                    <TextField variant="standard" label="Enter Password" type="password" required onChange={(e) => handlePassword(e)}></TextField>
                </div>
                <br />
                <div class="form-field">
                    <Button variant="contained" onClick={getlogindata}>Log In</Button>
                </div>
                {valid && (
                    <div> <Alert severity="error">Enter Valid Details</Alert> </div>
                )}

            </form>
            <dialog open={open} onClose={handleClose} >

                <AfterLogin />

            </dialog>


        </>
    )
}