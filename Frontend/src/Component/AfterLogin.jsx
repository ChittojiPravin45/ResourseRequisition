import React from "react"
import { useNavigate } from "react-router-dom";


export const AfterLogin=()=>{
    const nevigate=useNavigate()

    const createNewform=()=>{
        nevigate("/resource")

    }
    const continueOldForm=()=>{
        nevigate("/temprrform")
    }
    return(
        <div style={{width:"25%",height:"25%",alighItem:"Center"}}>
            <label htmlFor="">Create New Form</label>
            <button onClick={createNewform}>Create</button>
            <label htmlFor="">Continue with Existing Data</label>
            <button onClick={continueOldForm}>Load</button>
        </div>
    )

}