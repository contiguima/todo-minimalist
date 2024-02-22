import Dashboard from "@/components/Dashboard";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <div className="flex flex-col min-h-screen text-white text-wrap justify-center p-10">
      <h1 className="text-3xl font-extrabold sm:text-6xl md:text-9xl ">Welcome to a new way of managing tasks</h1>
      <h2 className="text-xl sm:text-2xl md:text-3xl animate-typing ">Simple. Fast. Minimalist.</h2>
      <a  href="#dashboard" className="self-center w-min-250 p-4 sm:p-6 rounded-full border-2 border-white text-lg sm:text-xl md:text-2xl font-light my-12 whitespace-nowrap   hover:bg-gradient-to-r  hover:from-silver-1 hover:to-silver-2">Take me to my <i>Dashboard</i></a>
    </div>
    <section id="dashboard">
    <Dashboard/>
    </section>
    </>
  );
}
