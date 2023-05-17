import { FC, ReactNode, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { StoreState } from "@/store/reducer";
import { AuthRoutes } from "@/utils";
import cn from "classnames";
import {
  DashboardIcon,
  StorageIcon,
  InventoryIcon,
  OrderManagementIcon,
  NotificationIcon,
  RedDot,
  DeliveryIcon,
  ReturnsIcon,
  LeftArrowIcon,
} from "@/icons";
type Props = {
  children: ReactNode;
  backAction?: boolean;
  backText?: string;
};
interface NavRoutes {
  icon: () => JSX.Element;
  title: string;
  route: string;
}
const routes: NavRoutes[] = [
  {
    icon: DashboardIcon,
    title: "Dashboard",
    route: "/",
  },
  {
    icon: StorageIcon,
    title: "Storage",
    route: "/storage",
  },
  {
    icon: InventoryIcon,
    title: "Inventory",
    route: "/",
  },
  {
    icon: OrderManagementIcon,
    title: "Order Mgt",
    route: "/",
  },
  {
    icon: DeliveryIcon,
    title: "Delivery",
    route: "/",
  },
  {
    icon: ReturnsIcon,
    title: "Returns",
    route: "/",
  },
  {
    icon: InventoryIcon,
    title: "Reconciliation",
    route: "/",
  },
  {
    icon: OrderManagementIcon,
    title: "Reports",
    route: "/",
  },
];
const DashBoardLayout: FC<Props> = ({
  children,
  backAction,
  backText = "Back",
}) => {
  const router = useRouter();
  const { authenticated } = useSelector((state: StoreState) => state);
  useEffect(() => {
    if (!authenticated) {
      router.push(AuthRoutes.LOGIN);
    }
  }, [authenticated]);
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
            <nav className="flex flex-col mt-5 mx-7 justify-center">
              <ul>
                {" "}
                {routes.map(({ title, icon: Icon, route }, i) => (
                  <Link
                    href={route}
                    key={i}
                    className=" my-4 bg-[#000000] flex hover:bg-[#1b547f] cursor-pointer items-center gap-5  p-4 text-[18px]  font-semibold   group-hover:text-[#ffffff]"
                  >
                    <div className="w-[40px] flex justify-center">
                      <Icon />
                    </div>

                    <span className="text-start font-extrabold">{title}</span>
                  </Link>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        <div
          className="d-flex flex-column  rounded w-full h-full m-10"
          style={{ height: "95vh" }}
        >
          <div className="d-flex flex-center flex-column flex-column-fluid bg-[#f4fbff]">
            <div className="w-full h-full">
              <div className="bg-white rounded w-full h-[95vh]  p-10 shadow overflow-scroll">
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
                    {/* <div>
                      <img src="/assets/images/user.png" />
                    </div> */}
                  </div>
                </div>
                <div className="my-10">{children}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { DashBoardLayout };
