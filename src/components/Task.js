import Image from "next/image"
import doneIcon from "../../public/assets/icons/doneIcon.png"
import editIcon from "../../public/assets/icons/editIcon.png"


const Task = ({description}) =>{

    return<div className="flex flex-row gap-1 sm:gap-3 border-solid border-4 border-silver-2 w-full sm:justify-center"> 
    <li className="w-1/2 border-2 border-solid border-silver-1 min-w-64 text-wrap  ">
        {description}
    </li> 
    <button className="border-2 border-solid border-white rounded-full p-1"><Image className= "  w-6 h-6" src={doneIcon} alt="done"></Image></button>
    <button className="border-2 border-solid border-white rounded-full p-1"><Image className= "w-6 h-6" src={editIcon} alt="edit"></Image></button>
    </div>


}

export default Task;