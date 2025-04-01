"use client";

import { usePathname, useRouter } from 'next/navigation';
import React, { useState } from 'react';

const Navbar = () => {
  const [isEditing, setIsEditing] = useState(false); // State to toggle edit mode
  const [password, setPassword] = useState("mySecurePassword"); // Store the password
  const [isPasswordVisible, setIsPasswordVisible] = useState(false); // Toggle password visibility
  const router = useRouter();
  const pathname = usePathname(); // Get the current pathname

  // Paths where the Navbar should not be rendered
  const excludedPaths = ["/", "/login", "/register"];

  if (excludedPaths.includes(pathname)) {
    return null; // Do not render Navbar on these pages
  }

  const handleLogout = () => {
    console.log("Logout clicked"); // Replace with actual logout logic
    router.push('/'); 
  };

  
    const handleEditClick = () => {
      setIsEditing(!isEditing); // Toggle between edit and save modes
    };
  
    const togglePasswordVisibility = () => {
      setIsPasswordVisible(!isPasswordVisible); // Toggle password visibility
    };
  
    const hashPassword = (password) => {
      // Simple hash simulation (replace with a real hash function like bcrypt in production)
      return password.split("").map(() => "*").join("");
    };
  

  return (
    <nav className="bg-gray-800 text-white w-64 p-6 flex flex-col justify-between">
      <div className="flex flex-col gap-4">
        <button className="text-xl font-bold hover:underline">
          Home
        </button>
        <div>
          <p className="text-xl font-bold hover:underline">WalletAddress</p>
          <input
            type="text"
            id="walletAddress"
            placeholder="WalletAddress"
            className="flex-1 border border-gray-300 p-2 rounded"
            readOnly={!isEditing} // Remove readOnly when in edit mode
          />
        </div>
        <div>
          <p className="text-xl font-bold hover:underline">Password</p>
          <div className='flewx flex-row items-center'>
            <input
              type="text"
              id="Password"
              value={isPasswordVisible ? password : hashPassword(password)} // Show hashed or plain password
              onChange={(e) => setPassword(e.target.value)} // Update password when editing
              placeholder="Password"
              className="flex-1 border border-gray-300 p-2 rounded"
              readOnly={!isEditing} // Remove readOnly when in edit mode
            />
            <button
              onClick={togglePasswordVisibility}
              className="bg-gray-500 text-white px-4 py-2 rounded"
            >
              {isPasswordVisible ? "Hide" : "Show"}
            </button>
          </div>
        </div>
        <button
          onClick={handleEditClick}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          {isEditing ? 'Save' : 'Edit'} {/* Toggle button text */}
        </button>
      </div>
      <button
        onClick={handleLogout}
        className="bg-red-500 px-4 py-2 rounded text-white hover:bg-red-600"
      >
        Logout
      </button>
    </nav>
  );
};

export default Navbar;