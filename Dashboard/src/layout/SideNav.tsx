import { Link, useLocation } from "react-router-dom";
import { Links } from "../data/Links";
import { twMerge } from "tailwind-merge";

export default function SideNav() {
  return (
    <aside className="hidden mr-[2rem] w-[18rem] lg:flex flex-col py-10">
      <div className="bg-black fixed top-6 bottom-10 w-[15rem] rounded-3xl flex-1 flex flex-col pl-10 py-12 gap-8 items-start">
        <h3 className="font-monteserat text-2xl text-white font-[700]">
          Target.
        </h3>
        <div className="flex flex-col flex-1 justify-between">
          <DashboardLinks />
          <UserHelp />
        </div>
      </div>
    </aside>
  );
}

function DashboardLinks() {
  const { pathname } = useLocation();
  return (
    <div className="flex flex-col gap-5">
      {Links.map(({ Icon, label, link }) => {
        return (
          <Link to={link} key={link} className="flex items-center gap-3">
            <Icon color="white" size={14} />
            <span
              className={twMerge(
                "text-white font-[400] text-[12px] font-monteserat",
                pathname === link ? "font-bold" : ""
              )}
            >
              {label}
            </span>
          </Link>
        );
      })}
    </div>
  );
}

function UserHelp() {
  return (
    <div className="flex flex-col justify-start gap-2">
      <Link
        to="/help"
        className="text-white font-[400] text-[10px] font-monteserat"
      >
        Help
      </Link>
      <Link
        to="/contact"
        className="text-white font-[400] text-[10px] font-monteserat"
      >
        Contact Us
      </Link>
    </div>
  );
}
