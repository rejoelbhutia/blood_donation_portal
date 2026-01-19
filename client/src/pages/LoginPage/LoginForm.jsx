import { useState } from "react";
import eyeClose from "../../assets/eyeClose.svg";
import eyeOpen from "../../assets/eyeOpen.svg";
import Button from "../../component/Button";
import {useForm} from "react-hook-form"
import {useNavigate, Link} from "react-router-dom"
import { motion } from "framer-motion";

export default function LoginForm() { 

  const navigate = useNavigate();

  const {register, handleSubmit, formState : {errors}} = useForm();
  const [seePassword, setPassView] = useState(false);

  const togglePasswordView = (e) => {
    e.preventDefault();
    setPassView((prev) => !prev);
  };

  const submitForm = async (formData) => {

    
    try {
      const response = await fetch("http://localhost:8000/api/auth/signin", {
        method : "POST",
        headers : {
          "Content-Type" : "application/json",
        },
       body : JSON.stringify(formData)
      })

      if (!response.ok) {
        const errorData = await response.json(); 
        console.log("Error: ", errorData);
        alert(errorData.message || "Sigin Failed");
        return;
      }

       const result = await response.json();
      

    if (response.ok && result.user.accountType === "donor") {
      localStorage.removeItem("token");
       localStorage.setItem("token", result.user.token)
    console.log("Signin Successfull ", result);
    alert("loggedin Successfully")
      navigate("/pages/donor");
    }

       if (response.ok && result.user.accountType === "receiver") {
      localStorage.removeItem("token");
       localStorage.setItem("token", result.user.token)
    console.log("Signin Successfull ", result);
    alert("loggedin Successfully")
      navigate("/pages/receiver");
    }

    } catch (error) {
      console.log("Error: ", error);
      alert("Error: ", error)
    }
  }

  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col gap-6 "
    >
      <h1 className="  text-3xl md:text-4xl font-medium">Welcome back, comarade</h1>
      <form className=" flex flex-col gap-16 items-center " onSubmit={handleSubmit(submitForm)}>
        <input
        {...register("email", {
          required : "This field is required",
          pattern : {
            value : /^\S+@\S+\.\S+$/, message: "Enter a valid email" }
          }
        )}
          type="email"
          className=" w-[350px] border-t-0 border-r-0 border-l-0 lg:w-[500px] border pl-8 pb-2 text-2xl
        outline-none"
          placeholder="email"
      />
      {errors.email && <p>errors.email.message</p>}
        <div className="relative">
          <input
          {...register("password", {
            required : "This field is required"
          })}
            type={seePassword ? "text" : "password"}
            className=" w-[350px] border-t-0 border-r-0 border-l-0 lg:w-[500px] border pl-8 pb-2 text-2xl
        outline-none"
            placeholder="password"
          />
          <button
            type="button"
            onClick={togglePasswordView}
            className="w-7 absolute left-75 lg:left-110"
          >
            <img src={seePassword ? eyeClose : eyeOpen} alt="image" />
          </button>
        </div>
        <div className="flex flex-col gap-2 items-center">
            <Button btnName={"Login"} btnColor={"bg-primar"} type={"submit"} textColor={"text-white"}/>
             <Link to="/forgot-password" className="text-sm text-blue-600 hover:underline">Forgot Password?</Link>
        </div>
      </form>
    </motion.div>
  );
}
