"use client"; // Mark this file as a Client Component

import React from 'react';
import { useRouter } from 'next/navigation';

const MainPage = () => {
  const router = useRouter(); // Use useRouter for navigation in Client Components

  const sell = () => {

    router.push('/userPage/sell'); 
  };
  const buy = () => {

    router.push('/userPage/buy'); 
  };
  const profile = () => {

    router.push('/profile');
  };
    
  return (
    <div className='h-screen'>
        <h1 className="text-3xl font-bold underline text-center">Welcome to the Blockchain</h1>
            
        <div className='flex flex-row items-center justify-center'>
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <div className="px-6 py-4">
                    <button type="button" onClick={sell} className="bg-blue-500 font-bold text-xl p-5 rounded text-center">
                        Sell
                    </button>
                </div>
            </div>
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <div className="px-6 py-4">
                    <button type="button" onClick={buy} className="bg-blue-500 font-bold text-xl p-5 rounded text-center">
                        buy
                    </button>
                </div>
            </div>
        </div>
        <div className='flex flex-row items-center justify-center'>
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <div className="px-6 py-4">
                    <button type="button" onClick={profile} className="bg-blue-500 font-bold text-xl p-5 rounded text-center">
                        Profile
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MainPage