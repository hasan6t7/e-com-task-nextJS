import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="w-full bg-[#E3F0FF] p-8 rounded-lg">
          <div className="mb-8">
            <h1 className="text-3xl font-medium text-gray-900 mb-2">Log in</h1>
            <p className="text-gray-700 text-sm">Enter your details below</p>
          </div>

          <form className="space-y-6">
            <div>
              <Input
                type="text"
                placeholder="Email or Phone Number"
                className="w-full pb-2 text-sm text-gray-900 placeholder:text-gray-500 bg-transparent border-0 border-b border-gray-400 rounded-none focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-gray-600 shadow-none"
                required
              />
            </div>

            <div>
              <Input
                type="password"
                placeholder="Password"
                className="w-full pb-2 text-sm text-gray-900 placeholder:text-gray-500 bg-transparent border-0 border-b border-gray-400 rounded-none focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-gray-600 shadow-none"
                required
              />
            </div>

            <div className="flex items-center justify-between pt-4">
              <Button
                type="submit"
                className="px-12 py-3 bg-[#1C6FEC] hover:bg-[#1557c7] text-white font-medium text-sm rounded h-auto"
              >
                Log In
              </Button>

              <Link
                href="/forgot-password"
                className="text-[#FF0000] hover:underline text-sm font-medium"
              >
                Forgot Password?
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;