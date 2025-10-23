import React, { useState } from "react";
import bgImage from "../assets/pubg11.png";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router";
import { auth } from "../Firebase/firebase.config";
import { toast } from "react-toastify";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { FaEye } from "react-icons/fa";
import { IoEyeOff } from "react-icons/io5";

const RegistrationPage = () => {
  const [show,setShow] = useState(false); //state for hide password 


  const handleSignup = (e) => {
    e.preventDefault();
    
    const displayName = e.target.name.value;
    const photoURL = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log("Signup function enter :",displayName,photoURL,email,password);


  
    //password validation use regex
    // const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
    // if(!passwordRegex.test(password)){
    //   toast.error("Password must be at least 6 characters long include upper,lowercase, number, and special character.");
    //   return;
    // }

    createUserWithEmailAndPassword(auth,email,password)
    .then((res)=>{
      console.log(res);
      toast.success("Regitration Succesfully Done");
    })
    .catch(e=>{
      console.log(e.code)
          if (!e.code) {
           toast.error("An unexpected error occurred.");
           return;
          }

         if (e.code === "auth/email-already-in-use") {
           toast.error("⚠️ This email is already registered. Try logging in instead.");
         } 
         else if (e.code === "auth/invalid-email") {
           toast.error("🚫 Invalid email format. Please check and try again.");
         } 
         else if (e.code === "auth/operation-not-allowed") {
           toast.error("❌ This authentication method is disabled. Contact support.");
         } 
         else if (e.code === "auth/weak-password") {
           toast.error("🔒 Password must be at least 6 characters long.");
         } 
         else if (e.code === "auth/missing-password") {
           toast.error("🔑 Please enter your password.");
         } 
         else if (e.code === "auth/user-disabled") {
           toast.error("🚷 This account has been disabled by an admin.");
         } 
         else if (e.code === "auth/user-not-found") {
           toast.error("😕 No account found with this email.");
         } 
         else if (e.code === "auth/wrong-password") {
           toast.error("❌ Incorrect password. Try again.");
         } 
         else if (e.code === "auth/too-many-requests") {
           toast.error("😤 Too many attempts. Try again later.");
         } 
         else if (e.code === "auth/network-request-failed") {
           toast.error("🌐 Network error. Please check your connection.");
         } 
         else if (e.code === "auth/internal-error") {
           toast.error("💥 Internal error. Please try again later.");
         } 
         else if (e.code === "auth/missing-email") {
           toast.error("📧 Email is required.");
         } 
         else if (e.code === "auth/invalid-credential") {
           toast.error("🚫 Invalid login credentials.");
         } 
         else if (e.code === "auth/popup-closed-by-user") {
           toast.error("👋 Sign-in popup closed before completion.");
         } 
         else {
           toast.error(`⚠️ ${e.message || "Something went wrong. Please try again."}`);
         }
    })
    








  }







    return (
        <div className="min-h-[332px]">
          <div
            className="relative min-h-screen bg-cover bg-center flex items-center justify-center"
            style={{ backgroundImage: `url(${bgImage})` }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/100 to-transparent"></div>
    
            <div className="flex flex-col items-center text-center text-white space-y-8 px-4">
              {/* Title */}
              <h1 className="text-4xl md:text-5xl font-extrabold animate-pulse">
                Register now and prepare to conquer the{" "}
                <span className="text-yellow-300">ARENA...</span>
              </h1>
    
              {/* Login Card */}
              <div className="card bg-white/10 backdrop-blur-md border border-white/20  w-full max-w-sm transition-all duration-300 lg:mr-150">
                <div className="card-body">

                 {/* form  */}
                  <form onSubmit={handleSignup} className="space-y-1 text-start">
                    {/* name  */}
                    <label className="text-white font-semibold text-sm">Name</label>
                    <input
                      type="text"
                      name="name"
                      className="input w-full bg-white/70 text-black placeholder-gray-600 focus:bg-white focus:ring-2 focus:ring-yellow-400 transition-all"
                      placeholder="Enter your name"
                    />
                    {/* photo  */}
                    <label className="text-white font-semibold text-sm">Photo</label>
                    <input
                      type="text"
                      name="photo"
                      className="input w-full bg-white/70 text-black placeholder-gray-600 focus:bg-white focus:ring-2 focus:ring-yellow-400 transition-all"
                      placeholder="Enter your photo url"
                    />
                    {/* email  */}
                    <label className="text-white font-semibold text-sm">Email</label>
                    <input
                      type="email"
                      name="email"
                      className="input w-full bg-white/70 text-black placeholder-gray-600 focus:bg-white focus:ring-2 focus:ring-yellow-400 transition-all"
                      placeholder="Enter your email"
                    />

                    {/* password  */}
                    <div className="relative">
                    <label className="text-white font-semibold text-sm">Password</label>
                    <input
                      type={show ? "text":"password"}
                      name="password"
                      className="h-10 p-3 rounded-sm w-full bg-white/70 text-black placeholder-gray-600 focus:bg-white focus:ring-2 focus:ring-yellow-400 transition-all"
                      placeholder="Enter your password"
                    />
                     <span onClick={()=>{setShow(!show)}} className="absolute right-[8px] top-[35px] cursor-pointer">{show ? <FaEye color="black"></FaEye> : <IoEyeOff color="black"></IoEyeOff>}</span>
                    </div>

                  



                    <div className="text-right py-1">
                      <a className="link link-hover text-sm text-yellow-300 hover:text-yellow-400 transition-colors">
                        Forgot password?
                      </a>
                    </div>
    
                  
                    <button className="btn w-full bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 border-none text-white font-bold text-lg shadow-md hover:scale-102 hover:shadow-[0_0_20px_rgba(255,165,0,0.7)] transition-transform duration-200">
                      Register
                    </button>

                    {/* Google */}
                    <button className="btn bg-white/70 w-full text-black border-[#e5e5e5]">
                      <FcGoogle size={25}></FcGoogle> Login with Google
                    </button>

                    <p className="mt-3">
                      Already have an account?{" "}
                      <Link to="/signin" className="underline hover:text-orange-400 font-semibold">Login</Link>{" "}
                      now and enter the arena.
                    </p>
                  </form>


                </div>
              </div>
            </div>
          </div>
        </div>
      );
};

export default RegistrationPage;