import Button from "../../component/Button"
import { useState } from "react"
import LoginForm from "./LoginForm";
import SignUp from "./SignUp";
import TaglineSidebar from "../../component/TaglineSidebar";

export default function AuthPage() {
  const [currentTab, setTab] = useState("signin");
  return (
    <div className=" login-con max-w-[100vw] h-screen flex">
        <div className=" sidebar hidden md:block w-[45%] h-full bg-red-600 ">
            {currentTab === 'signin' ? <TaglineSidebar tagline={"Donate Blood, Save Lives"} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur nisi voluptate possimus. Debitis, iusto facere. Est dolor perspiciatis vero necessitatibus."}/> : <TaglineSidebar tagline={"Join Our Mission"} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur nisi voluptate possimus. Debitis, iusto facere. Est dolor perspiciatis vero necessitatibus."}/>}
        </div>
        <div className="content w-[100vh] flex flex-col h-screen md:w-[55%] items-center justify-center">
          <div className="buttons flex gap-x-3.5 mb-10">
          <Button btnName={"Sign In"} onClick={() => setTab("signin")} btnColor={currentTab==="signin"?"bg-btn":"bg-white"} textColor={currentTab==="signin"?"text-white":"text-black"}/>
          <Button btnName={"Sign Up"} onClick={() => setTab("signup")} btnColor={currentTab==="signup"?"bg-btn":"bg-white"} textColor={currentTab==="signup"?"text-white":"text-black"}/>
            </div>
            {currentTab === "signin" ? <LoginForm /> : <SignUp />}
        </div>
    </div>
  )
}