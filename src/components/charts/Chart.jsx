import "./chart.css"
import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import LeftChart from "./LeftChart";

export default function Chart() {
    const data = [
        {
          name: 'Jan',
          uv: 4000,
          "Active User": 1800,
          amt: 2400,
        },
        {
          name: 'Feb',
          uv: 3000,
          "Active User": 1000,
          amt: 2210,
        },
        {
          name: 'March',
          uv: 2000,
          "Active User": 2000,
          amt: 2290,
        },
        {
          name: 'April',
          uv: 2780,
          "Active User": 3000,
          amt: 2000,
        },
        {
          name: 'May',
          uv: 1890,
          "Active User": 1800,
          amt: 2181,
        },
        {
          name: 'June',
          uv: 2390,
          "Active User": 3800,
          amt: 2500,
        },
        {
          name: 'July',
         
          "Active User": 900,
          amt: 2100,
        },
        {
            name: 'Aug',
           
            "Active User": 2000,
            amt: 2100,
          },
          {
            name: 'Sep',
           
            "Active User": 1800,
            amt: 2100,
          },
          {
            name: 'Oct',
           
            "Active User": 2000,
            amt: 2100,
          },
          {
            name: 'Nov',
           
            "Active User": 1000,
            amt: 2100,
          },
          {
            name: 'Dec',
           
            "Active User": 800,
            amt: 2100,
          },
      ];
    return (
        <div className="chart">

    <LeftChart />

<div className="rightChart">
    <h3 className="chartTitle">Performance Over Time</h3>
<ResponsiveContainer width="100%" aspect={2 / 1} id="mobile">

<LineChart data={data}>
<XAxis dataKey="name" stroke="#5550bd"/>
<YAxis dataKey="uv"  stroke="#5550bd"/>
<Line type="monotone" dataKey="Active User" strokeWidth={3} stroke="#5550bd"/>
<Tooltip/>
</LineChart>

</ResponsiveContainer>

</div>

        </div>
    )
}
