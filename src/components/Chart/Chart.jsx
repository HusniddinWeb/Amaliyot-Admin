import React from 'react'
import { AreaChart, Area, XAxis, CartesianGrid, Tooltip, ResponsiveContainer, Line } from 'recharts';

import './Chart.scss'



function Chart({aspect, title}) {
    const data = [
        {name: "Jan", Total: 1200},
        {name: "Feb", Total: 2100},
        {name: "Mar", Total: 800},
        {name: "Apr", Total: 1600},
        {name: "May", Total: 900},
        {name: "Jun", Total: 1700},
        {name: "Jul", Total: 1100},
        {name: "Aug", Total: 600},
        {name: "Sep", Total: 1200},
        {name: "Oct", Total: 1700},
        {name: "Nov", Total: 700},
        {name: "Dec", Total: 1300},
      ];
  return (
    <div className='Chart'>
        <div className="chart-top">
            <h2>Performance</h2>
            <p>year</p>
        </div>
        <div className="chart-bottom">

            <div className="chart-item"> current period</div>
            
            <ResponsiveContainer width="100%" aspect={2 }>
                <AreaChart width={7500} height={250} data={data}
                margin={{ top: 0, right: 0, left: 0, bottom: 30 }}>
                <defs>
                    <linearGradient id="total" x1="" y1="" x2="0" y2="1">
                    <stop offset="%" stopColor="#563BFF" stopOpacity={1}/>
                    <stop offset="0%" stopColor="#fff" stopOpacity={0}/>
                    </linearGradient>
                </defs>
                <XAxis dataKey="name" stroke='gray'tick={{ fontSize: 12, fill: 'rgb(163, 171, 189)', fontWeight: 500, }} strokeWidth={0}/>
                <Tooltip />
                <Area type="monotone"  strokeWidth={4} dataKey="Total" stroke="rgb(86, 59, 255)"  fillOpacity={2} fill="url(#total)" />
            </AreaChart>
            </ResponsiveContainer>

            
        </div>
    </div>
  )
}

export default Chart