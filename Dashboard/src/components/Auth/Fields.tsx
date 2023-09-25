import { FieldProps } from "../../types/Auth";
export default function Fields({label,type,placeholder}:FieldProps) {
  return (
    <div className="flex flex-col gap-1">
      <label className="font-medium" htmlFor={type}>{label}</label>
      <input type={type} id={type} placeholder={placeholder} className="px-3 py-2 bg-[#F5F5F5] rounded-lg"/>
    </div>
  );
}
