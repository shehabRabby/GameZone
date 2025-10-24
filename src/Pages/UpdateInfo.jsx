import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../Context/AuthContext";
import { getAuth, updateProfile, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

const UpdateInfo = () => {
  const { user, setUser } = useContext(AuthContext);
  const [name, setName] = useState(user?.displayName || "");
  const [photo, setPhoto] = useState(user?.photoURL || "");
  const navigate = useNavigate();
  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (!currentUser) {
        toast.error("Please log in first!");
        navigate("/signin");
      }
    });
    return () => unsubscribe();
  }, [auth, navigate]);

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      const currentUser = auth.currentUser;

      if (!currentUser) {
        toast.error("User not found! Please log in again.");
        navigate("/signin");
        return;
      }

      await updateProfile(currentUser, {
        displayName: name,
        photoURL: photo,
      });

      const updatedUser = {...currentUser,displayName: name, photoURL: photo};

      setUser(updatedUser);
      toast.success("Information updated successfully");
      setTimeout(() => {
        navigate("/myprofile");
      }, 1000);
    } catch (error) {
      toast.error(error.message || "Something went wrong");
    }
  };

  return (
    <div className="min-h-screen bg-[#0d1117] flex flex-col justify-center items-center p-6 text-white">
      <div className="bg-[#161b22] rounded-2xl shadow-xl p-8 w-full max-w-md animate-fade-in">
        <h1 className="text-3xl font-bold mb-6 text-center text-[#58a6ff]">
          Update Your Info
        </h1>

        <form onSubmit={handleUpdate} className="space-y-4">
          <div>
            <label className="block mb-1 text-gray-300">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="Enter your new name"
            />
          </div>

          <div>
            <label className="block mb-1 text-gray-300">Photo URL</label>
            <input
              type="text"
              value={photo}
              onChange={(e) => setPhoto(e.target.value)}
              className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="Paste new photo URL"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition duration-300"
          >
            Update Information
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateInfo;
