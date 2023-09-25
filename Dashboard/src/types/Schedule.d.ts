export default interface ScheduleProps {
  todaysSchedule: ScheduleData[];
}

export interface ScheduleData {
  time: string;
  location: string;
  meetingTitle: string;
}