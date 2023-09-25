import { Link } from "react-router-dom";

export default function AlternateText() {
  return (
    <p className="text-[14px] text-[#858585]">
      Don’t have an account?{" "}
      <Link to="/register" className="text-[#346BD4]">
        Register here
      </Link>
    </p>
  );
}
