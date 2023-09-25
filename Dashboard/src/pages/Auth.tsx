import Form from "../components/Auth/Form";
import SideBanner from "../components/Auth/SideBanner";
import useIsMobile from "../hooks/useIsMobile";
import { twMerge } from "tailwind-merge";
export default function Auth() {
  const isMobile = useIsMobile();
  return (
    <section className="flex items-start">
      {!isMobile && <SideBanner />}
      <div
        className={twMerge(
          "flex w-[100%] min-h-screen justify-center items-center",
          isMobile && "items-start mt-10 min-h-0"
        )}
      >
        <Form />
      </div>
    </section>
  );
}
