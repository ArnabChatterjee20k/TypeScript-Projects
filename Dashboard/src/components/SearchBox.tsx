import { CiSearch } from "react-icons/ci";
import { BiSearch } from "react-icons/bi";

import useIsMobile from "../hooks/useIsMobile";

export default function SearchBox() {
    const isMobile = useIsMobile()
    if(isMobile) return <BiSearch size="1.5em" />
  return (
    <div className="flex items-center gap-2 px-5 py-2 rounded-xl bg-white">
      <input placeholder="search.." className="outline-transparent" />
      <CiSearch size="1em" className="fill-slate-500"/>
    </div>
  );
}
