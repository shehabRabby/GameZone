import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { getAuth } from "firebase/auth";

const MyProfile = () => {
  const { user, signOutUserFunc, setUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const auth = getAuth();

  const handleLogout = () => {
    signOutUserFunc(auth)
      .then(() => {
        toast.success("Logged out successfully!");
        setUser(null);
        navigate("/signin");
      })
      .catch((err) => toast.error(err.message));
  };

  return (
    <div className="min-h-screen bg-[#0d1117] text-white flex flex-col justify-center items-center p-6">
      <title>GameZone-Profile</title>
      <div className="w-full flex justify-center m-6">
        <h1 className="text-white text-center text-3xl md:text-4xl font-bold animate-bounce">
          Welcome to your profile
        </h1>
      </div>

      <div className="bg-[#161b22] rounded-2xl shadow-xl p-8 w-full max-w-md text-center">
        <img
          src={user?.photoURL || "https://via.placeholder.com/120"}
          alt="User"
          className="w-28 h-28 rounded-full mx-auto mb-4 border-4 border-[#58a6ff]"
        />
        <h2 className="text-2xl font-bold mb-2">
          {user?.displayName || "No Name"}
        </h2>
        <p className="text-gray-400 mb-6">{user?.email}</p>

         {/* update Info here */}
        <button
          onClick={() => navigate("/update-info")}
          className="mt-4 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition duration-300 mr-3 mb-2 md:mb-0"
        >
          Update Information
        </button>

        <button onClick={handleLogout} className="px-6 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg font-semibold transition duration-300">
          Log Out
        </button>
      </div>
    </div>
  );
};

export default MyProfile;
