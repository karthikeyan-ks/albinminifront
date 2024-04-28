import React, { useState, useEffect } from 'react';
import {
    Avatar,
    Box,
    Card,
    CardContent,
    CardHeader,
    Divider,
    Grid,
    Typography,
    TextField,
    Button,
} from '@mui/material';

const ProfilePage = () => {
    const [userData, setUserData] = useState({
        name: 'User1',
        email: 'user1@gmail.com',
        phone: '9012345678',
        edit: true
         // Add other profile fields
    });

    useEffect(() => {
        const fetchUserData = async () => {
            const response = await fetch('/api/user'); // Replace with your API endpoint
            const data = await response.json();
            setUserData(data);
        };
        fetchUserData();
    }, [userData]);

    const handleChange = (event) => {
        setUserData({ ...userData, [event.target.name]: event.target.value });
    };

    const handleSave = () => {
        // Implement logic to save user data (e.g., API call)
        console.log('Saving user data:', userData);
    };
    const handleEdit = () => {
        // Implement logic to save user data (e.g., API call)
        console.log('Saving user data:', userData);
        setUserData({ ...userData, ['edit']: !userData.edit });
    };
    return (
        <Box sx={{
            position: "relative",
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '100vh',
            overflow: "visible",
            marginBottom: "-50px",
        }}>
            <Card
                variant='outlined'
                sx={{ width: "40%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", overflow: "visible" }}>
                <CardHeader
                    title="Profile"
                    avatar={<Avatar src="https://mui.com/static/images/avatar/1.jpg" sx={{ width: "100px", height: "100px", marginTop: "-50px", position: "relative" }} alt="User Avatar" />}
                />
                <CardContent>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sx={{ display: 'flex', alignItems: 'center', marginBottom: 0 }}>
                            <TextField
                                variant='standard'

                                label={<Typography variant='body2'>
                                    Name
                                </Typography>}
                                fullWidth
                                value={userData.name}
                                onChange={handleChange}
                                name="name"
                                disabled={userData.edit}
                            />
                        </Grid>
                        <Grid item xs={12} sx={{ display: 'flex', alignItems: 'center', marginBottom: 1 }}>
                            <TextField
                                variant='standard'
                                label={<Typography variant='body2'>
                                    email
                                </Typography>}
                                fullWidth
                                value={userData.email}
                                onChange={handleChange}
                                name="email"
                                disabled={userData.edit} // Can make email non-editable
                            />
                        </Grid>
                        <Grid item xs={12} sx={{ display: 'flex', alignItems: 'center', marginBottom: 1 }}>
                            <TextField
                                variant='standard'
                                label={<Typography variant='body2'>
                                    phone number
                                </Typography>}
                                fullWidth
                                type='tel'
                                value={userData.phone}
                                onChange={handleChange}
                                name="phone"    
                                disabled={userData.edit} // Can make email non-editable
                            />
                        </Grid>
                        {/* Add more profile fields as needed, using similar styling with sx */}
                        <Grid item xs={12}>
                            <Divider />
                        </Grid>
                        <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                            <Button variant="contained" color="primary" onClick={handleSave} sx={{ margin: "10px" }} >
                                Save
                            </Button>
                            <Button variant="contained" color="primary" onClick={handleEdit} sx={{ margin: "10px" }}>
                                edit
                            </Button>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </Box>
    );
};

export default ProfilePage;
