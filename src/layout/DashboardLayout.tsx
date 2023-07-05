
import { AuthRoutes, DashBoardRoutes, baseURL } from "@/utils";
import cn from "classnames";
import { useRouter } from "next/router";
import { FC, ReactNode, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { ContextMenu } from "@/components/context-menu/ContextMenu";
import {
  DashboardIcon,
  DeliveryTruckIcon,
  InventoryIcon,
  LeftArrowIcon,
  OrderManagementIcon,
  StorageIcon
} from "@/icons";
import { StateReducerActions } from "@/types";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import {
  Avatar,
  Badge,
  Box,
  Button,
  IconButton,
  Typography,
} from "@mui/material";
import axios from "axios";
import { NavigationDrawer } from "./components/NavigationDrawer";
import { StoreState } from "@/store/types/store-state.types";

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
  const { user, myDeliveryVanItems } = useSelector((state: StoreState) => state);

  const [loading, setLoading] = useState(false);

  const showDeliveryTruckIcon =
    router.pathname === DashBoardRoutes.INVENTORY_ALL;

  const handleTruckClick = () => {
    router.push({ pathname: DashBoardRoutes.DELIVERY_VAN });
  };
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClickAway = () => {
    setAnchorEl(null);
  };

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const getUser = async (id: string) => {
    setLoading(true);
    try {
      const { data: response } = await axios.get(
        baseURL + "CustomerbyAppUser/" + id
      );
      if (response.success) {
        dispatch({
          type: StateReducerActions.SET_USER,
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

  const signOut = () => {
    sessionStorage.removeItem("userId");
    router.push("/auth/login");
  };

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

          <div className="d-flex flex-column  rounded w-full h-full m-10 overflow-scroll shadow">
            <div className="d-flex flex-center flex-column flex-column-fluid bg-[#f4fbff]">
              <div className="w-full h-full ">
                <div className="bg-white rounded w-full h-full  p-10 ">
                  <div
                    className={cn("flex  w-full my-3  sticky  top-2/4", {
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

                    <div className="flex gap-3 items-center">
                      <Typography
                        sx={{
                          color: "success.main",
                          padding: "0.5rem 1rem",
                          // backgroundColor: "#4caf5033",
                          borderRadius: "1rem",
                        }}
                      >
                        Active
                      </Typography>
                      <IconButton>
                        {" "}
                        <Badge
                          color="error"
                          badgeContent={5}
                          overlap="circular"
                          invisible={false}
                        >
                          <NotificationsNoneOutlinedIcon fontSize="medium" />
                        </Badge>
                      </IconButton>
                      <IconButton
                        onClick={handleTruckClick}
                        sx={{ backgroundColor: "primary.main" }}
                      >
                        {" "}
                        <Badge
                          color="error"
                          badgeContent={myDeliveryVanItems.length}
                          anchorOrigin={{
                            vertical: "top",
                            horizontal: "right",
                          }}
                          invisible={false}
                        >
                          <DeliveryTruckIcon />
                        </Badge>
                      </IconButton>
                      <Box sx={{ display: "flex", alignItems: "center" }}>
                        <IconButton>
                          <Badge
                            color="success"
                            variant="dot"
                            anchorOrigin={{
                              vertical: "bottom",
                              horizontal: "right",
                            }}
                            overlap="circular"
                            invisible={false}
                          >
                            <Avatar
                              sx={{ width: 40, height: 40 }}
                              alt={user?.contactName}
                              src="/static/images/avatar/1.jpg"
                              onClick={handleClick}
                            />{" "}
                          </Badge>
                        </IconButton>
                        <Box sx={{ display: "flex", flexDirection: "column" }}>
                          <Typography
                            variant="body2"
                            p={0}
                            m={0}
                            className="text-[#1b547f] font-semibold"
                          >
                            {user?.customerBusinessName}
                          </Typography>
                          <Typography variant="caption" p={0} m={0}>
                            Client Id: {user?.customerId}
                          </Typography>
                        </Box>
                      </Box>

                      <ContextMenu
                        handleClickAway={handleClickAway}
                        open={open}
                        anchorEl={anchorEl}
                      >
                        {/* <Box></Box> */}
                        <Button onClick={() => signOut()} className="">
                          Sign Out
                        </Button>
                      </ContextMenu>
                    </div>
                  </div>
                  <div>{!loading ? <> {children}</> : <>Loading</>}</div>
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
