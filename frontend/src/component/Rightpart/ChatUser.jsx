import React from "react";

const ChatUser = () => {
  return (
    <div className="flex space-x-3 items-center justify-center bg-gray-800 hover:bg-gray-700 h-[8vh]">
      <div className="avatar online">
        <div className="w-16 rounded-full">
          <img
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
            alt="img"
          />
        </div>
      </div>
      <div>
        <h1>mauli</h1>
        <span>Online</span>
      </div>
    </div>
  );
};

export default ChatUser;
