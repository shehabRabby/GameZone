import React, { useState } from "react";
import bgImage from "../assets/pubg6.png";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router";
import { FaEye } from "react-icons/fa";
import { IoEyeOff } from "react-icons/io5";
import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../Firebase/firebase.config";
import { toast } from "react-toastify";


const googleProvider = new GoogleAuthProvider();

const LoginPage = () => {
  const [show,setShow] = useState(false); //state for hide password 
  const [user, setUser] = useState(null);




const handleSignout=()=>{
    signOut(auth)
    .then(()=>{
      toast.success("LogOut Successfull")
      setUser(null)
    })
    .catch(e=>{
      toast.error(e.message)
    })

}


const handleSignin=(e)=>{
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email,password);

   signInWithEmailAndPassword(auth,email,password)
     .then((res)=>{
        console.log(res);
        setUser(res.user)
        toast.success("Login Succesfully Done");
      })
      .catch(e=>{
        console.log(e);
        toast.error(e.message);
      })
}


const handleGoogleSignin =()=>{
  signInWithPopup(auth,googleProvider)
  .then((res)=>{
        // console.log(res);
        setUser(res.user)
        toast.success("Login Succesfully Done");
  })
  .catch(e=>{
        console.log(e);
        toast.error(e.message);
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
          <h1 className="text-4xl md:text-5xl font-extrabold animate-bounce">
            Login now and step into the ultimate{" "}
            <span className="text-yellow-400">Battleground</span>.
          </h1>

          {/* Login Card */}
          <div className="card bg-white/10 backdrop-blur-md border border-white/20  w-full max-w-sm transition-all duration-300 lg:mr-150">
            <div className="card-body text-start">
             
             
             {
              user ? (
                <div className="text-center space-y-3">
                  <img src={user?.photoURL || "https://via.placeholder.com/88"} alt="" className="h-25 w-25 rounded-full mx-auto"/>
                  <h2 className="text-xl font-semibold">{user?.displayName}</h2>
                  <p className="text-xl text-white/80 font-semibold">{user?.email}</p>
                  <button onClick={handleSignout} className="inline-block mt-2 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors ml-2">LogOut</button>
                </div>
              ) : 
              ( 
                
              <form onSubmit={handleSignin} className="space-y-3">
                {/* email  */}
                <label className="text-white font-semibold text-sm">Email</label>
                <input
                  type="email"
                  name="email"
                  className="input w-full bg-white/70 text-black placeholder-gray-600 focus:bg-white focus:ring-2 transition-all"
                  placeholder="Enter your email"
                />

                {/* password  */}
                 <div className="relative">
                    <label className="text-white font-semibold text-sm">Password</label>
                    <input
                      type={show ? "text":"password"}
                      name="password"
                      className="h-10 p-3 rounded-sm w-full bg-white/70 text-black placeholder-gray-600 focus:bg-white focus:ring-2  transition-all"
                      placeholder="Enter your password"
                    />
                     <span onClick={()=>{setShow(!show)}} className="absolute right-[8px] top-[35px] cursor-pointer">{show ? <FaEye color="black"></FaEye> : <IoEyeOff color="black"></IoEyeOff>}</span>
                  </div>

                {/* forget pass  */}
                <div className="text-right">
                  <a className="link link-hover text-sm text-yellow-300 hover:text-yellow-400 transition-colors">
                    Forgot password?
                  </a>
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
                  <Link
                    to="/signup"
                    className="underline hover:text-orange-400 font-semibold"
                  >
                    Register
                  </Link>{" "}
                  now and enter the arena.
                </p>
              </form>
              )
             }


            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
