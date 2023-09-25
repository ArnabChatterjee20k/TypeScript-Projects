import AuthContainer from "./AuthContainer";
import Google from "../../icons/Google.png";
import Apple from "../../icons/Apple.png";
import Text from "../Text";
import { useAuth0 } from "@auth0/auth0-react";

export default function SocialAuth() {
  return (
    <div className="flex gap-2">
      <GoogleAuth />
      <AppleAuth />
    </div>
  );
}

function GoogleAuth() {
  const {loginWithRedirect} = useAuth0()
  return (
    <AuthContainer
      as="button"
      onClick={()=>loginWithRedirect()}
      className="flex items-center gap-2 px-5 py-2 rounded-md social-login"
    >
      <img src={Google} alt="" className="w-3 h-3" />
      <Text className="text-[#858585] text-[10px]">Sign in with Google</Text>
    </AuthContainer>
  );
}

function AppleAuth() {
  return (
    <AuthContainer
      as="button"
      className="flex items-center gap-2 px-5 py-2 rounded-md social-login"
    >
      <img src={Apple} alt="" className="w-3 h-3" />
      <Text className="text-[#858585] text-[10px]">Sign in with Apple</Text>
    </AuthContainer>
  );
}
