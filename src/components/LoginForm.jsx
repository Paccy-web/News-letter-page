import { IoIosClose } from "react-icons/io";
import Logo from "../assets/Logo.png"
import { Link } from "react-router-dom";

function LoginForm({close}) {
  
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black/40 z-50">
      <div className="bg-gray-200 p-10 shadow-lg w-[500px] h-[500px] rounded-md">
      <div className="flex">
             <img src={Logo} alt="logo" className="w-10 h-10" />
        <h1 className="font-bold text-1xl ">THE DAILY BRIEF</h1>
      </div>
        <div className="flex justify-end py-2">
           
        <IoIosClose
        size={34}
        onClick={close}
        
       />
       
        </div>
        <h1 className="text-3xl font-bold text-center mb-6 px-2"> Login </h1>

        <form className="flex flex-col gap-5">

          <div>



            <label className="block font-semibold mb-2">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 border border-gray-400 rounded-md outline-none"
            />
          </div>
          <div>
            <label className="block font-semibold mb-2">
              Password
            </label>

            <input
              type="password"
              placeholder="Enter your password"
              className="w-full p-3 border border-gray-400 rounded-md outline-none"
            />

          </div>
          
          <button
            type="submit"
            className="bg-blue-600 text-white font-bold py-3 rounded-md hover:bg-blue-700"
          >
            Submit
          </button>

        </form>

        <div className="flex justify-center items-center gap-2 mt-6">
          <p>You don't have an account?</p>

          <Link
            to="/register"
            className="text-blue-700 underline font-bold"
          >
            SignUp
          </Link>
        </div>

      </div>

    </div>
  )
}
export default LoginForm;