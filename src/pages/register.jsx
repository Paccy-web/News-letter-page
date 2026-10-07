import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo.png"
function Register() {
  const navigate = useNavigate();
    return (
        <div className="fixed inset-0 flex justify-center items-center bg-black/40 z-50">
            <div className="bg-gray-200 px-10 py-2 shadow-lg w-[500px] h-[600px] rounded-md">
                <div className="flex justify-items-start">
                  <img src={Logo} alt="logo" className="w-10 h-10" />
                   <h1 className="font-bold text-1xl ">THE DAILY BRIEF</h1>
                </div>
                <h2 className="text-3xl font-bold text-center mb-2"> Register </h2>

                <form className="flex flex-col gap-5">
                    <div>
                        <label className="block font-semibold mb-2">
                            Name
                        </label>

                        <input
                            type="email"
                            placeholder="Enter your full name"
                            className="w-full p-3 border border-gray-400 rounded-md outline-none"
                        />
                    </div>
                    <div>
                        <label className="block font-semibold mb-2">
                            Phone
                        </label>

                        <input
                            type="email"
                            placeholder="Enter your Phone number"
                            className="w-full p-3 border border-gray-400 rounded-md outline-none"
                        />
                    </div>
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

                <div className="flex justify-center items-center gap-2 mt-3">
                    <p>You have an account?</p>

                    <Link
                        to="/LoginForm"
                        onClick={() => navigate(-1)}
                        className="text-blue-700 underline font-bold"
                    >
                        Login
                    </Link>
                </div>

            </div>
        </div>
    )
}
export default Register