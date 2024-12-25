import React from "react";
import { BiLogOutCircle } from "react-icons/bi";

const Logout = () => {
  return (
    <div className="h-[10vh]">
      <BiLogOutCircle className="text-5xl text-white hover:bg-slate-700 cursor-pointer rounded-full p-2 mt-5 ml-5" />
    </div>
  );
};

export default Logout;
