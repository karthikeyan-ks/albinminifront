import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grow from '@mui/material/Grow';

import image from '../assets/img/istockphoto-1411304340-1024x1024.jpg'

const icon = (
    <Paper sx={{ m: 1, width: "23%", height: "30%" }} elevation={4}>
        <svg>
            <Box
                sx={{
                    fill: (theme) => theme.palette.common.white,
                    stroke: (theme) => theme.palette.divider,
                    strokeWidth: 1,

                }}
            />
        </svg>
    </Paper>
);

export default function SimpleGrow() {
    const [checked, setChecked] = React.useState(true);

    const handleChange = () => {
        setChecked((prev) => !prev);
    };

    return (
        <Box sx={{ height: "100%", background: `url(${image})`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
            <Box sx={{ display: 'flex', height: "100%", width: "100%" }}>
                <Grow
                    transform={true} 
                    in={checked}
                    sx={{
                        transform:"scale(1)",
                        height: "50%",
                        margin: "10px",
                        '&:hover': {
                            backgroundColor: 'primary.dark',
                            transform: "scale(0.9)", // Override default with scale(0.9) on hover
                            transition: 'transform 0.2s ease-in-out', // Add transition for smoother effect
                        },
                    }}
                >{icon}</Grow>

                <Grow
                    in={checked}
                    style={{ transformOrigin: '0 0 0' }}
                    sx={{
                        height: "50%",
                        margin: "10px",
                        '&:hover': {
                            backgroundColor: 'primary.dark',
                            transform: 'Scale(0.9)',
                            transition: 'transform 0.2s ease-in-out', // Add transition for smoother effect
                        },
                    }}
                    {...(checked ? { timeout: 1000 } : {})}
                >{icon}</Grow>
                {/* Conditionally applies the timeout prop to change the entry speed. */}
                <Grow
                    in={checked}
                    sx={{
                        height: "50%",
                        margin: "10px",
                        '&:hover': {
                            backgroundColor: 'primary.dark',
                            transform: 'Scale(0.9)',
                            transition: 'transform 0.2s ease-in-out', // Add transition for smoother effect
                        },
                    }}
                    style={{ transformOrigin: '0 0 0' }}
                    {...(checked ? { timeout: 2000 } : {})}
                >
                    {icon}
                </Grow>
                <Grow
                    in={checked}
                    sx={{
                        height: "50%",
                        margin: "10px",
                        '&:hover': {
                            backgroundColor: 'primary.dark',
                            transform: 'Scale(0.9)',
                            transition: 'transform 0.2s ease-in-out', // Add transition for smoother effect
                        },
                    }}
                    style={{ transformOrigin: '0 0 0' }}
                    {...(checked ? { timeout: 3000 } : {})}
                >
                    {icon}
                </Grow>
            </Box>
        </Box>
    );
}