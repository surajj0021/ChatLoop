import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from "axios"
import serverUrl from "../config/server.js"


function SignUp() {

  // State to show or hide password
  const [showPassword, setShowPassword] = useState(false)

  // Used to navigate between pages
  const navigate = useNavigate();


  // States for signup form data
  const [userName, setUserName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")


  // State to show loading while signup request is running
  const [loading, setLoading] = useState(false)

  // State to store error message
  const [err, setErr] = useState("")


  // Function runs when signup form is submitted
  const handleSignUp = async (e) => {

    // Prevent page refresh
    e.preventDefault();

    // Clear previous error message
    setErr("");

    // Start loading
    setLoading(true)

    try {

      // Send signup data to backend
      const result = await axios.post(
        `${serverUrl}/api/auth/signup`,

        // Data being sent to backend
        {
          userName,
          email,
          password
        },

        // Allows cookies to be sent/received
        { withCredentials: true }
      )

      // Check backend response in browser console
      console.log(result);

      // Clear form after successful signup
      setUserName("");
      setEmail("");
      setPassword("");

      // Redirect user to login page
      navigate("/login")

    } catch (error) {

      // Show error in browser console
      console.log(error)

      // Display backend error message
      setErr(
        error.response?.data?.message ||
        "Something went wrong. Please try again."
      )

    } finally {

      // Stop loading whether request succeeds or fails
      setLoading(false)
    }
  }


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


          {/* Main Content */}
          <div>

            <p className="text-[#20c7ff] font-medium mb-4">
              YOUR SPACE. YOUR PEOPLE.
            </p>

            <h2 className="text-white text-4xl font-bold leading-tight">

              Conversations
              <br />

              that feel
              <br />

              <span className="text-[#20c7ff]">
                effortless.
              </span>

            </h2>

            <p className="text-gray-400 mt-5 leading-relaxed">

              Chat with friends, share your thoughts,
              and stay connected wherever you are.

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
              Create your account
            </h2>

            <p className="text-gray-500 mt-2">
              Get started with ChatLoop today.
            </p>

          </div>


          {/* Form */}
          <form
            className="flex flex-col gap-5"
            onSubmit={handleSignUp}
          >


            {/* Username */}
            <div>

              <label className="text-sm font-medium text-gray-700">
                userName
              </label>

              <input
                type="text"
                placeholder="Enter your userName"
                className="w-full h-12 mt-2 px-4 bg-gray-50 border border-gray-200 rounded-lg outline-none focus:border-[#20c7ff]"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />

            </div>


            {/* Email */}
            <div>

              <label className="text-sm font-medium text-gray-700">
                Email address
              </label>

              <input
                type="email"
                placeholder="you@example.com"
                className="w-full h-12 mt-2 px-4 bg-gray-50 border border-gray-200 rounded-lg outline-none focus:border-[#20c7ff]"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

            </div>


            {/* Password */}
            <div>

              <label className="text-sm font-medium text-gray-700">
                Password
              </label>

              <div className="relative">

                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Create a password"
                  className="w-full h-12 mt-2 px-4 pr-20 bg-gray-50 border border-gray-200 rounded-lg outline-none focus:border-[#20c7ff]"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />


                {/* Show / Hide password button */}
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-5 text-sm text-[#20c7ff] font-medium"
                >
                  {showPassword ? "Hide" : "Show"}
                </button>

              </div>

            </div>


            {/* Error message */}
            {err && (
              <div className="flex items-center gap-2 mt-3 px-4 py-3 bg-red-50 border border-red-200 rounded-lg">

                <span className="text-red-500">
                  ⚠
                </span>

                <p className="text-sm text-red-600">
                  {err}
                </p>

              </div>
            )}


            {/* Terms */}
            <div className="flex items-center gap-2 mt-1">

              <input
                type="checkbox"
                className="w-4 h-4"
              />

              <p className="text-sm text-gray-500">
                I agree to the terms and conditions
              </p>

            </div>


            {/* Signup Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full h-12 bg-[#20c7ff] text-white font-semibold rounded-lg hover:bg-[#0bb5e8] transition disabled:opacity-60"
            >

              {/* Show Loading while API request is running */}
              {loading ? "Loading..." : "Create Account"}

            </button>

          </form>


          {/* Login */}
          <p className="text-center text-gray-500 mt-7">

            Already have an account?

            {/* Navigate to login page */}
            <button
              type="button"
              onClick={() => navigate("/login")}
              className="text-[#20c7ff] font-semibold ml-1 cursor-pointer"
            >
              Login
            </button>

          </p>

        </div>

      </div>

    </div>
  )
}

export default SignUp