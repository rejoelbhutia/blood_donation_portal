import { useForm } from 'react-hook-form';
import { useState } from 'react';
import eyeClose from "../../assets/eyeClose.svg";
import eyeOpen from "../../assets/eyeOpen.svg";
import Button from "../../component/Button"; 
import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion";
import Input from "../../component/Input";

export default function SignUp() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [seePassword, setPassView] = useState(false);


  const togglePasswordView = (e) => {
    e.preventDefault();
    setPassView((prev) => !prev);
  };

  const navigate = useNavigate();

  const submitForm = async (formData) => {

    
    try {
       const response = await fetch("http://localhost:8000/api/auth/signup", {
      method : "POST",
      headers : {
        "Content-Type" : "application/json",
      },
      body : JSON.stringify(formData)
    })

   if (!response.ok) {
      const errorData = await response.text(); 
      console.error("Error:", errorData);
      alert("Sign-up failed: " + errorData);
      return;
    }

    const result = await response.json();
    console.log("Data", result);
    
    if (result) {
      console.log("token", result.token)
      localStorage.removeItem("token");
      localStorage.setItem("token", result.token);     
    }
   
    
    if (result.user.accountType === "donor") {
    console.log("Signup Successfull ", result);
    alert("Account Created Successfully")
      navigate("/pages/donor")
    }

    } catch (error) {
      console.error(error);
      alert("Something went wrong") 
    }
   
  };

  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
      className="signup-form flex flex-col items-center"
    >
      <h1 className="text-4xl">Create your account</h1>

      <form onSubmit={handleSubmit(submitForm)} className="flex flex-col items-center gap-5">

        <label className="text-2xl">Account Type</label>
        <div className="flex gap-6">
          <label className="flex items-center gap-4">
            Donor
            <input type="radio" name="accountType" value="donor" {...register("accountType", { required: "This is required" })} />
          </label>
          <label className="flex items-center gap-4">
            Receiver
            <input type="radio" name="accountType" value="receiver" {...register("accountType", { required: "This is required" })} />
          </label>
        </div>
       
        {errors.accountType && <p className="text-red-500 text-sm font-normal">{errors.accountType.message}</p>}

        {/* --- Full Name --- */}
        <div className="w-full flex flex-col items-center">
          <Input type="text" placeholder="E.g John Denver" {...register("name", { required: "Full Name is required" })} />
          {errors.fullName && <p className="text-red-500 text-sm font-normal">{errors.fullName.message}</p>}
        </div>

        {/* --- Email --- */}
        <div className="w-full flex flex-col items-center">
          <Input type="email" placeholder="E.g youremail@gmail.com" {...register("email", {
            required: "Email is required",
            pattern: { value: /^\S+@\S+\.\S+$/, message: "Enter a valid email" }
          })} />
          {errors.email && <p className="text-red-500 text-sm font-normal">{errors.email.message}</p>}
        </div>

        
        <div className="relative w-[350px] lg:w-[500px] flex flex-col items-center">
          <Input
            type={seePassword ? "text" : "password"}
            placeholder="Password"
           
            className="w-full" 
            {...register("password", {
              required: "Password is required",
              pattern: {
                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
                message: "Password must contain at least 1 uppercase, 1 lowercase, 1 digit, and 1 special character."
              },
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters long."
              }
            })}
          />
         
          <button
            type="button"
            onClick={togglePasswordView}
            className="w-7 h-7 absolute right-2 top-2" // Adjust positioning as needed
          >
            <img src={seePassword ? eyeClose : eyeOpen} alt="Toggle password visibility" />
          </button>
          {errors.password && <p className="text-red-500 text-sm font-normal">{errors.password.message}</p>}
        </div>


        {/* --- Address --- */}
        <div className="w-full flex flex-col items-center">
          <Input type="text" placeholder="123 Street, Sikkim, India" {...register("address", {
            required: "Address is required",
            minLength: { value: 5, message: "Address must be at least 5 characters" }
          })} />
          {errors.address && <p className="text-red-500 text-sm font-normal">{errors.address.message}</p>}
        </div>

        {/* --- Date of Birth --- */}
        <div className="w-full flex flex-col items-center">
          <Input
            type="date"
            placeholder="Birth Date"
            {...register("DOB", {
              required: "Date is required",
              validate: (value) => {
                const selectedDate = new Date(value);
                const today = new Date();
                selectedDate.setHours(0, 0, 0, 0);//setting time to midnight
                today.setHours(0, 0, 0, 0);//setting time to midnight

                if (selectedDate >= today) {
                  return "Date cannot be in the future or today";
                }
               let ageDiff = today.getFullYear() - selectedDate.getFullYear();//for year
               let monthDiff = today.getMonth() - selectedDate.getMonth();//for month
               let dayDiff = today.getDay() - selectedDate.getDay();//for day


               let age = ageDiff;
               if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) { //return 0 -11. neggative number measn it hasnt arrived yet
                                                                        //0 means current month or your birthday month
                age--;
               }
                if (age < 18) {
                  return "Age must be greater than 18";
                }
                return true;
              }
            })}
          />
          {errors.DOB && <p className="text-red-500 text-sm font-normal">{errors.DOB.message}</p>}
        </div>

        {/* --- Blood Group --- */}
        <div className="bloodGroup-con flex flex-col">
          <label className="text-lg font-medium">Blood Group</label>
          <select className="w-40 border border-gray-300 rounded px-4 py-2 text-lg outline-none focus:ring-2 focus:ring-blue-400" {...register("bloodGroup", { required: "Blood Group is required" })}>
            <option value="" disabled>-- Choose one --</option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
          </select>
          {errors.bloodGroup && <p className="text-red-500 text-sm font-normal">{errors.bloodGroup.message}</p>}
        </div>

        <Button btnType="submit" btnColor="bg-primary" textColor="text-white" btnName="Create Account" />
      </form>
    </motion.div>
  );
}