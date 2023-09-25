import CustomLegendsProps from "../../types/CustomLegends";
import {twMerge} from "tailwind-merge"
export default function CustomLegends({ color, title ,lableClassName,pointClassName}: CustomLegendsProps) {
  return (
    <div className="flex items-center gap-1 md:gap-2 text-[10px] md:text-[13px]">
      <div
        className={twMerge("w-2 h-2 rounded-full",pointClassName)}
        style={{ backgroundColor: color }}
      />
      <span className={lableClassName}>{title}</span>
    </div>
  );
}
