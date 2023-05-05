import { FC, ReactNode, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { StoreState } from "@/store/reducer";
import { AuthRoutes } from "@/utils";
type Props = {
  children: ReactNode;
};
interface NavRoutes {
  icon: string;
  title: string;
}
const navRoutes: NavRoutes[] = [
  {
    icon: "",
    title: "Dashboard",
  },
  {
    icon: "",
    title: "Storage",
  },
  {
    icon: "",
    title: "Inventory",
  },
  {
    icon: "",
    title: "Order Mgt",
  },
  {
    icon: "",
    title: "Delivery",
  },
  {
    icon: "",
    title: "Returns",
  },
  {
    icon: "",
    title: "Reconciliation",
  },
  {
    icon: "",
    title: "Reports",
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
          <div className="d-flex flex-column h-full top-0 bottom-0 w-lg-200px w-xl-300px scroll-y  bg-white shadow pt-7">
            <img
              alt="Logo"
              src="/assets/images/Renda-logo-with-tagline.svg"
              className="h-70px"
            />
            <nav className="flex flex-col mt-10">
              {navRoutes.map((nav, i) => (
                <Link
                  href={nav.title}
                  key={i}
                  className="flex font-semibold text-center pl-11 gap-5  text-black bg-white hover:bg-primary list-none  my-2 p-5  border-1 text-[18px]"
                >
                  <p className="">kajj</p>
                  <span className="text-green-200 hover:text-blue-300">
                    {nav.title}
                  </span>
                </Link>
              ))}
            </nav>
          </div>
        </div>

        <div
          className="d-flex flex-column  rounded w-full h-full m-10"
          style={{ height: "95vh" }}
        >
          <div className="d-flex flex-center flex-column flex-column-fluid bg-[#f4fbff]">
            <div className="w-full h-full">
              <div className="bg-white rounded w-full h-full  p-10 shadow">
                <div className="flex flex-row-reverse w-full my-3">
                  <div className="flex gap-3">
                    <p>kjhgf</p>
                    <p>kiyddfgh</p>
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
