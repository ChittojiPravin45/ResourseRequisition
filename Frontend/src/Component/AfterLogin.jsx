import React from "react"
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";


export const AfterLogin=()=>{
    const nevigate=useNavigate()

    const createNewform=()=>{
        nevigate("/resource")

    }
    const continueOldForm=()=>{
        nevigate("/temprrform")
    }
    return(
        <div className="afterlogin">
            <label htmlFor="">Create New Form</label>
            <br />
            <Button variant="contained" onClick={createNewform}>Create</Button>
            <br />
            <br />
            <label htmlFor="">Continue with Existing Data</label>
            <br />
            <Button variant="contained" onClick={continueOldForm}>Load</Button>

        </div>
    )

}