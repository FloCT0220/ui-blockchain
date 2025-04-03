'use client';

import { useRouter } from "next/navigation";
import { useEffect, } from "react";
import { usePrivy } from "@privy-io/react-auth";
import Head from "next/head";
import { Button } from "@/components/ui/button";
import History from "./history"; 
import User from "./userObject"; 

export default function DashboardPage() {
	const router = useRouter();
	const {
		ready,
		authenticated,
		logout,
	} = usePrivy();

	useEffect(() => {
		if (ready && !authenticated) {
		router.push("/");
		}
	}, [ready, authenticated, router]);
	const sell = () => {

		router.push('/dashboard/sell'); 
	};
	const products = () => {

		router.push('/products'); 
	};


	return (
		<>
			<Head>
				<title>Dashboard</title>
			</Head>

			<main className="flex flex-col min-h-screen px-4 sm:px-20 py-6 sm:py-10 bg-privy-light-blue">
				{ready && authenticated ? (
				<>
					<div className="flex flex-row justify-between">
					<h1 className="text-2xl font-semibold">Dashboard</h1>
					<Button onClick={logout} className="text-sm bg-blue-300 hover:bg-blue-800 hover:text-blue-300 py-2 px-4 rounded-md text-blue-800" > Logout </Button>
					</div>
					<User />

					<h1 className="text-3xl font-bold underline text-center">Welcome to the Blockchain</h1> 
					<div className='flex flex-row items-center justify-center mt-5 gap-4'>
						<Button onClick={sell} className="font-bold text-xl py-7 px-10">Sell</Button>
						<Button onClick={products} className="font-bold text-xl py-7 px-10">Products</Button>
					</div>
				<History />

				</>
				) : null}
			</main>
		</>
	);
}