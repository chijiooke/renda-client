import { FC, ReactNode, useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { StoreState } from "@/store/reducer";
import { AuthRoutes, DashBoardRoutes, baseURL } from "@/utils";
import cn from "classnames";

import {
  DashboardIcon,
  StorageIcon,
  InventoryIcon,
  OrderManagementIcon,
  NotificationIcon,
  RedDot,
  LeftArrowIcon,
  RightArrowIcon,
  DeliveryIcon,
  DeliveryTruckIcon,
} from "@/icons";
import axios from "axios";
import { OnboardingAction } from "@/types";
import { NavigationDrawer } from "./components/NavigationDrawer";

type Props = {
  children: ReactNode;
  backAction?: boolean;
  backText?: string;
};
interface NavRoutes {
  icon: () => JSX.Element;
  title: string;
  route: string;
  children?: {
    title: string;
    route: string;
  }[];
}
const routes: NavRoutes[] = [
  {
    icon: DashboardIcon,
    title: "Dashboard",
    route: DashBoardRoutes.DASHBOARD,
  },
  {
    icon: StorageIcon,
    title: "Storage",
    route: DashBoardRoutes.STORAGE,
    children: [
      {
        title: "Storage Booking",
        route: DashBoardRoutes.STORAGE_BOOKING,
      },
    ],
  },
  {
    icon: InventoryIcon,
    title: "Inventory",
    route: DashBoardRoutes.INVENTORY_ALL,
    children: [
      {
        title: "All Inventory",
        route: DashBoardRoutes.INVENTORY_ALL,
      },
      {
        title: "Add New Stock",
        route: DashBoardRoutes.INVENTORY_NEW_UPLOAD,
      },
    ],
  },
  {
    icon: OrderManagementIcon,
    title: "Order Mgt",
    route: DashBoardRoutes.ORDERMGT,
  },
];
const DashBoardLayout: FC<Props> = ({
  children,
  backAction,
  backText = "Back",
}) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { user } = useSelector((state: StoreState) => state);

  const [loading, setLoading] = useState(false);

  const showDeliveryTruckIcon =
    router.pathname === DashBoardRoutes.INVENTORY_ALL;

  const handleTruckClick = () => {
    router.push({ pathname: DashBoardRoutes.DELIVERY_VAN });
  };

  const getUser = async (id: string) => {
    setLoading(true);
    try {
      const { data: response } = await axios.get(
        baseURL + "CustomerbyAppUser/" + id
      );
      if (response.success) {
        dispatch({
          type: OnboardingAction.SET_USER,
          payload: response.data,
        });
      }
    } catch (error) {
      router.push(AuthRoutes.LOGIN);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const userId = sessionStorage.getItem("userId");
    if (!userId) {
      router.push(AuthRoutes.LOGIN);
    }
    if (!user) {
      getUser(userId!);
    }
  }, []);

  const isActive = (route: string) => {
    return route.split("/")[1] === router.pathname.split("/")[1];
  };
  return (
    <>
      <div className="d-flex flex-column flex-root" id="kt_app_root">
        <div
          className="d-flex flex-column flex-lg-row flex-column-fluid stepper stepper-pills stepper-column stepper-multistep"
          id="kt_create_account_stepper"
        >
         <NavigationDrawer />

          <div
            className="d-flex flex-column  rounded w-full h-full m-10 overflow-scroll shadow"
            style={{ height: "95vh" }}
          >
            <div className="d-flex flex-center flex-column flex-column-fluid bg-[#f4fbff]">
              <div className="w-full h-full ">
                <div className="bg-white rounded w-full h-full  p-10 ">
                  <div
                    className={cn("flex  w-full my-3", {
                      "flex-row-reverse": !backAction,
                      "justify-between": backAction,
                    })}
                  >
                    {backAction && (
                      <div
                        className="flex items-center gap-3 opacity-60 cursor-pointer hover:opacity-100"
                        onClick={() => router.back()}
                      >
                        <LeftArrowIcon />
                        {backText}
                      </div>
                    )}

                    <div className="flex gap-5 items-center">
                      <button
                        onClick={handleTruckClick}
                        className={cn(" rounded-sm p-3", {
                          "text-primary": !showDeliveryTruckIcon,
                          "text-white bg-primary": showDeliveryTruckIcon,
                        })}
                      >
                        <DeliveryTruckIcon />
                      </button>

                      <p className="text-[green] font-extrabold">Active</p>
                      <div className="relative">
                        <NotificationIcon />
                        <span className="absolute bottom-[-30px] start-0 -left-[30px]">
                          <RedDot />
                        </span>
                      </div>
                      <img
                        src="/assets/images/profile.jpeg"
                        className="h-[30px] scale-150"
                      />
                    </div>
                  </div>
                  <div className="my-10">
                    {!loading ? <> {children}</> : <>Loading</>}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { DashBoardLayout };
