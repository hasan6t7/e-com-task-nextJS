import Link from "next/link";
import { FcGoogle } from "react-icons/fc";

import React from "react";

const Register = () => {
  return (
    <div className="min-h-screen  flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="mb-16">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-gray-900">
              Account
            </Link>
            <span>/</span>
            <span className="text-gray-900">Register</span>
          </div>
        </div>

        <div className="w-full">
          <div className=" mb-12">
            <h1 className="text-4xl font-medium text-gray-900 mb-3">
              Create an account
            </h1>
            <p className="text-gray-900 text-base">Enter your information</p>
          </div>

          <form className="space-y-10">
            <div>
              <input
                type="text"
                placeholder="Name"
                className="w-full pb-2 text-base text-gray-900 placeholder:text-gray-400 bg-transparent border-0 border-b border-gray-300 focus:outline-none focus:border-gray-400 focus:ring-0"
                required
              />
            </div>

            <div>
              <input
                type="text"
                placeholder="Email or Phone Number"
                className="w-full pb-2 text-base text-gray-900 placeholder:text-gray-400 bg-transparent border-0 border-b border-gray-300 focus:outline-none focus:border-gray-400 focus:ring-0"
                required
              />
            </div>

            <div>
              <input
                type="password"
                placeholder="Password"
                className="w-full pb-2 text-base text-gray-900 placeholder:text-gray-400 bg-transparent border-0 border-b border-gray-300 focus:outline-none focus:border-gray-400 focus:ring-0"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-[#1C6FEC] hover:bg-[#1557c7] text-white font-medium text-base rounded transition-colors"
            >
              Create Account
            </button>

            <button
              type="button"
              className="w-full py-4 border border-gray-300 hover:bg-gray-50 font-medium text-base rounded transition-colors flex items-center justify-center gap-3"
            >
              <FcGoogle />
              Sign up with Google
            </button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-gray-900 text-base">
              Already have account?{" "}
              <Link
                href="/login"
                className="underline hover:text-[#1C6FEC] font-medium ml-2"
              >
                Log In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
