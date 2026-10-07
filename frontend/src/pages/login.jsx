import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Login() {

  // State for showing/hiding password
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-5">

      {/* Main Card */}
      <div className="w-full max-w-[950px] bg-white rounded-2xl shadow-xl overflow-hidden flex">

        {/* ================= LEFT SIDE ================= */}
        <div className="hidden md:flex w-[45%] bg-[#071827] p-10 flex-col justify-between">

          {/* Logo */}
          <div className="flex items-center gap-3">

            <div className="w-10 h-10 bg-[#20c7ff] rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-xl">
                C
              </span>
            </div>

            <h1 className="text-white text-xl font-bold">
              ChatLoop
            </h1>

          </div>


          {/* Main Text */}
          <div>

            <p className="text-[#20c7ff] font-medium mb-4">
              WELCOME BACK
            </p>

            <h2 className="text-white text-4xl font-bold leading-tight">
              Your conversations
              <br />
              are waiting
              <br />
              <span className="text-[#20c7ff]">
                for you.
              </span>
            </h2>

            <p className="text-gray-400 mt-5 leading-relaxed">
              Log in to continue your conversations
              and stay connected with your people.
            </p>

          </div>


          {/* Bottom */}
          <div className="flex gap-6 text-gray-400 text-sm">
            <p>Private</p>
            <p>Simple</p>
            <p>Connected</p>
          </div>

        </div>


        {/* ================= RIGHT SIDE ================= */}
        <div className="w-full md:w-[55%] p-8 md:p-12">

          {/* Heading */}
          <div className="mb-8">

            <h2 className="text-3xl font-bold text-gray-800">
              Welcome back
            </h2>

            <p className="text-gray-500 mt-2">
              Login to your ChatLoop account.
            </p>

          </div>


          {/* Login Form */}
          <form className="flex flex-col gap-5">

            {/* Email */}
            <div>

              <label className="text-sm font-medium text-gray-700">
                Email address
              </label>

              <input
                type="email"
                placeholder="you@example.com"
                className="w-full h-12 mt-2 px-4 bg-gray-50 border border-gray-200 rounded-lg outline-none focus:border-[#20c7ff]"
              />

            </div>


            {/* Password */}
            <div>

              <div className="flex justify-between items-center">

                <label className="text-sm font-medium text-gray-700">
                  Password
                </label>

                <span className="text-sm text-[#20c7ff] cursor-pointer">
                  Forgot password?
                </span>

              </div>


              {/* Password Input */}
              <div className="relative">

                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  className="w-full h-12 mt-2 px-4 pr-16 bg-gray-50 border border-gray-200 rounded-lg outline-none focus:border-[#20c7ff]"
                />

                {/* Show / Hide */}
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-5 text-sm text-[#20c7ff] font-medium"
                >
                  {showPassword ? "Hide" : "Show"}
                </button>

              </div>

            </div>


            {/* Remember Me */}
            <div className="flex items-center gap-2">

              <input
                type="checkbox"
                className="w-4 h-4"
              />

              <p className="text-sm text-gray-500">
                Remember me
              </p>

            </div>


            {/* Login Button */}
            <button
              type="submit"
              className="w-full h-12 bg-[#20c7ff] text-white font-semibold rounded-lg hover:bg-[#0bb5e8] transition"
            >
              Login
            </button>

          </form>


          {/* Create Account Link */}
          <p className="text-center text-gray-500 mt-7">
            Don't have an account?

            <Link
              to="/signup"
              className="text-[#20c7ff] font-semibold ml-1"
            >
              Create account
            </Link>
          </p>

        </div>

      </div>

    </div>
  )
}

export default Login