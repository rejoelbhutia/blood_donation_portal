import { useState } from "react";
import Button from "../../component/Button";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function ForgotPassword() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const submitForm = async (formData) => {
    try {
      const response = await fetch("http://localhost:8000/api/auth/forgot-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      
      if (response.ok) {
        setMessage(result.message);
        // Optional: redirect after some time
        // setTimeout(() => navigate("/login"), 3000);
      } else {
        alert(result.message || "Something went wrong");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error sending request");
    }
    console.log(formData);
    
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col gap-6 items-center"
    >
      <h1 className="text-3xl md:text-4xl font-medium">Reset Password</h1>
      <p className="text-gray-600 w-[350px] lg:w-[500px] text-center">
        Enter your email address and we'll send you a link to reset your password.
      </p>

      {message ? (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
          <strong className="font-bold">Success! </strong>
          <span className="block sm:inline">{message}</span>
          <div className="mt-4 text-center">
             <Link to="/login" className="text-blue-600 underline">Back to Login</Link>
          </div>
        </div>
      ) : (
        <form className="flex flex-col gap-8 items-center" onSubmit={handleSubmit(submitForm)}>
            <div className="w-full flex flex-col items-center">
          <input
            {...register("email", {
              required: "This field is required",
              pattern: {
                value: /^\S+@\S+\.\S+$/,
                message: "Enter a valid email",
              },
            })}
            type="email"
            className="w-[350px] border-t-0 border-r-0 border-l-0 lg:w-[500px] border pl-2 pb-2 text-xl outline-none"
            placeholder="Enter your email"
          />
          {errors.email && <p className="text-red-500 self-start ml-2 md:ml-0">{errors.email.message}</p>}
          </div>

          <Button btnName={"Send Reset Link"} btnColor={"bg-primary"} type={"submit"} textColor={"text-white"} />
          
          <Link to="/login" className="text-gray-500 hover:text-black transition-colors">
            Back to Login
          </Link>
        </form>
      )}
    </motion.div>
  );
}
