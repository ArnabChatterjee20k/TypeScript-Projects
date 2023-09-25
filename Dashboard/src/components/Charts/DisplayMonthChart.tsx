import MonthlyChartProps from "../../types/MonthlyChart";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import CustomLegends from "./CustomLegends";
import MonthSelect from "./MonthSelect";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const USERCOLOR = "#9BDD7C";
const GUESTCOLOR = "#E9A0A0";

export function DisplayMonthChart({ chartData }: MonthlyChartProps) {
  const { User, Guest } = chartData;
  const dataLabels = Object.keys(User);

  const dataSet = [
    { label: "Guest", data: Object.values(Guest), borderColor: GUESTCOLOR },
    { label: "User", data: Object.values(User), borderColor: USERCOLOR },
  ];

  return (
    <div className="px-5 bg-white p-6 rounded-lg flex flex-col gap-8">
      <div className="flex justify-between">
        <div className="flex flex-col items-start gap-1">
          <h5 className="font-monteserat font-bold text-xl">Activites</h5>
          <MonthSelect/>
        </div>
        <div className="flex gap-4 self-end">
          {dataSet.map(({ label, borderColor }) => (
            <CustomLegends title={label} color={borderColor} />
          ))}
        </div>
      </div>
      <Line
        className="max-h-[16rem]"
        title="Activities"
        options={{
          responsive: true,
          elements: {
            point: {
              radius: 0,
            },
            line: {
              tension: 0.3,
            },
          },
          plugins: {
            legend: {
              display: false,
            },
            title: {
              display: false,
            },
          },
          scales: {
            x: {
              grid: { display: false },
              ticks: {
                callback: (value) => {
                  // Check if the tick value is 0 and return an empty string ('') in that case
                  return value === 0 ? "" : value;
                },
              },
            },
          },
        }}
        data={{ labels: dataLabels, datasets: dataSet }}
      />
    </div>
  );
}
