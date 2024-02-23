"use client"
import { useState, useEffect} from "react";
import Task from "./Task";

const Dashboard =  () => {

    // Logic to handle component change when facing mobile view 

    const [isMobileView, setIsMobileView] = useState(false);

    useEffect(()=> {
      const mobileMediaQuery = window.matchMedia("(max-width: 768px)");

      const handleMediaQueryChange = (event) =>{
        setIsMobileView(event.matches);
      };

      handleMediaQueryChange(mobileMediaQuery);
      mobileMediaQuery.addEventListener('change', handleMediaQueryChange);

      return() =>{
        mobileMediaQuery.removeEventListener('change', handleMediaQueryChange);
      };
    },[]);

    return <div className="flex flex-col min-h-screen  text-white text-wrap justify-center items-center p-10 border-2 border-white" id="dashboard">
        <div className="flex flex-row gap-2 border-2 border-dashed border-white min-w-full justify-center">
            <input 
            type="text"
            maxLength={80}
            placeholder="I want to..."
            className=" text-lg sm:text-xl font-light min-w-64 sm:min-w-[500px] bg-black  py-2 px-4 rounded-full border-2 border-white"></input>
            {isMobileView? <button className=" w-9 h-9 bg-white text-black rounded-full self-center hover:bg-gradient-to-r  hover:from-silver-1 hover:to-white">+</button> : <button className=" text-black font-bold bg-white rounded-full py-2 px-6 hover:bg-gradient-to-r  hover:from-silver-1 hover:to-white">Add Task</button>}
            
        </div>
        
        <div className=" border-2 border-dashed border-white min-h-screen min-w-full">
          <ul className="flex flex-col gap-5 sm:p-3 border-2 border-solid border-white items-cente ">
            <Task
            description="Call mom"
            />
            <Task
            description="Buy new shoes"
            />
          </ul>

        </div>

    </div>

}

export default Dashboard