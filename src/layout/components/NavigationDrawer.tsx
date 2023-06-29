import {
  Box,
  Collapse,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
} from "@mui/material";
import React, { useState } from "react";
import { useRouter } from "next/router";
import { navigationItems } from "../utils/navigation-routes";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";

export const NavigationDrawer = () => {
  const router = useRouter();
  const [isDrawerOpen, setisDrawerOpen] = useState(true);
  const drawerWidth = isDrawerOpen ? "300px" : "0px";

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const isActive = (route: string) => {
    return route.split("/")[1] === router.pathname.split("/")[1];
  };
  const isActiveSubRoute = (route: string) => {
    return route.split("/")[2] === router.pathname.split("/")[2];
  };

  // const [activeSubroute, setactiveSubroute] = useState(router.pathname.split("/")[2])

  return (
    <Drawer
      sx={{
        backgroundColor: "#fff",
        width: drawerWidth,
        color: "gray",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
      variant="persistent"
      anchor="left"
      open={isDrawerOpen}
    >
      <Paper
        sx={{
          backgroundColor: "#fff",
          minWidth: drawerWidth,
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
          // justifyContent: "center",
          // alignItems: "center",
          paddingTop: "2rem",
          minHeight: "100vh",
        }}
      >
        <Box sx={{ paddingLeft: "5rem", width: "100%" }}>
          <img alt="Renda" src="/assets/images/Renda-logo-with-tagline.svg" />
        </Box>
        <List sx={{ mt: 5, width: "100%" }}>
          {" "}
          {navigationItems.map(
            ({ Icon, subNavigation, title, route }, index) => (
              <ListItem
                key={route}
                disablePadding
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "start",
                  width: "100%",
                }}
              >
                {" "}
                <ListItemButton
                  selected={isActive(route)}
                  key={index}
                  onClick={() =>
                    !subNavigation
                      ? router.push(route)
                      : setActiveIndex(activeIndex !== null ? null : index)
                  }
                  sx={{
                    width: "100%",
                    "&.Mui-selected": {
                      color: "common.white",
                      backgroundColor: "#1b547f",

                      "&:hover": {
                        backgroundColor: "primary.light",
                      },
                    },
                  }}
                >
                  <>
                    <ListItemIcon>
                      <Icon
                        sx={{
                          color: isActive(route) ? "common.white" : "none",
                        }}
                      />
                    </ListItemIcon>

                    <ListItemText primary={title} />
                    {subNavigation && (
                      <>
                        {" "}
                        {(activeIndex !== null &&
                          activeIndex + 1 === index + 1) ||
                        isActive(route) ? (
                          <KeyboardArrowDownRoundedIcon />
                        ) : (
                          <KeyboardArrowRightRoundedIcon />
                        )}
                      </>
                    )}
                  </>
                  {}
                </ListItemButton>
                {subNavigation && (
                  <Collapse
                    in={
                      (activeIndex !== null && activeIndex + 1 === index + 1) ||
                      isActive(route)
                    }
                    timeout="auto"
                    unmountOnExit
                    sx={{ width: "100%", p: 0 }}
                  >
                    <List sx={{ width: "100%", p: 0 }}>
                      {subNavigation.map((subNav) => (
                        <ListItemButton
                          key={subNav?.route}
                          sx={{
                            pl: 10,
                            width: "100%",
                            backgroundColor: isActiveSubRoute(subNav?.route)
                              ? "#1b547f4d"
                              : "none",
                            "&:hover": {
                              backgroundColor: isActiveSubRoute(subNav?.route)
                                ? "#1b547f4d"
                                : "none",
                            },
                          }}
                          onClick={() => {
                            router.push(subNav.route);
                          }}
                        >
                          <ListItemText primary={subNav.title} />
                        </ListItemButton>
                      ))}
                    </List>
                  </Collapse>
                )}
              </ListItem>
            )
          )}
        </List>
      </Paper>
    </Drawer>
  );
};
