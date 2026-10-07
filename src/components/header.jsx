import Logo from "../assets/Logo.png"
import { FaBible, FaFlag, FaHome, FaLaptopCode, FaMusic, FaSeedling } from "react-icons/fa"
import { FaChartLine } from "react-icons/fa"
import { useState } from "react"
import { MdMoreHoriz } from "react-icons/md"
import { FaFootball } from "react-icons/fa6"
import LoginForm from "./LoginForm"
function Header() {
    const toDayDate = new Date()
    const [isOpen, setIsOpen] = useState(false)
    const [isActive, setIsActive] = useState("All")
    console.log(isActive)
    const items = [
        { label: "All", icon: <FaHome color={isActive === "All" ? "blue" : ""} /> },
        { label: "Sport", icon: <FaFootball color={isActive === "Sport" ? "blue" : "green"} /> },
        { label: "Religion", icon: <FaBible color={isActive === "Religion" ? "blue" : "brown"} /> },
        { label: "Politics", icon: <FaFlag color={isActive === "Politics" ? "blue" : "gray"} /> },
        { label: "Agriculture", icon: <FaSeedling color={isActive === "Agriculture" ? "blue" : "green"} /> },
        { label: "Business", icon: <FaChartLine color={isActive === "Business" ? "blue" : "orange"} /> },
        { label: "Entertainment", icon: <FaMusic color={isActive === "Entertainment" ? "blue" : "pink"} /> },
        { label: "Technology", icon: <FaLaptopCode color={isActive === "Technology" ? "blue" : "blue"} /> },

    ]
    const [loading, setLoading] = useState(false);

const handleSubscribe = () => {
  setLoading(true);

  setTimeout(() => {
    setIsOpen(true);
    setLoading(false);
  }, 2000);}
    return (
        <>
            <div className="flex justify-between items-center bg-gray-50 py-5 px-20 border-b-2 border-gray-700">
                <div className="flex items-center">
                    <img src={Logo} alt="logo" className="w-20 h-20" />
                    <h1 className="font-bold text-3xl ">THE DAILY BRIEF</h1>
                </div>
                <p className="">{toDayDate.toString()}</p>
                
                <button
  className="bg-blue-900 text-white py-2 px-10 font-bold rounded-md flex items-center justify-center gap-2 disabled:opacity-70"
  onClick={handleSubscribe}
  disabled={loading}
>
  {loading && (
    <span className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
  )}

  {loading ? "Opening..." : "Subscribe"}
</button>
            </div>
            <div className="flex gap-10 py-5 px-30">
                {items.map((items, index) => {
                    const isCurrentActive = isActive == items.label;
                    return (
                        <div onClick={() => setIsActive(items.label)} key={index} className={`flex items-center pb-5 gap-2 ${isCurrentActive ? "border-b-2 boreder-blue-700" : ""}`}>
                            {items.icon}
                            <span className={`font-medium ${isCurrentActive ? "text-blue-700" : ""}`}>{items.label}</span>
                        </div>);
                })}
                <div className="flex items-center cursor-pointer pb-3">
                    <span>More</span>
                    <MdMoreHoriz className="mt-3" />

                </div>

            </div>
            {isOpen && <LoginForm close={()=>setIsOpen(false)} />}
        </>
    )
}
export default Header