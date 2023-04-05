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

const data = [
  {
    name: "14 February",
    currentWeek: 3000,
    previousWeek: 1398,
  },
  {
    name: "15 February",
    currentWeek: 2000,
    previousWeek: 4000,
  },
  {
    name: "16 February",
    currentWeek: 2780,
    previousWeek: 3908,
  },
  {
    name: "17 February",
    currentWeek: 1890,
    previousWeek: 4800,
  },
  {
    name: "18 February",
    currentWeek: 2390,
    previousWeek: 3800,
  },
  {
    name: "19 February",
    currentWeek: 3490,
    previousWeek: 4300,
  },
  {
    name: "20 February",
    currentWeek: 5490,
    previousWeek: 4300,
  },
];

const ChartComponent = () => {
  return (
    <>
      <div className="d-flex  justify-content-between align-items-baseline">
        <b style={{ fontSize: "30px" }}>Revenue</b>{" "}
        <p>Last 7 days VS prior week</p>
      </div>

      <ResponsiveContainer width="100%" height="40%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 20,
            right: 10,
            left: 10,
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
