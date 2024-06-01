import { useState, useRef } from "react";
import Header from "./Header";
import { validateData } from "../utils/validate";
import { createUserWithEmailAndPassword , signInWithEmailAndPassword} from "firebase/auth";
import { auth } from "../utils/firbase";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errormsg, setErrorMsg] = useState(null);

  const name = useRef(null);
  const phone = useRef(null);
  const email = useRef(null);
  const password = useRef(null);


  const HandleButtonClick = () => {
    const msg = validateData(email.current.value, password.current.value)
    setErrorMsg(msg)

    //if msg is contain string
    if (msg) return;

    if (!isSignInForm) {
      //signed up
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;
          console.log(user)
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(errorCode + "-" + errorMessage);
        });
    } else {
      //signed in
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          console.log(user)
          console.log("Login SuccessFull!!!!11")
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(errorCode+" "+errorMessage);
        });
    }
  }

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
      <div className="flex justify-center items-center h-full z-10 relative ">
        <form className="w-full sm:w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4 bg-black bg-opacity-75 p-8 rounded transition-all duration-500 min-h-[400px] flex flex-col justify-center">
          <h1 className="text-white text-2xl md:text-3xl mb-6 text-center font-bold">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignInForm && (
            <input
              ref={name}
              type="text"
              placeholder="Full Name"
              className="py-2 px-4 mb-4 w-full outline-none rounded-sm bg-gray-800 opacity-70 text-white"
            />
          )}
          {!isSignInForm && (
            <input
              ref={phone}
              type="number"
              placeholder="Phone Number"
              className="py-2 px-4 mb-4 w-full outline-none rounded-sm bg-gray-800 opacity-70 text-white"
            />
          )}
          <input
            ref={email}
            type="email"
            placeholder="Email Address"
            className="py-2 px-4 mb-4 w-full outline-none rounded-sm bg-gray-800 opacity-70 text-white"
          />
          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="py-2 px-4 mb-6 w-full outline-none rounded-sm bg-gray-800 opacity-70 text-white"
          />
          <p className="text-red-500 py-2 font-bold">{errormsg}</p>
          <button
            type="button"
            className="py-2 px-4 mt-5 font-bold bg-red-600 text-white w-full rounded-sm" onClick={HandleButtonClick}
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
