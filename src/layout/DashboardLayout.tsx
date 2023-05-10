import { FC, ReactNode, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { StoreState } from "@/store/reducer";
import { AuthRoutes } from "@/utils";
import {
  DashboardIcon,
  StorageIcon,
  InventoryIcon,
  OrderManagementIcon,
  NotificationIcon,
  RedDot,
} from "@/icons";
type Props = {
  children: ReactNode;
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
    route: "storage",
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
];
const DashBoardLayout: FC<Props> = ({ children }) => {
  const router = useRouter();
  const { authenticated } = useSelector((state: StoreState) => state);
  useEffect(() => {
    // if (!authenticated) {
    //   router.push(AuthRoutes.LOGIN);
    // }
  }, [authenticated]);
  return (
    <div className="d-flex flex-column flex-root" id="kt_app_root">
      <div
        className="d-flex flex-column flex-lg-row flex-column-fluid stepper stepper-pills stepper-column stepper-multistep"
        id="kt_create_account_stepper"
      >
        <div className="d-flex flex-column flex-lg-row-auto w-lg-200px w-xl-300px">
          <div className="d-flex flex-column h-full top-0 bottom-0 w-lg-200px w-xl-300px scroll-y  bg-white shadow pt-15">
            <img
              alt="Logo"
              src="/assets/images/Renda-logo-with-tagline.svg"
              className="h-70px"
            />
            <nav className="flex flex-col mt-10">
              <ul>
                {" "}
                {routes.map(({ title, icon: Icon, route }, i) => (
                  <Link
                    href={route}
                    key={i}
                    className=" my-4 grid hover:bg-[#1b547f] cursor-pointer grid-cols-3 items-center gap-0  p-5 text-[18px]  font-semibold bg-[#ffffff]  group-hover:text-[#ffffff]"
                  >
                    <Icon />
                    <span className=" col-span-2 text-start">{title}</span>
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
              <div className="bg-white rounded w-full h-full  p-10 shadow overflow-scroll">
                <div className="flex flex-row-reverse w-full my-3">
                  <div className="flex gap-5 items-center">
                    <span className="text-green-100">Active</span>
                    <div className="relative">
                      <NotificationIcon />
                      <span className="absolute bottom-[-30px] start-0 -left-[10px]">
                        <RedDot />
                      </span>
                    </div>
                    <div>
                      <img src="/assets/images/user.png" />
                    </div>
                  </div>
                </div>
                {children}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { DashBoardLayout };
