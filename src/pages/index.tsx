import Image from "next/image";
import { Inter } from "next/font/google";
import { DashBoardLayout } from "@/layout";
import {
  OrderCard,
  PieChartCard,
  AreaChartCard,
  OrderTable,
} from "@/components";
const inter = Inter({ subsets: ["latin"] });
interface DateType {
  value: number;
  title: string;
  type: "primary" | "secondary";
  className: string;
  percentage?: boolean;
  number?: boolean;
}
const data: DateType[] = [
  {
    value: 750,
    title: "Total Inventory Count",
    type: "primary",
    className: "",
  },
  {
    value: 200,
    title: "Total Orders Delivered",
    type: "primary",
    className: "",
  },
  {
    value: 322000,
    title: "Value of Orders Processed",
    type: "secondary",
    className: "",
    number: false,
  },
  {
    value: 662000,
    title: "Total Inventory  Value",
    type: "primary",
    className: "border-[#043E7D] bg-[#DAF6FF] ",
    number: false,
  },
  {
    value: 662000,
    title: "Value of Orders Delivered",
    type: "primary",
    className: "",
    number: false,
  },
  {
    value: 100,
    title: "Total  Orders Processed",
    type: "primary",
    className: "bg-[#EBFFF8] border-[#008753]",
  },
  {
    value: 600,
    title: "Total Orders Returned",
    type: "primary",
    className: "",
  },
  {
    value: 85,
    title: "Fulfillment Rate",
    type: "primary",
    className: "bg-[#FFF6EB] border-[#FF9100]",
    percentage: true,
  },
];
export default function Home() {
  return (
    <DashBoardLayout>
      <section>
        <div>
          <h1 className="text-[32px] font-bold">Welcome Promise</h1>
          <p className="capitalize text-gray-100 text-[14px] mt-1">
            Where do you want to start today
          </p>
        </div>
        <div className="grid grid-cols-3 gap-8 my-10">
          {data.map((v, i) => (
            <OrderCard
              key={i}
              value={v.value}
              title={v.title}
              type={v.type}
              className={v.className}
              percentage={v.percentage}
              number={v.number}
            />
          ))}

          <PieChartCard title="Storage" />
          <AreaChartCard title="Month on Month Order Growth" />
        </div>
        <OrderTable />
      </section>
    </DashBoardLayout>
  );
}
