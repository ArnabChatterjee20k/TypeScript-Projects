import { ScheduleData } from "../../types/Schedule";
import ScheduleProps from "../../types/Schedule";
const colors = ["#9BDD7C", "#6972C3"];
export default function ScheduleSummary({ todaysSchedule }: ScheduleProps) {
  return (
    <div className="flex flex-col w-full gap-4 px-2 md:px-4 h-full">
      {todaysSchedule.map((props, index) => (
        <SchedulePoints {...props} color={colors[index]} />
      ))}
    </div>
  );
}

function SchedulePoints({
  location,
  meetingTitle,
  time,
  color,
}: ScheduleData & { color: string }) {
  return (
    <div className="flex gap-2">
      <div className="w-1 h-full" style={{ backgroundColor: color }} />
      <div className="flex flex-col w-full gap-1 py-1">
        <p className="text-[14px] font-medium">{meetingTitle}</p>
        <p className="text-[13px] font-thin">{time}</p>
        <p className="text-[13px] font-thin">{location}</p>
      </div>
    </div>
  );
}
