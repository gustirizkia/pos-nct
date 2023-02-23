import { useRouter } from "next/router";
import React from "react";
import Bottombar from "./bottombar";

export default function Layout({ children }) {
  const router = useRouter();
  return (
    <>
      <div className="bg-gray-500">
        <main className="py-4 bg-white w-full md:w-1/2 min-h-screen md:mx-auto pb-32 relative overflow-x-hidden">
          <div className="px-4">
            <div
              className={`flex justify-between items-center ${
                router.pathname === "/cart" ? "hidden" : ""
              }`}
            >
              <div className="font-bold text-2xl">Nama Toko</div>
              <div className="font-bold text-xl bg-yellow-400 bg-opacity-20 p-3 px-4  rounded-xl">
                <div className="text-yellow-600">18</div>
              </div>
            </div>
          </div>
          {children}
        </main>
      </div>
    </>
  );
}
