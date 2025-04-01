// import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <p>Welcome to the Blockchain</p>
      <div>
        <Link href="/login">Login</Link>
      </div>
      <div>
        <Link href="/register">Register</Link>
      </div>
    </div>   
  );
}
