import { DisplayMonthChart } from "../Charts/DisplayMonthChart";
import DataCards from "./DataCards";
import MonthlyChartProps from "../../types/MonthlyChart";
import ProductChart from "../Charts/ProductChart";
import ProductChartProps from "../../types/ProductChartProps";
import ScheduleProps from "../../types/Schedule";
import Schedule from "../Schedule/Schedule";

const chartsData: MonthlyChartProps = {
  chartData: {
    User: {
      Week0: 100,
      Week1: 400,
      Week2: 200,
      Week3: 500,
      Week4: 250,
      Week5: 367,
    },
    Guest: {
      Week0: 200,
      Week1: 400,
      Week2: 200,
      Week3: 500,
      Week4: 700,
      Week5: 267,
    },
  },
};

const productChartData: ProductChartProps = {
  chartData: {
    "Basic Trees": 55,
    "Super Hoodies": 14,
    "Custom Short Pants": 31,
  },
};

const schedule:ScheduleProps = {
  todaysSchedule: [
    {
      time: "14.00-15.00",
      location: "Sunset Road, Kuta, Bali ",
      meetingTitle: "Meeting with suppliers from Kuta Bali",
    },
    {
      time: "18.00-20.00",
      location: "Central Jakarta",
      meetingTitle: "Check operation at Giga Factory 1",
    },
  ],
};
export default function VisualisationSpace() {
  return (
    <div className="w-full flex flex-col gap-7">
      <DataCards />
      <DisplayMonthChart chartData={chartsData.chartData} />
      <div className="flex flex-col md:flex-row gap-5 w-full md:px-1">
        <ProductChart chartData={productChartData.chartData} />
        <Schedule todaysSchedule={schedule.todaysSchedule}/>
      </div>
    </div>
  );
}
