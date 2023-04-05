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
    amt: 2210,
  },
  {
    name: "15 February",
    currentWeek: 2000,
    previousWeek: 9800,
    amt: 2290,
  },
  {
    name: "16 February",
    currentWeek: 2780,
    previousWeek: 3908,
    amt: 2000,
  },
  {
    name: "17 February",
    currentWeek: 1890,
    previousWeek: 4800,
    amt: 2181,
  },
  {
    name: "18 February",
    currentWeek: 2390,
    previousWeek: 3800,
    amt: 2500,
  },
  {
    name: "19 February",
    currentWeek: 3490,
    previousWeek: 4300,
    amt: 2100,
  },
  {
    name: "20 February",
    currentWeek: 6490,
    previousWeek: 4300,
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
            dataKey="currentWeek"
            stroke="#3e5a7a"
            activeDot={{ r: 8 }}
          />
          <Line type="natural" dataKey="previousWeek" stroke="#000000"  activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
};

export default ChartComponent;
