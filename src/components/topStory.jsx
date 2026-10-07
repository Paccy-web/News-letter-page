import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
import { BiComment } from "react-icons/bi";
import { GoDownload } from "react-icons/go";
import { RiMoreFill } from "react-icons/ri";

function TopStory() {
    return (
        <>
            <h1 className="pb-4 font-bold text-3xl">Top Story</h1>
            <div>
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJuWquC-vT0q0t1p5gU_Pkfm54MwZ53TCiKFhRSj3QNQ&s=10"
                />
                <h5 className="py-2 text-blue-700">President RelationShip</h5>
                <div className="flex gap-4 py-2">
                    <p className="flex text-black"><AiOutlineLike />23</p>
                    <p className="flex text-black"><AiOutlineDislike />3</p>
                    <p className="flex text-black"><BiComment />4</p>
                    <p className="flex text-black"><GoDownload />1k</p>
                </div>
                <h3 className="py-3 font-bold">New vision of laptop</h3>
                <p className="text-sm">New Vision provides quality computers, laptops, monitors, and IT solutions through the New Vision store. [1] (https://newvision.com.eg/)</p>
                <p className="flex py-4  text-blue-700 text-sm" >View More < RiMoreFill className="mt-1.5" /></p>
            </div>
        </>
    )
}
export default TopStory