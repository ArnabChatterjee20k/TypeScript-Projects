import { BsTags } from "react-icons/bs";
import { MdOutlinePayments } from "react-icons/md";
import { FaThumbsUp } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";

import { DataCardsProps } from "../types/DataCards";
export const DataCardsData: DataCardsProps[] = [
  { heading: "Total Revenues", value: "$2,129,430", Icon: MdOutlinePayments,color:"#DDEFE0" },
  { heading: "Total Transactions", value: "1,520", Icon: BsTags , color:"#DEE0EF"},
  { heading: "Total Likes", value: "9,721", Icon: FaThumbsUp ,color:"#EFDADA"},
  { heading: "Total Users", value: "892", Icon: FiUsers ,color:"#F4ECDD"},
];
