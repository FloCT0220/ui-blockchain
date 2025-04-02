'use client';
import React from 'react';
import { useLogin } from "@privy-io/react-auth";
import Head from "next/head";
import { useRouter } from "next/navigation";


function Login() {
    const router = useRouter();
    const { login } = useLogin({
      onComplete: () => router.push("/dashboard"),
    });
  
    return (
      <>
        <Head>
          <title>Login · Privy</title>
        </Head>
  
        <main className="flex flex-col items-center justify-center min-h-screen min-w-full">
            <div className='flex flex-row items-center justify-center'>
                <div className="bg-white shadow-md rounded px-8 py-8">
                    <h1 className="font-bold text-3xl text-center text-black">Welcome to the Blockchain</h1>
                    <div className="flex flex-row items-center justify-center">
                    <div className="border border-gray-300 bg-black font-bold text-xl m-5 p-5 rounded text-center">
                        <button onClick={login}> Login </button>
                    </div>
                    </div>  
                </div>
            </div>

        </main>
        
      </>
    );
  }

export default Login;

