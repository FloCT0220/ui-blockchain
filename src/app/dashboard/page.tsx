'use client';

import { useRouter } from "next/navigation";
import { useEffect, } from "react";
import { usePrivy } from "@privy-io/react-auth";
import Head from "next/head";


export default function DashboardPage() {
  const router = useRouter();
  const {
    ready,
    authenticated,
    user,
    logout,
  } = usePrivy();

  useEffect(() => {
    if (ready && !authenticated) {
      router.push("/");
    }
  }, [ready, authenticated, router]);

  return (
    <>
      <Head>
        <title>Privy Auth Demo</title>
      </Head>

      <main className="flex flex-col min-h-screen px-4 sm:px-20 py-6 sm:py-10 bg-privy-light-blue">
        {ready && authenticated ? (
          <>
            <div className="flex flex-row justify-between">
              <h1 className="text-2xl font-semibold">Privy Auth Demo</h1>
              <button
                onClick={logout}
                className="text-sm bg-violet-200 hover:text-violet-900 py-2 px-4 rounded-md text-violet-700"
              >
                Logout
              </button>
            </div>
            <p className="mt-6 font-bold uppercase text-sm text-gray-600">
              User object
            </p>
            <pre className="max-w-4xl bg-slate-700 text-slate-50 font-mono p-4 text-xs sm:text-sm rounded-md mt-2">
              {JSON.stringify(user, null, 2)}
            </pre>
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
          </>
        ) : null}
      </main>
    </>
  );
}