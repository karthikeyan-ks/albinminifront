import { Avatar, Box, Button, Card, CardContent, CardHeader, Divider, Grid, List, ListItem, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { ConnectionContext } from "../components/ConnectionContext";
import './Home.css'
const Home = () => {
    const { response, homeData, search } = useContext(ConnectionContext)
    const [items, setItems] = useState([]);
    const [details, setDetails] = useState({
        title: "",
        description: "",
        location: "",
        applied: false
    })
    useEffect(() => {
        homeData();
        //search()
        console.log("Called")
    }, [])
    useEffect(() => {
        if (response && response.home) {
            const mappedItems = response.home.map((item, index) => (
                <ListItem
                    onClick={(eve => {
                        setDetails(response.home[index])
                    })}
                    key={item.id || Math.random().toString(36)}
                    sx={{
                        width: "100%",
                        margin: "1px",
                        padding: "1px",
                    }}
                    style={{
                        transform: 'scale(1)', // Initial transform (optional)
                        transition: 'transform 0.2s ease-in-out', // Transition properties
                    }}
                    onMouseEnter={(event) => event.currentTarget.style.transform = 'scale(1.1)'} // On hover
                    onMouseLeave={(event) => event.currentTarget.style.transform = 'scale(1)'}
                >

                    <Card
                        sx={{ width: "100%", margin: "1px" }}
                    >
                        <CardHeader
                            avatar={<Avatar>{item.title}</Avatar>}
                            title={<Typography>{item.title}</Typography>}
                            subheader={<Typography variant="body2">{item.location}</Typography>}
                        />
                    </Card>
                </ListItem>
            ));
            setItems(mappedItems); // Update state with the mapped list
        }
    }, [response]);
    return (
        <div className="main">
            <Grid spacing={5} container={true} sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-evenly",
                height: "100%",
                paddingLeft: "20px",
            }}>
                <Grid sm={4} spacing={1} sx={{ bgcolor: "#ffc", height: "100%", overflowY: "scroll", overflowX: "hidden" }}>
                    <List sx={{ width: "100%", padding: "1px" }}>
                        {items}
                    </List>
                </Grid>
                <Grid sm={7.8} sx={{ bgcolor: "#ffc" }}>
                    <Card sx={{}} >
                        <CardHeader
                            avatar={<Avatar width="100px" height="100px">{details.title}</Avatar>}
                            sx={{ textAlign: "center", fontFamily: "Roboto" }}
                            title={<Typography variant="h4">{details.title}</Typography>}></CardHeader>
                        <Divider></Divider>
                        <CardContent sx={{ padding: "1px", paddingLeft: "20px", textAlign: "start", height: "90%" }}>
                            <Box sx={{ padding: "1px", height: "65%" }}>
                                <Typography variant="p" >description: {details.description}</Typography>
                            </Box>
                            <Divider></Divider>
                            <Box sx={{ padding: "1px", width: "100%", display: "flex", flexDirection: "column" }}>
                                <Typography variant="p" sx={{ padding: "10px" }} width={"100vw"}>location: {details.location}</Typography>
                                <Typography variant="p" sx={{ padding: "10px" }} >provider : {details.provider}</Typography>
                            </Box>
                            <Box sx={{ padding: "5px", paddingBottom: "10px" }}>
                                <Button variant="outlined" onClick={(eve) => {
                                    window.location.href = details.link
                                    console.log(details.link)
                                }}>Apply  </Button>
                            </Box>
                        </CardContent>
                        <Divider></Divider>
                    </Card>
                </Grid>
            </Grid>

        </div>
    )
}
export default Home;