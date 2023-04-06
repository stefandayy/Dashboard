import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";


const ChartComponent = ({data}) => {
  return (
    <>
      <div className="d-flex  justify-content-between align-items-baseline py-3">
        <b style={{ fontSize: "30px" }}>Revenue</b>{" "}
        <p>Last 7 days VS prior week</p>
      </div>

      <ResponsiveContainer width="100%" height="40%">
        <LineChart
          width={500}
          height={300}
          data={data.user1.chartData}
          margin={{
            top: 20,
            right: 10,
            left: 0,
            bottom: 5,
          }}
        >
          <CartesianGrid opacity={0.2} stroke="#141414" vertical={false} />
          <XAxis dataKey="name" tickCount={3} />
          <YAxis />
          <Tooltip separator=": $" contentStyle={{backgroundColor:"black", color:"white"}} />
          <Line
            type="natural"
            dataKey="currentWeek"
            stroke="#3e5a7a"
            strokeWidth={4}
            strokeOpacity={0.8}
            activeDot={{ r: 8 }}
          />
          <Line
            type="natural"
            dataKey="previousWeek"
            stroke="#5C6670"
            strokeOpacity={0.8}
            strokeWidth={4}
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
};

export default ChartComponent;
