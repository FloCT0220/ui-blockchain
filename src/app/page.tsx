// import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center mt-80">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h1 className="font-bold text-3xl text-center text-black">Welcome to the Blockchain</h1>
        <div className="flex flex-row items-center justify-center">
          <div className="border border-gray-300 bg-black font-bold text-xl m-5 p-5 rounded text-center">
            <Link href="/login">Login</Link>
          </div>
          <div className="border border-gray-300 bg-black font-bold text-xl m-5 p-5 rounded text-center">
            <Link href="/register">Register</Link>
          </div>
        </div>  
      </div>
    </div>
  );
}
