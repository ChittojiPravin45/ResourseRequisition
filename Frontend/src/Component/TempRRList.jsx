import React from "react"
// import { useNavigate } from "react-router-dom";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import EditIcon from '@mui/icons-material/Edit';
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";




export const TempRRList = () => {
    const [result,setResult]=useState([])
    const getid=JSON.parse(sessionStorage.getItem("logindata"))
    // console.log(id)
    const getdata=async()=>{
        let id=getid.employeeId

        const res=await  axios.get(`http://localhost:8080/api/get/allTempReesources?id=${id}`);
        setResult(res.data);
    }
    useEffect(()=>{
        getdata()
    },[])

    const rows = [
        { name: 'Frozen yoghurt', calories: 159, fat: 6.0, carbs: 24, protein: 4.0 }

    ];
    const nevigate=useNavigate()
    const editRr=()=>{
        nevigate("/resource")
        sessionStorage.setItem("savedData",JSON.stringify(result))
    }

    return (
        <div className="tempList">
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                    <TableHead style={{ backgroundColor: "gray" }}>
                        <TableRow>
                            <TableCell>Employee Id</TableCell>
                            <TableCell>Employee Name</TableCell>
                            <TableCell >manager Id</TableCell>
                            <TableCell >last Updated On</TableCell>
                            <TableCell>Edit</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {result.map((item) => (
                            <TableRow
                                key={item.employee.employeeId}

                            >
                                <TableCell >
                                    {item.employee.employeeId}
                                </TableCell>
                                <TableCell >{item.employee.employeeName}</TableCell>
                                <TableCell >{item.employee.managerId}</TableCell>
                                <TableCell >{item.lastUpdatedOn}</TableCell>
                                
                                <TableCell onClick={editRr}><EditIcon /></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )

}