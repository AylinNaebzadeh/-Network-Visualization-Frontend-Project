import React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { Container, Card, Stack, Typography } from '@mui/material';
import { Item } from "semantic-ui-react";
import { FcAreaChart,
        FcBarChart,
        FcBearish,
        FcBullish, 
        FcComboChart, 
        FcHeatMap, 
        FcLineChart, 
        FcMindMap, 
        FcRadarPlot, 
        FcScatterPlot, 
        FcWorkflow }
from "react-icons/fc";

const GeneralAnalysis = () => {
    

    return (
        <div>
            <Container style={{ paddingTop: "3rem", paddingBottom: "2rem"}}>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={12} md={4} sx={{marginBottom:'3vh'}} >
                        <Card sx={{ bgcolor: '#DAEDEB', height: 'max-content' }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                <Stack>
                                    <Item>
                                        <Box sx={{ display: 'flex', alignItems: 'center', mt: "0.5rem" }}>
                                            <FcRadarPlot style={{ fontSize: 75, marginRight: 10, marginLeft: 10 }} />
                                            <Typography sx={{ fontSize: 30, fontWeight: "bold" }}>Nodes Count:</Typography>
                                        </Box>
                                    </Item>
                                    <Item>
                                        <Typography sx={{ fontSize: 30, ml: "5rem", color: "#165a72" }}>{2708}</Typography>
                                    </Item>
                                </Stack>
                            </Box>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4} sx={{marginBottom:'3vh'}} >
                        <Card sx={{ bgcolor: '#DAEDEB', height: 'max-content' }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                <Stack>
                                    <Item>
                                        <Box sx={{ display: 'flex', alignItems: 'center', mt: "0.5rem" }}>
                                            <FcScatterPlot style={{ fontSize: 75, marginRight: 10, marginLeft: 10 }} />
                                            <Typography sx={{ fontSize: 30, fontWeight: "bold" }}>Nodes Count:</Typography>
                                        </Box>
                                    </Item>
                                    <Item>
                                        <Typography sx={{ fontSize: 30, ml: "5rem", color: "#165a72" }}>{2708}</Typography>
                                    </Item>
                                </Stack>
                            </Box>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4} sx={{marginBottom:'3vh'}} >
                        <Card sx={{ bgcolor: '#DAEDEB', height: 'max-content' }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                <Stack>
                                    <Item>
                                        <Box sx={{ display: 'flex', alignItems: 'center', mt: "0.5rem" }}>
                                            <FcWorkflow style={{ fontSize: 75, marginRight: 10, marginLeft: 10 }} />
                                            <Typography sx={{ fontSize: 30, fontWeight: "bold" }}>Nodes Count:</Typography>
                                        </Box>
                                    </Item>
                                    <Item>
                                        <Typography sx={{ fontSize: 30, ml: "5rem", color: "#165a72" }}>{2708}</Typography>
                                    </Item>
                                </Stack>
                            </Box>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4} sx={{marginBottom:'3vh'}} >
                        <Card sx={{ bgcolor: '#DAEDEB', height: 'max-content' }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                <Stack>
                                    <Item>
                                        <Box sx={{ display: 'flex', alignItems: 'center', mt: "0.5rem" }}>
                                            <FcMindMap style={{ fontSize: 75, marginRight: 10, marginLeft: 10 }} />
                                            <Typography sx={{ fontSize: 30, fontWeight: "bold" }}>Nodes Count:</Typography>
                                        </Box>
                                    </Item>
                                    <Item>
                                        <Typography sx={{ fontSize: 30, ml: "5rem", color: "#165a72" }}>{2708}</Typography>
                                    </Item>
                                </Stack>
                            </Box>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4} sx={{marginBottom:'3vh'}} >
                        <Card sx={{ bgcolor: '#DAEDEB', height: 'max-content' }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                <Stack>
                                    <Item>
                                        <Box sx={{ display: 'flex', alignItems: 'center', mt: "0.5rem" }}>
                                            <FcBarChart style={{ fontSize: 75, marginRight: 10, marginLeft: 10 }} />
                                            <Typography sx={{ fontSize: 30, fontWeight: "bold" }}>Nodes Count:</Typography>
                                        </Box>
                                    </Item>
                                    <Item>
                                        <Typography sx={{ fontSize: 30, ml: "5rem", color: "#165a72" }}>{2708}</Typography>
                                    </Item>
                                </Stack>
                            </Box>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4} sx={{marginBottom:'3vh'}} >
                        <Card sx={{ bgcolor: '#DAEDEB', height: 'max-content' }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                <Stack>
                                    <Item>
                                        <Box sx={{ display: 'flex', alignItems: 'center', mt: "0.5rem" }}>
                                            <FcLineChart style={{ fontSize: 75, marginRight: 10, marginLeft: 10 }} />
                                            <Typography sx={{ fontSize: 30, fontWeight: "bold" }}>Nodes Count:</Typography>
                                        </Box>
                                    </Item>
                                    <Item>
                                        <Typography sx={{ fontSize: 30, ml: "5rem", color: "#165a72" }}>{2708}</Typography>
                                    </Item>
                                </Stack>
                            </Box>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4} sx={{marginBottom:'3vh'}} >
                        <Card sx={{ bgcolor: '#DAEDEB', height: 'max-content' }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                <Stack>
                                    <Item>
                                        <Box sx={{ display: 'flex', alignItems: 'center', mt: "0.5rem" }}>
                                            <FcHeatMap style={{ fontSize: 75, marginRight: 10, marginLeft: 10 }} />
                                            <Typography sx={{ fontSize: 30, fontWeight: "bold" }}>Nodes Count:</Typography>
                                        </Box>
                                    </Item>
                                    <Item>
                                        <Typography sx={{ fontSize: 30, ml: "5rem", color: "#165a72" }}>{2708}</Typography>
                                    </Item>
                                </Stack>
                            </Box>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4} sx={{marginBottom:'3vh'}} >
                        <Card sx={{ bgcolor: '#DAEDEB', height: 'max-content' }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                <Stack>
                                    <Item>
                                        <Box sx={{ display: 'flex', alignItems: 'center', mt: "0.5rem" }}>
                                            <FcComboChart style={{ fontSize: 75, marginRight: 10, marginLeft: 10 }} />
                                            <Typography sx={{ fontSize: 30, fontWeight: "bold" }}>Nodes Count:</Typography>
                                        </Box>
                                    </Item>
                                    <Item>
                                        <Typography sx={{ fontSize: 30, ml: "5rem", color: "#165a72" }}>{2708}</Typography>
                                    </Item>
                                </Stack>
                            </Box>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4} sx={{marginBottom:'3vh'}} >
                        <Card sx={{ bgcolor: '#DAEDEB', height: 'max-content' }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                <Stack>
                                    <Item>
                                        <Box sx={{ display: 'flex', alignItems: 'center', mt: "0.5rem" }}>
                                            <FcBullish style={{ fontSize: 75, marginRight: 10, marginLeft: 10 }} />
                                            <Typography sx={{ fontSize: 30, fontWeight: "bold" }}>Nodes Count:</Typography>
                                        </Box>
                                    </Item>
                                    <Item>
                                        <Typography sx={{ fontSize: 30, ml: "5rem", color: "#165a72" }}>{2708}</Typography>
                                    </Item>
                                </Stack>
                            </Box>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4} sx={{marginBottom:'3vh'}} >
                        <Card sx={{ bgcolor: '#DAEDEB', height: 'max-content' }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                <Stack>
                                    <Item>
                                        <Box sx={{ display: 'flex', alignItems: 'center', mt: "0.5rem" }}>
                                            <FcAreaChart style={{ fontSize: 75, marginRight: 10, marginLeft: 10 }} />
                                            <Typography sx={{ fontSize: 30, fontWeight: "bold" }}>Nodes Count:</Typography>
                                        </Box>
                                    </Item>
                                    <Item>
                                        <Typography sx={{ fontSize: 30, ml: "5rem", color: "#165a72" }}>{2708}</Typography>
                                    </Item>
                                </Stack>
                            </Box>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default GeneralAnalysis;
