import { Box, Button, Checkbox, FormControlLabel, IconButton, InputAdornment, Paper, TextField, Typography, Autocomplete } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import './login.css'
import { LoginRounded, LoginSharp, Visibility, VisibilityOff } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import './Signup.css'
import image from '../assets/img/istockphoto-1146311268-1024x1024.jpg'
import { ConnectionContext } from "../components/ConnectionContext";
const Signup = () => {
    const navigate = useNavigate()
    const [showPassword, setShowPassword] = useState(true);
    const [credential, setCred] = useState({
        name: '',
        password: '',
        email: '',
        location: '',
        condition: '',
    })
    const {setCredential,response}=useContext(ConnectionContext)
    useEffect(()=>{
        if(response.login!=null){
            if(typeof(response.login)==="string"){
                //setMessage("No user Found")
            }else{
                //setMessage("login Sucessfull")
                navigate("/home")
            }
        }
    },[response])
    const locations = [
        'Ernakulam', 'Kottayam', 'Kollam', 'Thrisur', 'kannur'
    ]
    const handleClick=(eve)=>{
        
    }
    return (
        <div className="main">
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
                    flexDirection: "column",
                    justifyContent: "center",
                    zIndex: "100",
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
                            Sign up Here
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
                    onChange={(eve) => {
                        setCred({ ...credential, name: eve.target.value })
                    }}
                    sx={{
                        marginTop: "40px",
                        marginLeft: "10px",
                        marginRight: "10px",
                        width: "90%"
                    }}

                    type="text"
                    label="enter the name"
                ></TextField>
                <TextField
                    variant="standard"
                    value={credential.password}
                    onChange={(eve) => {
                        setCred({ ...credential, password: eve.target.value })
                    }}
                    sx={{
                        marginTop: "10px",
                        marginLeft: "10px",
                        marginRight: "10px",
                        marginBottom: "10px",
                        width: "90%",
                        fontSize: "10px"
                    }}
                    type={showPassword ? "password" : "text"}
                    label="enter the password"
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={() => setShowPassword(!showPassword)}
                                    edge="end"
                                >
                                    {showPassword ? <Visibility /> : <VisibilityOff />}
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}

                ></TextField>
                <TextField
                    variant="standard"
                    type="email"
                    value={credential.email}
                    onChange={(eve) => {
                        setCred({ ...credential, email: eve.target.value })
                    }}
                    sx={{
                        marginTop: "10px",
                        marginLeft: "10px",
                        marginRight: "10px",
                        width: "90%"
                    }}
                    label="enter the email"
                ></TextField>
                <Autocomplete
                    variant="standard"
                    value={credential.location}
                    defaultValue={locations[0]}
                    disablePortal
                    onChange={(event, newValue) => {
                        setCred({...credential,location:newValue})
                        console.log(newValue)
                      }}
                    id="combo-box-demo"
                    options={locations}
                    sx={{ width: "90%", paddingTop: "10px" }}
                    renderInput={(params) => <TextField {...params} label="select your location" />}
                />
                <FormControlLabel
                    sx={{
                        marginBottom: "10px"
                    }}
                    label={<Typography variant="body2">I agree to the terms and conditions</Typography>}
                    control={<Checkbox value={credential.condition} onClick={(eve) => {
                        setCred({ ...credential, condition: !credential.condition })
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
                        sx={{
                            background: "#4682B4",
                            color: "black",
                            width: "100%"
                        }}
                        onClick={(eve)=>{
                            if(credential.condition){
                                setCredential(credential)
                            }
                        }}
                    >Sign up</Button>
                    <Button
                        variant="outlined"
                        onClick={(eve) => {
                            navigate("/login")
                        }}
                        sx={{
                            background: "#4682B4",
                            color: "black",
                            width: "100%",
                            margin: "10px"
                        }}
                    >Already have Account</Button>

                </Box>

            </Box>
        </div>
    )
}
export default Signup