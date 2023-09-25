import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react"; // Import useEffect and useState
import Text from "./Text";
import Spinner from "./Spinner";

export default function RouteProxy() {
  const { isLoading, isAuthenticated } = useAuth0();
  const nav = useNavigate();

  useEffect(() => {
    if(!isLoading){
        if(isAuthenticated) nav("/dashboard")
        else nav("/auth")
    }
  }, [isLoading,isAuthenticated]);

  return (
    <section className="flex flex-col justify-center items-center min-h-screen">
      <Text className="text-black font-[700] text-[72px]">Target.</Text>
      {isLoading && <Spinner />}
    </section>
  );
}
