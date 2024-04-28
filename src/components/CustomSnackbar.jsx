import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { ConnectionContext } from "./ConnectionContext";
import { Snackbar } from "@mui/material";

export const CustomSnackBar=()=>{
    const [open,setOpen]=useState(false)
    const {response,message,setMessage}=useContext(ConnectionContext)
    useEffect(()=>{},[message])
    useEffect(()=>{
        if(response.login!=null){
            setOpen(!open)
            if(typeof(response.login)==="string"){
                setMessage("No user Found")
            }else{
                setMessage("login Sucessfull")
            }
        }
    },[response])
    const handleClose=()=>{
        setOpen(!open)
    }
    return (
        <Snackbar
        anchorOrigin={{ "horizontal":"center", "vertical":"bottom" }}
        open={open}
        autoHideDuration={1000}
        onClose={handleClose}
        message={message}
      />
    )

}