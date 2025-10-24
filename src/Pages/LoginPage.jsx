import React, { useContext, useRef, useState } from "react";
import bgImage from "../assets/pubg6.png";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router";
import { FaEye } from "react-icons/fa";
import { IoEyeOff } from "react-icons/io5";
import { GoogleAuthProvider, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../Firebase/firebase.config";
import { toast } from "react-toastify";
import { AuthContext } from "../Context/AuthContext";

const googleProvider = new GoogleAuthProvider();



const LoginPage = () => {
  const [show,setShow] = useState(false); //state for hide password 
  const emailRef = useRef(null);
  const {signInWithEmailAndPasswordFunc,signInWithEmailPopupFunc,sendPasswordResetEmailFunc,setUser,setLoading} = useContext(AuthContext);
  const location = useLocation();
  const from = location.state || "/";
  const navigate = useNavigate();




// email signin 
const handleSignin = (e) => {
  e.preventDefault();
  const email = e.target.email.value;
  const password = e.target.password.value;
  console.log(email, password);

  signInWithEmailAndPasswordFunc(email, password)
    .then((res) => {
      setLoading(false);
      console.log(res);
      setUser(res.user);
      toast.success("Login Successfully Done");
      navigate(from, { replace: true });
    })
    .catch((e) => {
      console.log(e.code);

      if (!e.code) {
        toast.error("An unexpected error occurred. Please try again.");
        return;
      }

      if (e.code === "auth/invalid-email") {
        toast.error("Invalid email format. Please check and try again.");
      } else if (e.code === "auth/user-disabled") {
        toast.error("This account has been disabled by an admin.");
      } else if (e.code === "auth/user-not-found") {
        toast.error("No account found with this email.");
      } else if (e.code === "auth/wrong-password") {
        toast.error("Incorrect password. Try again.");
      } else if (e.code === "auth/missing-password") {
        toast.error("Please enter your password.");
      } else if (e.code === "auth/too-many-requests") {
        toast.error("Too many attempts. Try again later.");
      } else if (e.code === "auth/network-request-failed") {
        toast.error("Network error. Please check your internet connection.");
      } else if (e.code === "auth/internal-error") {
        toast.error("Internal error. Please try again later.");
      } else if (e.code === "auth/invalid-credential") {
        toast.error("Invalid credential. Try again.");
      } else if (e.code === "auth/popup-closed-by-user") {
        toast.error("You closed the Google Sign-In popup too early.");
      } else {
        toast.error(`${e.message || "Something went wrong. Please try again."}`);
      }
    });
};

// google signin 
const handleGoogleSignin =()=>{
  signInWithEmailPopupFunc(googleProvider)
  .then((res)=>{
        // console.log(res);
        setLoading(false)
        setUser(res.user)
        navigate(from, { replace: true });
        toast.success("Login Succesfully Done");
  })
  .catch(e=>{
        console.log(e);
        toast.error(e.message);
  })
}

//forget password 
const handleForgetPassword=()=>{
  const email = emailRef.current.value;
  sendPasswordResetEmailFunc(email)
  .then(()=>{
    setLoading(false)
    toast.success("Check your email to reset password")
  })
  .catch(e=>{
    toast.error(e.message)
  })

}



return (
    <div className="min-h-[332px]">
      <title>GameZone-Login</title>
      <div className="relative min-h-screen bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: `url(${bgImage})` }}>
        <div className="absolute inset-0 bg-gradient-to-t from-black/100 to-transparent"></div>

        <div className="flex flex-col items-center text-center text-white space-y-8 px-4">
          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-extrabold animate-bounce">
            Login now and step into the ultimate{" "}
            <span className="text-yellow-400">Battleground</span>.
          </h1>

          {/* Login Card */}
          <div className="card bg-white/10 backdrop-blur-md border border-white/20  w-full max-w-sm transition-all duration-300 lg:mr-150">
            <div className="card-body text-start">

              {/* from start*/}
              <form onSubmit={handleSignin} className="space-y-3">
                {/* email  */}
                <label className="text-white font-semibold text-sm">Email</label>
                <input type="email" name="email" ref={emailRef}
                  className="input w-full bg-white/70 text-black placeholder-gray-600 focus:bg-white focus:ring-2 transition-all"placeholder="Enter your email"
                />

                {/* password  */}
                 <div className="relative">
                    <label className="text-white font-semibold text-sm">Password</label>
                    <input type={show ? "text":"password"} name="password" className="h-10 p-3 rounded-sm w-full bg-white/70 text-black placeholder-gray-600 focus:bg-white focus:ring-2  transition-all"
                      placeholder="Enter your password"
                    />
                     <span onClick={()=>{setShow(!show)}} className="absolute right-[8px] top-[35px] cursor-pointer">{show ? <FaEye color="black"></FaEye> : <IoEyeOff color="black"></IoEyeOff>}</span>
                  </div>

                {/* forget pass  */}
                <div className="text-right">
                  <button type="button" onClick={handleForgetPassword} className="link link-hover text-sm text-yellow-300 hover:text-yellow-400 transition-colors">
                    Forgot password?
                  </button>
                </div>

                <button className="cursor-pointer btn w-full bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 border-none text-white font-bold text-lg shadow-md hover:scale-102 hover:shadow-[0_0_20px_rgba(255,165,0,0.7)] transition-transform duration-200">
                  Login
                </button>

                {/* Google */}
                <button type="button" onClick={handleGoogleSignin} className="btn bg-white/70 w-full text-black border-[#e5e5e5] cursor-pointer">
                  <FcGoogle size={25}></FcGoogle> Login with Google
                </button>

                <p>
                  Don’t have an account?{" "}
                  <Link  to="/signup"  className="underline hover:text-orange-400 font-semibold">Register</Link>{" "}now and enter the arena.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
