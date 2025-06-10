import { FaCat, FaGoogle, FaFacebook }from "react-icons/fa";
import { DiApple } from "react-icons/di";


const App = () => {
  return (
    <div className="flex h-screen relative">
      <div className="absolute inset-0 bg-gradient-to-br from-amber-100 via-rose-50 to-yellow-50"></div>
      
      <div className="w-[48%] flex items-center justify-center relative">
        <div className="absolute inset-0 bg-white/15 backdrop-blur-xl shadow-2xl"></div>
        
        <div className="flex flex-col w-fit justify-center items-center relative z-10 bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 shadow-xl">
          <div className="mb-16 flex items-center space-x-2 font-medium text-gray-800">
            <FaCat size={34}/>
            <span className="text-xl">Yet Another Login Page</span>
          </div>

          <h1 className="text-2xl font-bold mb-2 text-gray-800">Welcome Back</h1>
          <p className="text-gray-700 font-medium mb-6">Welcome Back, Please enter your details</p>

          <div className="flex mb-6 border border-white/30 rounded overflow-hidden w-full backdrop-blur-sm bg-white/15">
            <button className="w-1/2 py-3 bg-amber-200/40 text-gray-800 font-medium hover:bg-amber-200/60 transition backdrop-blur-sm">Sign In</button>
            <button className="w-1/2 py-3 bg-white/25 text-gray-800 font-medium hover:bg-amber-200/20 hover:text-gray-800 transition backdrop-blur-sm">Sign Up</button>
          </div>

          <div className="mb-4 space-y-2">
            <label className="block text-gray-800 font-medium mb-1">Email Address</label>
            <input
              type="email"
              placeholder="example@gmail.com"
              className="w-full px-4 py-3 border border-white/30 rounded focus:outline-none focus:ring-2 focus:ring-amber-200/50 bg-white/25 backdrop-blur-sm placeholder-gray-600 text-gray-800"
            />
            <button className="w-full px-4 py-3 bg-amber-200/40 text-gray-800 rounded mb-6 hover:bg-amber-200/60 transition backdrop-blur-sm font-medium">
              Continue
            </button>
          </div>

          <div className="flex items-center w-full mb-6">
            <hr className="flex-grow border-t border-gray-400" />
            <span className="mx-4 text-sm font-medium text-gray-600">Or Continue With</span>
            <hr className="flex-grow border-t border-gray-400" />
          </div>


          <div className="flex justify-center space-x-4 mb-6">
            <button className="p-3 border border-white/30 rounded-full hover:bg-amber-200/40 transition backdrop-blur-sm">
              <FaGoogle className="h-5 text-gray-800" />
            </button>
            <button className="p-3 border border-white/30 rounded-full hover:bg-amber-200/40 transition backdrop-blur-sm">
              <DiApple className="h-5 text-gray-800" />
            </button>
            <button className="p-3 border border-white/30 rounded-full hover:bg-amber-200/40 transition backdrop-blur-sm">
              <FaFacebook className="h-5 text-gray-800" />
            </button>
          </div>

          <p className="text-xs text-gray-700 text-center font-medium">
            Don't try to join cz nothing is working...It's just UI lmao!!
          </p>
        </div>

      </div>

      <div className="w-[4%] bg-gradient-to-r from-amber-50/50 via-gray-400/30 to-gray-800/80 relative z-10"></div>
      
      <div className="w-[48%] flex items-center justify-center bg-[rgb(28,32,33)] relative z-10">
        <img src="../public/gruvbox15.png" className="w-4em h-fit scale-85"/>
      </div>
    </div>
  )
}

export default App