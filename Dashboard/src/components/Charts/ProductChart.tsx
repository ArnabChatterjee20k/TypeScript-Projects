import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import ProductChartProps from "../../types/ProductChartProps";
import CustomLegends from "./CustomLegends";
import MonthSelect from "./MonthSelect";

ChartJS.register(ArcElement, Tooltip, Legend);

const colors = [
  "#98D89E",
  "#F6DC7D",
  "#EE8484",
  "#FF5733",
  "#337DFF",
  "#FFD633",
];

const ProductChart = ({ chartData }: ProductChartProps) => {
  const dataLabels = Object.keys(chartData);
  const dataSet = Object.values(chartData);

  const data = {
    labels: dataLabels,
    datasets: [
      {
        data: dataSet,
        backgroundColor: colors,
      },
    ],
  };

  return (
    <div className="bg-white p-6 rounded-lg flex flex-col gap-6 flex-1">
      <div className="flex justify-between items-center">
        <h5 className="font-monteserat font-bold text-base md:text-xl">Top Products</h5>
        <MonthSelect />
      </div>
      <div className="flex flex-col items-center md:flex-row md:justify-around gap-10">
        <Pie
          className="max-w-[10rem] max-h-[10rem]"
          data={data}
          options={{
            elements: {
              arc: {
                borderWidth: 0,
              },
            },
            plugins: {
              legend: {
                display: false,
              },
            },
          }}
        />
        <div className="flex flex-col gap-2 w-full md:w-fit">
          {dataLabels.map((label, index) => (
            <div className="flex flex-row justify-between md:flex-col">
              <CustomLegends
                title={label}
                color={colors[index]}
                lableClassName="font-bold font-montserrat text-[13px]"
              />
              <span className="text-gray-400 text-[12px] pl-4">
                {dataSet[index]}%
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductChart;
