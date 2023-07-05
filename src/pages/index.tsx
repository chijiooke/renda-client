import {
  AreaChartCard,
  OrderCard,
  OrderTable,
  PieChartCard,
} from "@/components";
import { DashBoardLayout } from "@/layout";
import { StoreState } from "@/store/types/store-state.types";

import { baseURL, queryStringBuilder } from "@/utils";
import axios from "axios";
import { Inter } from "next/font/google";
import { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
const inter = Inter({ subsets: ["latin"] });

interface DateType {
  value: string;
  title: string;
  type: "primary" | "secondary";
  className: string;
  percentage?: boolean;
  number?: boolean;
}

export type DashboardDataType = {
  totalInventoryCost: string;
  totalOrderedDelivered: string;
  valuesOfOrdersProcessed: string;
  totalInventoryValue: string;
  valueOfOrdersDelivered: string;
  totalOrdersProcessed: string;
  totalOrdersReturned: string;
  fulfilmentRate: string;
  clientStorageAnalytics: [
    {
      storageSpace: string;
      storageLocation: string;
    }
  ];
  totalStorage: string;
};

export default function Home() {
  const { user } = useSelector((state: StoreState) => state);
  const [show, setShow] = useState(false);
  const [dashboardData, setDashboardData] = useState<DashboardDataType>();
  const [loadingDashboardData, setLoadingDashboardData] =
    useState<boolean>(false);

  const getDashboardData = async (userId: string) => {
    setLoadingDashboardData(true);
    try {
      const { data } = await axios.get(
        baseURL +
          "api/Dashboard/api/client/analytics" +
          queryStringBuilder({ customerId: userId })
      );
      setDashboardData(data);
    } catch (error) {
    } finally {
      setLoadingDashboardData(false);
    }
  };
  useEffect(() => {
    const userId = sessionStorage.getItem("userId");
    getDashboardData(userId!);
  }, []);

  const data: DateType[] = [
    {
      value: dashboardData?.totalInventoryCost || "0",
      title: "Total Inventory Count",
      type: "primary",
      className: "bg-[#EBFFF8;] border-[#008753]",
      number: false,
    },

    {
      value: dashboardData?.totalOrderedDelivered || "0",
      title: "Total volume of All orders",
      type: "primary",
      className: "bg-[#DAF6FF] border-[#043E7D]",
      number: false,
    },

    {
      value: dashboardData?.valuesOfOrdersProcessed || "0",
      title: "Total volume of orders dispatched",
      type: "primary",
      className: "bg-[#FFF6EB] border-[#FF9100]",
      number: false,
    },

    {
      value: dashboardData?.totalOrdersProcessed || "N0.00",
      title: "Total Inventory Value",
      type: "primary",
      className: "bg-[#FFF6EB] border-[#FF9100]",
      number: false,
    },
    {
      value: dashboardData?.totalOrdersReturned || "N0.00",
      title: "Total Value of all Orders",
      type: "primary",
      className: "bg-[#EBFFF8;] border-[#008753]",
      number: false,
    },

    {
      value: dashboardData?.fulfilmentRate || "N0.00",
      title: "Total Value of Orders Dispatched",
      type: "primary",
      className: "bg-[#DAF6FF] border-[#043E7D]",
      number: false,
    },
  ];

  return (
    <DashBoardLayout>
      {loadingDashboardData ? (
        "loading..."
      ) : (
        <section>
          <div>
            <h1 className="text-[32px] font-bold">
              Welcome{" "}
              <span className="capitalize">{user?.customerBusinessName}</span>
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
              <PieChartCard
                title="Storage"
                data={dashboardData?.clientStorageAnalytics}
              />
            </div>

            <div className="col-span-3">
              <AreaChartCard title="Month on Month Order Growth" />
            </div>
          </div>

          <OrderTable />
        </section>
      )}
    </DashBoardLayout>
  );
}
