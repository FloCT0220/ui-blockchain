"use client"; // Mark this file as a Client Component

import React from 'react';
import { useRouter } from 'next/navigation';

const Test = () => {
  const router = useRouter(); // Use useRouter for navigation in Client Components

  // Function to handle navigation to the home page
  const toHomePage = () => {
    // Perform any login validation logic here if needed
    router.push('/userPage'); // Navigate to the home page ("/")
  };

  return (
    <div>
      <h1 className="text-3xl font-bold underline">Login</h1>
      <form className="flex flex-col gap-4">
      <select name="roles" id="roles">
        <option value="supplier">Supplier</option>
        <option value="manufacturer">Manufacturer</option>
        <option value="Consumer">Consumer</option>
      </select>
      <input
          type="text"
          placeholder="WalletAddress"
          className="border border-gray-300 p-2 rounded"
        />
        <input
          type="password"
          placeholder="Password"
          className="border border-gray-300 p-2 rounded"
        />

        <button type="button" onClick={toHomePage} className="bg-blue-500 text-white p-2 rounded text-center">
          Login
        </button>
      </form>
    </div>
  );
};

export default Test;