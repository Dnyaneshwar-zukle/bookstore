import React from "react";
import { IoMdSend } from "react-icons/io";

const Typesend = () => {
  return (
    <div className="flex space-x-2 h-[8vh] bg-gray-800 items-center">
      <div className="w-[70%] mx-4">
        <input
          type="text"
          placeholder="Type here"
          className="border border-gr-700 rounded-xl outline-none px-2 py-2 w-full"
        />
      </div>
      <button>
        <IoMdSend className="text-3xl" />
      </button>
    </div>
  );
};

export default Typesend;
