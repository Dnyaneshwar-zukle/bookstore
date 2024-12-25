import React from "react";
import Users from "./Users";

const User = () => {
  return (
    <>
      <h1 className="px-8 py-2 bg-slate-800">messages</h1>
      <div
        className="py-2 flex-1 overflow-y-auto"
        style={{ maxHeight: "calc(80vh - 10vh)" }}
      >
        <Users />
        <Users />
        <Users />
        <Users />
        <Users />
        <Users />
        <Users />
        <Users />
        <Users />
        <Users />
        <Users />
        <Users />
        <Users />
        <Users />
        <Users />
        <Users />
        <Users />
        <Users />
        <Users />
        <Users />
      </div>
    </>
  );
};

export default User;
