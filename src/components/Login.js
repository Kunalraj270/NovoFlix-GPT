import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleButton = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div className="relative h-screen">
      <Header />
      <div className="absolute inset-0 z-0">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/a99688ca-33c3-4099-9baa-07a2e2acb398/ca15fd28-b624-4852-8bfe-9cdd5c88475d/IN-en-20240520-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="Background"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="flex justify-center items-center h-full z-10 relative font-mono">
        <form className="w-full sm:w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4 bg-black bg-opacity-75 p-8 rounded transition-all duration-500 min-h-[400px] flex flex-col justify-center">
          <h1 className="text-white text-2xl md:text-3xl mb-6 text-center font-bold">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignInForm && (
            <input
              type="text"
              placeholder="Full Name"
              className="py-2 px-4 mb-4 w-full outline-none rounded-sm bg-gray-800 opacity-70 text-white"
            />
          )}
          {!isSignInForm && (
            <input
              type="number"
              placeholder="Phone Number"
              className="py-2 px-4 mb-4 w-full outline-none rounded-sm bg-gray-800 opacity-70 text-white"
            />
          )}
          <input
            type="email"
            placeholder="Email Address"
            className="py-2 px-4 mb-4 w-full outline-none rounded-sm bg-gray-800 opacity-70 text-white"
          />
          <input
            type="password"
            placeholder="Password"
            className="py-2 px-4 mb-6 w-full outline-none rounded-sm bg-gray-800 opacity-70 text-white"
          />
          <button
            type="button"
            className="py-2 px-4 mt-5 font-bold bg-red-600 text-white w-full rounded-sm"
          >
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
          <p
            className="text-white py-5 cursor-pointer text-center"
            onClick={toggleButton}
          >
            {isSignInForm ? "New to Netflix? Sign Up" : "Already Registered? Sign In"}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
