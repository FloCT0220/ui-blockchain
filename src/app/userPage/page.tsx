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
  return (
    <div className='h-screen'>
        <h1 className="text-3xl font-bold underline text-center">Welcome to the Blockchain</h1>
            
        <div className='flex flex-row items-center justify-center mt-5'>
            <div className="max-w-sm rounded overflow-hidden shadow-lg ">
                <div className="px-6 py-4">
                    <button type="button" onClick={sell} className="bg-blue-500 font-bold text-xl py-4 px-10 rounded text-center">
                        Sell
                    </button>
                </div>
            </div>
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <div className="px-6 py-4">
                    <button type="button" onClick={buy} className="bg-blue-500 font-bold text-xl py-4 px-10  rounded text-center">
                        buy
                    </button>
                </div>
            </div>
        </div>


        <div id='history' className='mt-10'>
            <h1 className="text-3xl font-bold underline mb-5">History</h1>
            <table className="table-auto border-collapse border border-gray-300 w-full text-left">
            <thead className="">
                <tr>
                <th className="border border-gray-300 px-4 py-2">No.</th>
                <th className="border border-gray-300 px-4 py-2">Action</th>
                <th className="border border-gray-300 px-4 py-2">WalletAddress</th>
                <th className="border border-gray-300 px-4 py-2">Price (Eth)</th>
                <th className="border border-gray-300 px-4 py-2">Date</th>
                </tr>
            </thead>
            <tbody>
                <tr className="">
                <td className="border border-gray-300 px-4 py-2">1</td>
                <td className="border border-gray-300 px-4 py-2">Sell</td>
                <td className="border border-gray-300 px-4 py-2">0x123...abc</td>
                <td className="border border-gray-300 px-4 py-2">1</td>
                <td className="border border-gray-300 px-4 py-2">2025-04-01</td>
                </tr>
                <tr className="">
                <td className="border border-gray-300 px-4 py-2">2</td>
                <td className="border border-gray-300 px-4 py-2">Buy</td>
                <td className="border border-gray-300 px-4 py-2">0x456...def</td>
                <td className="border border-gray-300 px-4 py-2">3</td>
                <td className="border border-gray-300 px-4 py-2">2025-03-20</td>
                </tr>
            </tbody>
            </table>
        </div>




    </div>
  )
}

export default MainPage