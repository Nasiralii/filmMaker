import React from "react";
function Header() {
  return (
    <div className="py-4 px-12">
      <div className="flex flex-row gap-16 items-center justify-between">
        <img src="./images/logo.svg" alt="logo" />
        <u className="flex flex-row items-center list-none no-underline text-white  gap-12 text-[20px]">
          <li>News & Reviews</li>
          <li> Jobs </li>
          <li> Find Talent </li>
          <li> Profile builder </li>
        </u>
        <div className="flex flex-row gap-6">
          <button className="uppercase text-[#F69E1E] text-[20px]">
            Sign up for free
          </button>
          <button className="uppercase bg-[#F69E1E] text-white p-6 py-2 text-[18px] text-lg rounded-[7px]">
            Log in now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
