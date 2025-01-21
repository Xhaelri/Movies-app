import React from "react";

const Header = () => {
  return (
    <div className=" mt-5 flex justify-between items-center mb-14">
      <div className="flex gap-5 justify-between items-center">
        <h1 className=" text-4xl font-bold cursor-pointer">Movies</h1>
        <p className="text-gray-500 ms-10 cursor-pointer">Home</p>
        <p className="text-gray-500 cursor-pointer">List anime</p>
      </div>
      <div>
        <input
          className="w-64 py-1 px-2 rounded-2xl bg-gray-700 text-base"
          type="text"
          placeholder="Search movie or series"
        />
      </div>
    </div>
  );
};

export default Header;
