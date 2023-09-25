import AuthContainer from "./AuthContainer";
import Fields from "./Fields";
import FieldsData from "../../data/FieldsData";
import { Link } from "react-router-dom";
import { PrimaryButton } from "../Buttons";
import Text from "../Text";
import SocialAuth from "./SocialAuth";
import AlternateText from "./AlternateText";
import useIsMobile from "../../hooks/useIsMobile";
import {twMerge} from "tailwind-merge"
export default function Form() {
  const isMobile = useIsMobile()
  return (
    <div className="flex flex-col gap-5 px-4">
      <FormHeading />
      <SocialAuth />
      <AuthContainer
        as="form"
        className={twMerge("p-6 w-[25rem] flex flex-col gap-4 rounded-lg self-center",isMobile && "w-[20rem]")}
      >
        {FieldsData.map((props) => (
          <Fields {...props} />
        ))}
        <Link to="/forgot-password" className="text-[#346BD4] font-medium">
          Forgot password?
        </Link>
        <PrimaryButton text="Sign In" className="py-2 font-bold mt-1" />
      </AuthContainer>
      <div className="self-center">
        <AlternateText/>
      </div>
    </div>
  );
}

function FormHeading() {
  return (
    <div>
      <Text className="font-[700] text-4xl">Sign In</Text>
      <p>Sign in to your account</p>
    </div>
  );
}
