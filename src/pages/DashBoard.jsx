import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { LineChart } from "@mui/x-charts";
import BasicTable from "../components/Table";
import TotalJobs from "../components/TotalJobs";
const DashBoard = () => {
    return (
        <Grid container
            justifyContent={"start"}
            alignContent={"start"}
            direction={"row"}
            spacing={1}
            width={"100%"}
            height={"100%"}
            paddingTop={"20px"}
            paddingLeft={"10px"}>
            <Grid item xs={8} md={8} height={"50%"} sx={{ padding: "10px" }}>
                <Box sx={{
                    boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "start",
                    alignItems: "center",
                }} height={"100%"}>
                    <Typography
                        sx={{
                            maxWidth: "90%",
                            background: "#4682B4",
                            padding: "10px",
                            borderRadius: "10px",
                            margin: "-10px"
                        }}
                        variant="h6">
                        Jobs Number vs Category
                    </Typography>
                    <LineChart
                        xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
                        series={[
                            {
                                data: [2, 5.5, 2, 8.5, 1.5, 5],
                            },
                            {
                                data: [2, 5.0, 4, 2.5, 4.5, 7],
                            },
                        ]}
                    />
                </Box>
            </Grid>
            <Grid
                container
                spacing={3}
                xs={4}
                paddingTop={"10px"}
                width={"fit-content"}
                justifyContent={"start"}
                alignContent={"center"}
                direction={"column"}
            >
                <Grid item xs={6} md={6} width={"100%"} sx={{ padding: "10px" }}>
                    <Box sx={{
                        boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "start",
                        alignItems: "center",
                    }} height={"100%"}>
                        <Typography variant="h6"
                            sx={{
                                maxWidth: "90%",
                                background: "#4682B4",
                                padding: "10px",
                                borderRadius: "10px",
                                margin: "-10px"
                            }}
                        >
                            Total Jobs Applied
                        </Typography>
                        <Typography
                            variant="p"
                            sx={{
                                padding: "20px"
                            }}
                        >
                            24
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={4} md={6} width={"100%"} height={"90%"} sx={{ paddingTop: "10px" }}>
                    <Box sx={{
                        boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "start",
                        alignItems: "center",
                    }} height={"100%"}>
                        <TotalJobs />
                    </Box>
                </Grid>
            </Grid>

            <Grid item xs={12} height={"90%"} sx={{ paddingTop: "10px" }}>
                <Box sx={{
                    boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "start",
                    alignItems: "center",
                }} height={"100%"}>
                    <Typography
                        sx={{
                            maxWidth: "90%",
                            background: "#4682B4",
                            padding: "10px",
                            borderRadius: "10px",
                            margin: "-10px"
                        }}
                        variant="h6"
                    >
                        Jobs Applied
                    </Typography>
                    <BasicTable />
                </Box>
            </Grid>
        </Grid>
    )
}
export default DashBoard;