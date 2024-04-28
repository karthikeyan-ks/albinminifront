import { Typography } from "@mui/material";
import React, { useState } from "react";
const TotalJobs = () => {
    const [TotalJobs, setTotalJobs] = useState(1000)
    return (
        <div>
            <Typography
                sx={{
                    maxWidth: "90%",
                    background: "#4682B4",
                    padding: "10px",
                    borderRadius: "10px",
                    marginTop: "-10%"
                }}
                variant="h6"
            >
                Total Jobs Available
            </Typography>
            <Typography
                sx={{
                    padding:"20px"
                }}
                variant="p"
            >
                {TotalJobs}
            </Typography>
        </div>

    )
}
export default TotalJobs;