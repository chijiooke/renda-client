import Image from "public\next.svg";
import { Inter } from "next/font/google";
import { DashBoardLayout } from "@/layout";
import {
  OrderCard,
  PieChartCard,
  AreaChartCard,
  OrderTable,
} from "@/components";
const inter = Inter({ subsets: ["latin"] });
import { useSelector, useDispatch } from "react-redux";
import { StoreState } from "@/store/reducer";
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
    value: 0,
    title: "Total Inventory Count",
    type: "primary",
    className: "",
  },
  {
    value: 0,
    title: "Total Orders Delivered",
    type: "primary",
    className: "",
  },
  {
    value: 0,
    title: "Value of Orders Processed",
    type: "primary",
    className: "",
    number: false,
  },
  {
    value: 0,
    title: "Total Inventory  Value",
    type: "primary",
    className: "border-[#043E7D] bg-[#DAF6FF] ",
    number: false,
  },
  {
    value: 0,
    title: "Value of Orders Delivered",
    type: "primary",
    className: "",
    number: false,
  },
  {
    value: 0,
    title: "Total  Orders Processed",
    type: "primary",
    className: "bg-[#EBFFF8] border-[#008753]",
  },
  {
    value: 0,
    title: "Total Orders Returned",
    type: "primary",
    className: "",
  },
  {
    value: 0,
    title: "Fulfillment Rate",
    type: "primary",
    className: "bg-[#FFF6EB] border-[#FF9100]",
    percentage: true,
  },
  {
    value: 0,
    title: "Fulfillment Rate",
    type: "primary",
    className: "bg-[#FFF6EB] border-[#FF9100]",
    percentage: true,
  },
];
export default function Home() {
  const { user } = useSelector((state: StoreState) => state);

  return (
    <DashBoardLayout>
      <section>
        <div>
          <h1 className="text-[32px] font-bold">
            Welcome{" "}
            <span className="capitalize">
              {user?.customerBusinessName?.split(" ")}
            </span>
          </h1>
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
        </div>
        <div className="grid grid-cols-5 gap-8 my-5">
          <div className="col-span-2">
            <PieChartCard title="Storage" />
          </div>

          <div className="col-span-3">
            <AreaChartCard title="Month on Month Order Growth" />
          </div>
        </div>

        <OrderTable />
      </section>
    </DashBoardLayout>
  );
}
