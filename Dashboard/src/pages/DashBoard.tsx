import VisualisationSpace from "../components/DashBoard/VisualisationSpace";
import Navbar from "../layout/Navbar";
import SideNav from "../layout/SideNav";

export default function DashBoard() {
  return (
    <section className="flex px-6 md:px-10 gap-14">
      <SideNav />
      <div className="flex flex-col gap-8 w-full py-5 md:py-14">
        <Navbar />
        <VisualisationSpace />
      </div>
    </section>
  );
}
