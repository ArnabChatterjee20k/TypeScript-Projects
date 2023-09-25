import { SideNavLinks } from "../types/SideNavLinks";
import {
  AiOutlinePieChart,
  AiOutlineCalendar,
  AiOutlineSetting,
} from "react-icons/ai";
import { BsTags } from "react-icons/bs";
import { FaRegUserCircle } from "react-icons/fa";
export const Links: SideNavLinks[] = [
  { label: "Dashboard", link: "/dashboard", Icon: AiOutlinePieChart },
  { label: "Transactions", link: "/link", Icon: BsTags },
  { label: "Schedules", link: "/link", Icon: AiOutlineCalendar },
  { label: "Users", link: "/link", Icon: FaRegUserCircle },
  { label: "Setting", link: "/link", Icon: AiOutlineSetting },
];
