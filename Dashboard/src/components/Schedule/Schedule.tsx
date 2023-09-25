import ScheduleProps from "../../types/Schedule";
import ScheduleSummary from "./ScheduleSummary";

export default function Schedule({ todaysSchedule }: ScheduleProps) {
  return (
    <div className="bg-white p-6 rounded-lg flex flex-col gap-6 flex-1">
      <div className="flex justify-between items-center">
        <h5 className="font-monteserat font-bold text-base md:text-xl">
          Today’s schedule
        </h5>
        <span className="text-slate-400 text-[13px]">Sea All {`>`}</span>
      </div>
      <div className="flex flex-col items-center md:flex-row md:justify-around gap-10">
        <ScheduleSummary todaysSchedule={todaysSchedule}/>
      </div>
    </div>
  );
}
