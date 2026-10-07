import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
import { GoDownload } from "react-icons/go";
import stories from "../assets/stories.json";
import { BiComment } from "react-icons/bi";

import { RiMoreFill } from "react-icons/ri";
import Comment from "./comment";
import { useState } from "react";


function CardStory () {

  const [isOpen,setIsOpen]=useState(false)

    return (
        <>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-7 w-full">

          {stories.data.map((story, index) =>
           <div key={index} className="shadow w-[250]">
            <img src={story.image} alt="Story" className="w-full"/>
              <h5 className="py-2 text-blue-700">President RelationShip</h5>
            <div className="flex gap-4 py-2 px-2">
                <p className="flex text-black"><AiOutlineLike />23</p>
                <p className="flex text-black"><AiOutlineDislike />3</p>
                <p onClick={()=>setIsOpen(true)} className="flex text-black"><BiComment />1k</p>
                <GoDownload />
            </div>
            <p className="px-2 text-sm">{story.description}</p>
              <p className="flex py-4 px-2  text-blue-700 text-sm">View More < RiMoreFill className="mt-1.5" /></p>
           </div>
           )}
           </div>
           {isOpen && <Comment close={()=>setIsOpen(false)}/>}
           
        </>
        

    )
}
export default CardStory