import {useAuth0} from "@auth0/auth0-react"
import {FaUserCircle} from "react-icons/fa"
export default function Avatar() {
  const {user,isLoading,logout} = useAuth0()
  if(isLoading) return <FaUserCircle className="inline-block h-[1.5rem] w-[1.5rem] md:h-[2rem] md:w-[2rem] rounded-full"/>
  return (
    <img
      onClick={()=>logout()}
      className="cursor-pointer hover:ring-2 ring-black inline-block h-[1.5rem] w-[1.5rem] md:h-[2rem] md:w-[2rem] rounded-full"
      // src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
      src={user?.picture}
      alt="Image Description"
    />
  );
}
