import { DataCardsData } from "../../data/DataCardsData";
import { DataCardsProps } from "../../types/DataCards";

export default function DataCards() {
  return (
    <div className="flex flex-col md:flex-row gap-10 w-full">
      {DataCardsData.map((data) => (
        <Card {...data} />
      ))}
    </div>
  );
}

function Card({ Icon, heading, value, color }: DataCardsProps) {
  return (
    <div
      className="flex w-full flex-col p-7 rounded-3xl flex-1"
      style={{ backgroundColor: color }}
    >
      <Icon
        size="2em"
        className="self-end"
      />
      <div className="flex flex-col gap-1">
        <p className="text-[20px] md:text-[15px] max-lg:text-[20px] font-[500]">{heading}</p>
        <p className="font-bold text-4xl md:text-2xl max-lg:text-4xl">{value}</p>
      </div>
    </div>
  );
}
