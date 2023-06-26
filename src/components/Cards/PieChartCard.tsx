import { DashboardDataType } from "@/pages";
import { FC } from "react";
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from "recharts";

type Props = {
  title: string;
  data:
    | {
        storageSpace: string;
        storageLocation: string;
      }[]
    | undefined;
};
const PieChartCard: FC<Props> = ({ title, data }) => {
  const pieChartData =
    data?.map((item, index) => ({
      name: "Storage Loca",
      value: item?.storageLocation,
      fill: index % 2 === 0 ? "#b6b6bd" : "#ff9202",
    })) || [];

  const total = pieChartData.reduce((a, b) => a + Number(b.value), 0);
  return (
    <div className=" p-4 gap-10 rounded border-2  border-gray-300 items-center  w-full">
      <p className="font-extrabold text-[14px]">{title}</p>
      <div className="w-full flex justify-center">
        <PieChart width={300} height={300}>
          <Pie
            dataKey="value"
            isAnimationActive={true}
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={80}
            innerRadius={40}
            fill="#8884d8"
            label
          />
          <Tooltip />
        </PieChart>
      </div>
      <p className="text-end font-bold">{total}sqm</p>
    </div>
  );
};

export { PieChartCard };
