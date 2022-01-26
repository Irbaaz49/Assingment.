import"./leftChart.css"
import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';

export default function LeftChart() {
    const file = [
        {
     
          hv: 4000
        },
        {
   
          hv: 3000
        },
        {
        
          hv: 2000
        },
        {
       
          hv: 2780
        },
        {
       
          hv: 1890
        },
        {
        
          hv: 2390
         
        },
        {
         
          hv: 3490
   
         
        },
        {
        
            hv: 2000
          },
      ];
  return (
  <div className='Lc'>
      <div className="topSection">
          <div className="matter">
              <p style={{fontWeight:"800", marginBottom:"-10px"}}>Active users</p>
              <p style={{color:"grey",fontWeight:"800", fontSize:"12px"}}>Page view per second</p>
          </div>
          <div className="number">
              109
          </div>
      </div>
      <ResponsiveContainer width="100%" height="40%">
        <BarChart width={150} height={40}  data={file}>
          <Bar dataKey="hv" fill="#8884d8"  />
        </BarChart>
      </ResponsiveContainer>
<div className="project">
    <p>/app/project</p>
    <span>24</span>
</div>
<div className="project">
    <p>/app/chat</p>
    <span>21</span>
</div>
<div className="project">
    <p>/cart</p>
    <span>15</span>
</div>

<div className="project">
    <p>/cart/checkout</p>
    <span>8</span>
</div>
<div className="last">
    SEE ALL <span><ArrowForwardIosOutlinedIcon style={{height:"12px", top:"2px", position:"relative"}}/></span>
    
</div>

  </div>
  )
}
