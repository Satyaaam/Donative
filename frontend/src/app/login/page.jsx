import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <div className="min-h-[100vh] bg-white text-black pt-[150px] px-3">
      <div className="max-w-[700px] mx-auto flex flex-col border-[1px] rounded-lg p-4">
        <h1 className="text-3xl font-semibold text-center opacity-80">Login</h1>
        <label className="text-[16px] mt-3 mb-1">Email</label>
        <input
          type="email"
          placeholder="Enter your email"
          className="bg-white text-black border-[1px] px-3 py-2 rounded-lg mb-6"
        />

        <label className="text-[16px] mt-3 mb-1">Password</label>
        <input
          type="email"
          placeholder="Enter your password"
          className="bg-white text-black border-[1px] px-3 py-2 rounded-lg mb-2"
        />
        <p className="text-[13px] w-fit ml-auto mb-6 cursor-pointer hover:underline">
          Forgot password
        </p>

        <button className="mt-4 w-fit mx-auto bg-black text-white px-6 py-2 text-[1.15rem rounded-lg">
          Login
        </button>
        <p className="text-[13px] opacity-85 group w-fit mx-auto mt-3">
          New user? ,{" "}
          <Link
            href={"/signup"}
            className="group-hover:underline cursor-pointer text-center"
          >
            create an account
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Page;
// first name, last name,
// email, password, confirm password,
