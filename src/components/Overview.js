import { useState } from "react";
import BarChart from "./BarChart";
import { DaySalesData } from "../data/OverviewSalesData";
import './Overview.css'
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import TopFive from "./TopFive";
import { FcSalesPerformance , FcMoneyTransfer } from "react-icons/fc";
import { FaCaretDown, FaCaretUp, FaUserAlt } from "react-icons/fa";
import { GoGraph } from "react-icons/go"

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    color: theme.palette.text.secondary,
  }));


const Overview=()=> {

    const [userData] = useState({
        labels: DaySalesData.map((data)=> data.day),
        datasets: [{
            data: DaySalesData.map((data) => data.userGain),
            backgroundColor: [
                "rgba(75,192,192,1)",
                "#ecf0f1",
                "#50AF95",
                "#f3ba2f",
                "#2a71d0"
            ],
            borderWidth:2,
        }
        ],
    })


    return (
        <section className="overview-container">
        <Box sx={{ flexGrow: 1 , padding: 2 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={12} lg={6} xl={6} sx={{ borderRadius: 20 , height: 500}}>
                        <h1 className="DaySalesText">
                            <span>ยอดขายประจำสัปดาห์</span></h1>
                        <div className="wrapper">
                            <BarChart chartData={userData} sx={{ width: {
                                xl: 1200,
                                lg: 1200
                            } , 
                        
                            }}/>
                        </div>
                </Grid>

                <Grid item xs={12} md={12} lg={6} xl={6} sx={{ marginTop: { xs: 2 , lg: 0 }}}>
                        <h1 className="DaySalesText">
                            <span>สินค้ายอดนิยม</span></h1>
                        <TopFive/>
                </Grid>
            </Grid>
            <Grid container spacing={2} sx={{marginTop: 2}}>
                <Grid item lg={3} xs={6} className="small-report">
                        <Item sx={{paddingTop:1, paddingLeft:3 , paddingRight:3, paddingBottom:1}}>
                        <div className="total-sales">
                                <div className="total-sales-text plus">
                                    <h2>ยอดขายรวม <span> <FaCaretUp/>&nbsp;1.53%</span></h2>
                                
                                    
                                    <p>131,000</p>
                                </div>
                                <div className="total-sales-icon">
                                    <FcSalesPerformance size={40}/>
                                </div>
                        </div>
                        </Item>
                    </Grid>
                    <Grid item lg={3} xs={6}>
                        <Item sx={{paddingTop:1, paddingLeft:3 , paddingRight:3, paddingBottom:1}}>
                        <div className="total-sales">
                                <div className="total-sales-text minus">
                                    <h2>ยอดขายวันนี้ <span> <FaCaretDown/>&nbsp;0.59%</span></h2>
                                    <p>27,000</p>
                                </div>
                                <div className="total-sales-icon">
                                    <FcMoneyTransfer size={40}/>
                                </div>
                        </div>
                        </Item>
                    </Grid>
                    <Grid item lg={3} xs={6}>
                        <Item sx={{paddingTop:1, paddingLeft:3 , paddingRight:3, paddingBottom:1}}>
                        <div className="total-sales">
                                <div className="total-sales-text plus">
                                    <h2>ลูกค้าใหม่ <span> <FaCaretUp/>&nbsp;5.66%</span></h2>
                                    <p>7</p>
                                </div>
                                <div className="total-sales-icon user-icon">
                                    <FaUserAlt size={40}/>
                                </div>
                        </div>
                        </Item>
                    </Grid>
                    <Grid item lg={3} xs={6}>
                        <Item sx={{paddingTop:1, paddingLeft:3 , paddingRight:3, paddingBottom:1}}>
                        <div className="total-sales">
                                <div className="total-sales-text plus">
                                    <h2>อัตราการเติบโต</h2>
                                    <p className="graph-text"><FaCaretUp/>&nbsp;25%</p>
                                </div>
                                <div className="total-sales-icon graph-icon">
                                    <GoGraph size={40}/>
                                </div>
                        </div>
                        </Item>
                    </Grid>
            </Grid>
            
        </Box>
        
            <div>
                

            </div>
        </section>
        
    )
}

export default Overview;