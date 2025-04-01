"use client"; // Mark this file as a Client Component

import React from 'react';
import { useRouter } from 'next/navigation';

function Login()  {
  const router = useRouter(); // Use useRouter for navigation in Client Components


  const toHomePage = () => {
    router.push('/userPage'); 
  };
  const toRegister = () => {
    router.push('/register'); 
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div>
        <h1 className="text-3xl font-bold underline text-center mb-5">Login</h1>
        <div>
          <form className="flex flex-col gap-4">
          <select className='border border-gray-300 p-2 rounded'  name="roles" id="roles">
            <option value="" className='text-black'>Empty</option>
            <option value="supplier" className='text-black'>Supplier</option>
            <option value="manufacturer" className='text-black'>Manufacturer</option>
            <option value="Consumer" className='text-black'>Consumer</option>
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
            <button type="button" onClick={toRegister} className="bg-blue-500 text-white p-2 rounded text-center">
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;