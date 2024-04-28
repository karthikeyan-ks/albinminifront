import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';

export const ConnectionContext = createContext();

export const ConnectionProvider = ({ children }) => {
    const [jobs, setJobs] = useState([]);
    const [login, setLogin] = useState(false)
    const [message,setMessage] =useState()
    const url = "http://localhost:8000"
    const [response,setResponse]=useState({
        login:"",
        home:[]
    })
    const homeData=()=>{
        axios.get(url+"/home").then((res)=>{
            console.log(res.data)
            setResponse({...response,home:res.data})
        }).catch((err)=>{
            console.error(err)
        })
    }
    const search=(job,location  )=>{
        console.log(job,location)
        axios.post(url+"/home",{
            job:job,
            location:location
        }).then((res)=>{
            console.log(res.data)
            setResponse({...response,home:res.data})
        }).catch((err)=>{
            console.error(err)
        })
    }
    const [credential, setCredential] = useState({
        name: '',
        password: '',
        email: '',
        location: '',
    })
    useEffect(() => {
        if (credential.name !== '') {
            axios.post(url, credential)
                .then((res) => {
                    console.log(res.data)
                    setResponse({...response,login:res.data})
                    console.log(response)
                }).catch((err)=>{
                    console.log(err)
                });

        }
    }, [credential])

    useEffect(() => {

    }, [login])
    return (
        <ConnectionContext.Provider value={{ jobs, setJobs, login,setLogin, setCredential,response,message,setMessage ,homeData,search}}>
            {children}
        </ConnectionContext.Provider>
    );
};