import { FC } from "react";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const data = [
  {
    name: "Jan",
    uv: 20,
  },
  {
    name: "Feb",
    uv: 10,
  },
  {
    name: "Mar",
    uv: 30,
  },
  {
    name: "Apr",
    uv: 95,
  },
  {
    name: "May",
    uv: 70,
  },
  {
    name: "Jun",
    uv: 100,
  },
  {
    name: "Jul",
    uv: 50,
  },
  {
    name: "Aug",
    uv: 36,
  },
  {
    name: "Sep",
    uv: 34,
  },
  {
    name: "Oct",
    uv: 25,
  },
  {
    name: "Nov",
    uv: 25,
  },
  {
    name: "Dec",
    uv: 25,
  },
];
type Props = {
  title: string;
};
const AreaChartCard: FC<Props> = ({ title }) => {
  return (
    <div className=" p-4 gap-10 rounded border-2  border-gray-300 items-center  w-full ">
      <p className="font-extrabold text-[14px]">{title}</p>
      <div>
        <AreaChart
          width={750}
          height={315}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="uv"
            stroke="#aed1f3"
            fill="#aed1f3"
            fillOpacity={0.3}
          />
        </AreaChart>
      </div>
    </div>
  );
};

export { AreaChartCard };
