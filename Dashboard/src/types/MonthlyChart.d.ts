export default interface MonthlyChartProps {
    chartData:{
        User: {
          [key: string]: number;
        };
        Guest: {
          [key: string]: number;
        };
    }
}
