import React from "react";

export default function Bottombar() {
  return (
    <div className="fixed flex bg-white py-3 px-4 pb-6 z-10 justify-center bottom-0 w-full ">
      <div className="bg-yellow-400 px-6 py-3 rounded-full flex items-center text-gray-700">
        <div className=" font-medium">
          3 Item | <span className="font-bold">Rp40.000</span>
        </div>
        <div className="ml-10 flex items-center">
          <div className="font-medium">Lanjut Order</div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-5 h-5 ml-2"
          >
            <path
              fill-rule="evenodd"
              d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
