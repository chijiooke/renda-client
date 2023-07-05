import { DashBoardRoutes } from '@/utils';
import AccessTimeTwoToneIcon from '@mui/icons-material/AccessTimeTwoTone';
import DashboardTwoToneIcon from '@mui/icons-material/DashboardTwoTone';
import HomeWorkTwoToneIcon from '@mui/icons-material/HomeWorkTwoTone';
import InventoryTwoToneIcon from '@mui/icons-material/InventoryTwoTone';
import { NavigationItemType } from '../types/navigation-item.type';

export const navigationItems:NavigationItemType[] = [
    {
      Icon: DashboardTwoToneIcon,
      title: "Dashboard",
      route: DashBoardRoutes.DASHBOARD,
    },
    {
      Icon: HomeWorkTwoToneIcon,
      title: "Storage",
      route: DashBoardRoutes.STORAGE,
      subNavigation: [
        {
          title: "Storage Booking",
          route: DashBoardRoutes.STORAGE_BOOKING,
        },
      ],
    },
    {
      Icon: InventoryTwoToneIcon,
      title: "Inventory",
      route: DashBoardRoutes.INVENTORY_ALL,
      subNavigation: [
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
      Icon: AccessTimeTwoToneIcon,
      title: "Order Management",
      route: DashBoardRoutes.ORDERMGT,
    },
  ];