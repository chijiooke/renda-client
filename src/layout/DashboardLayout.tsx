import { FC, ReactNode, useEffect } from "react";
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
} from "@/icons";
import axios from "axios";
import { OnboardingAction } from "@/types";
import { MyModal } from "@/modals";
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
    route: DashBoardRoutes.INVENTORY,
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
    route: "",
  },
];
const DashBoardLayout: FC<Props> = ({
  children,
  backAction,
  backText = "Back",
}) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { authenticated, userId, user } = useSelector(
    (state: StoreState) => state
  );

  const getUser = async () => {
    const { data: response } = await axios.get(
      baseURL + "CustomerDetails/" + userId
    );
    if (response.success) {
      dispatch({
        type: OnboardingAction.SET_USER,
        payload: response.data,
      });
    }
  };
  useEffect(() => {
    if (!authenticated) {
      router.push(AuthRoutes.LOGIN);
    } else {
      getUser();
    }
  }, [authenticated]);
  const isActive = (route: string) => {
    return route.split("/")[1] === router.pathname.split("/")[1];
  };
  if (!authenticated) {
    return <h1>Loading</h1>;
  }
  return (
    <div className="d-flex flex-column flex-root" id="kt_app_root">
      <div
        className="d-flex flex-column flex-lg-row flex-column-fluid stepper stepper-pills stepper-column stepper-multistep"
        id="kt_create_account_stepper"
      >
        
        <div className="d-flex flex-column flex-lg-row-auto w-lg-200px w-xl-300px">
          <div className="d-flex flex-column h-full top-0 bottom-0 w-lg-200px w-xl-300px scroll-y text-black bg-white shadow pt-15">
            <img
              alt="Logo"
              src="/assets/images/Renda-logo-with-tagline.svg"
              className="h-70px"
            />
            <nav className="flex flex-col mt-5  justify-center">
              <ul>
                {" "}
                {routes.map(
                  ({ title, icon: Icon, route, children: innerRoutes }, i) => (
                    <>
                      <Link
                        href={route}
                        key={i + route}
                        className={cn(
                          "my-4 bg-[#000000] flex hover:bg-[#1b547f] cursor-pointer items-center gap-5  px-10 py-4 text-[18px]  font-semibold   group-hover:text-[#ffffff] nav",
                          { activeNav: router.pathname === route }
                        )}
                      >
                        <div className="w-[40px] flex justify-center">
                          <Icon />
                        </div>

                        <span className="text-start font-extrabold">
                          {title}
                        </span>
                        {innerRoutes && (
                          <span>
                            {" "}
                            <RightArrowIcon />
                          </span>
                        )}
                      </Link>
                      {innerRoutes &&
                        isActive(route) &&
                        innerRoutes.map(({ title, route }, idx) => (
                          <Link
                            href={route}
                            key={idx}
                            className={cn("text-center hover:bg-primary nav", {
                              activeNav: router.pathname === route,
                            })}
                          >
                            <span className="px-20 text-[16px] font-semibold p-3">
                              {" "}
                              {title}
                            </span>
                          </Link>
                        ))}
                    </>
                  )
                )}
              </ul>
            </nav>
          </div>
        </div>

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
                    <p className="text-[green] font-extrabold">Active</p>
                    <div className="relative">
                      <NotificationIcon />
                      <span className="absolute bottom-[-30px] start-0 -left-[30px]">
                        <RedDot />
                      </span>
                    </div>
                  </div>
                </div>
                <div className="my-10">
                  {!(Object.keys(user).length > 0) ? (
                    <> {children}</>
                  ) : (
                    <>Loading</>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { DashBoardLayout };
