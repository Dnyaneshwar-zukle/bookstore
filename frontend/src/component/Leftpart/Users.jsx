import React from "react";

const Users = () => {
  return (
    <div className="h-[10vh]">
      <div className="flex space-x-4 px-8 py-2 hover:bg-slate-700">
        <div className="avatar online">
          <div className="w-12 rounded-full">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
          </div>
        </div>
        <div>
          <h1 className="font-bold">Mauli</h1>
          <p>Mauli@dev.com</p>
        </div>
      </div>
    </div>
  );
};

export default Users;
