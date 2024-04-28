import { Box, Button, Checkbox, FormControlLabel, IconButton, InputAdornment, Paper, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import './login.css'
import { LoginRounded, LoginSharp, Visibility, VisibilityOff } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import image from '../assets/img/istockphoto-1173054931-1024x1024.jpg'
import { useContext } from "react";
import { ConnectionContext } from "../components/ConnectionContext";
import axios from "axios";

const Login = () => {
    const navigate = useNavigate()
    const [showPassword, setShowPassword] = useState(true);
    const { response, setCredential,setLogin } = useContext(ConnectionContext)
    const [credential, setCred] = useState({
        name: '',
        password: '',
        conditions: false
    })
    useEffect(() => {
        if(response.login!=null){
            if(typeof(response.login)==="string"){
                //setMessage("No user Found")
            }else{
                //setMessage("login Sucessfull")
                setLogin((prev)=>!prev)
                navigate("/home")
            }
        }
    }, [response])
    const handleName = (eve) => {
        setCred({
            ...credential,
            name: eve.target.value
        })
        console.log(credential)
    }
    const handlePassword = (eve) => {
        setCred({
            ...credential,
            password: eve.target.value
        })
    }
    const handleClick = () => {
        if (credential.conditions) {
            setCredential(credential)
        }
    }
    return (
        <div className="login">
            <Box
                position={"fixed"}

                sx={{
                    top: "65px",
                    width: "99%",
                    height: "50%",
                    borderRadius: "10px"
                }}
            >
                <img src={image} className="image" />
            </Box>
            <Box
                sx={{
                    width: "30%",
                    borderRadius: "10px",
                    display: "flex",
                    zIndex: "100",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    background: "white",
                    padding: "10px",
                    boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 3px"
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        marginTop: "-50px",
                        minHeight: "100px",
                        background: "#4682B4",
                        width: "90%",
                        color: "white",
                        padding: "5px",
                        borderRadius: "10px",

                    }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "start",
                            textAlign: "start",
                            padding: "20px"
                        }}
                    >
                        <Typography
                            variant="h5"
                            sx={{ fontFamily: 'Roboto' }}
                        >
                            Login Here
                        </Typography>
                        <Typography
                            sx={{ color: "black", fontFamily: 'Roboto' }}
                            variant="p"
                        >
                            login here with username and password
                        </Typography>
                    </Box>
                </Box>
                <TextField
                    variant="standard"
                    value={credential.name}
                    sx={{
                        marginTop: "60px",
                        marginLeft: "10px",
                        marginRight: "10px",
                        width: "90%"
                    }}

                    type="text"
                    onChange={handleName}
                    label="enter the name"
                ></TextField>
                <TextField
                    variant="standard"
                    value={credential.password}
                    sx={{
                        marginTop: "10px",
                        marginLeft: "10px",
                        marginRight: "10px",
                        marginBottom: "10px",
                        width: "90%",
                        fontSize: "10px"
                    }}
                    type={showPassword ? "password" : "text"}
                    onChange={handlePassword}
                    label="enter the password"
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={() => {
                                        setShowPassword(!showPassword)
                                        console.log("clicking on the show password")
                                    }}
                                    edge="end"
                                >
                                    {showPassword ? <Visibility /> : <VisibilityOff />}
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}

                ></TextField>
                <FormControlLabel
                    sx={{
                        marginBottom: "10px"
                    }}
                    label={<Typography variant="body2">I agree to terms and conditions</Typography>}
                    error={credential.conditions}
                    control={
                        <Checkbox value={credential.conditions} onClick={(eve) => {
                            setCred({ ...credential, conditions: !credential.conditions })
                            console.log(credential)
                        }} />}
                />
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        width: "100%",
                        justifyContent: "space-evenly"
                    }}
                >
                    <Button
                        variant="outlined"
                        onClick={handleClick}
                        sx={{
                            background: "#4682B4",
                            color: "black",
                            width: "100%"
                        }}
                    >login</Button>
                    <Button
                        variant="outlined"
                        onClick={(eve) => {
                            navigate("/signup")
                        }}
                        sx={{
                            background: "#4682B4",
                            color: "black",
                            width: "100%",
                            margin: "10px"
                        }}
                    >Create Account</Button>

                </Box>

            </Box>
        </div>
    )
}
export default Login