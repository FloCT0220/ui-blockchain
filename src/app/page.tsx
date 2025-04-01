"user client"; // Mark this file as a Client Component
// import Image from "next/image";
// import Link from "next/link";
import React from 'react'
import { usePrivy } from "@privy-io/react-auth";


// const privy = new PrivyClient('cm8ys5i7h019y1thnf00n4eer', '63o2hNcoHLb4tRfKonP3FbAXFRfSWjWB1tUSgT9RdfKH4n3MAdgD3Gvfms57qs8kDzfa8KZe5u9Ymg9buGUZ3LZx', {
// });
// const {id, address, chainType} = await privy.walletApi.create({chainType: 'ethereum'});
// const {signature, encoding} = await privy.walletApi.ethereum.signMessage({
//   walletId: id,
//   message: 'Hello server wallets!'
// });


function Home() {
  const { login } = usePrivy();
  return (
    <div className="flex flex-col items-center justify-center mt-80">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h1 className="font-bold text-3xl text-center text-black">Welcome to the Blockchain</h1>
        <div className="flex flex-row items-center justify-center">
          <div className="border border-gray-300 bg-black font-bold text-xl m-5 p-5 rounded text-center">
            <button onClick={() => login()}> Login </button>

          </div>
          {/* <div className="border border-gray-300 bg-black font-bold text-xl m-5 p-5 rounded text-center">
            <Link href="/register">Register</Link>
          </div> */}
        </div>  
      </div>
    </div>
  )
}

export default Home
