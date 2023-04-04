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
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "15 February",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "16 February",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "17 February",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "18 February",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "19 February",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "20 February",
    uv: 6490,
    pv: 4300,
    amt: 2100,
  },
];

const ChartComponent = () => {
  return (
    <>
      <div className="d-flex justify-content-between p-2">
        <h3>Revenue</h3> <h3>7 days VS prior week</h3>
        
      </div>

      <ResponsiveContainer width="100%" height="50%">
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
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip separator=": $" />
          <Line
            type="natural"
            dataKey="pv"
            stroke="#3e5a7a"
            activeDot={{ r: 8 }}
          />
          <Line type="natural" dataKey="uv" stroke="#000000"  activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
};

export default ChartComponent;
