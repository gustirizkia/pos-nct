import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

export default function Bottombar({ qty }) {
  const [tempData, setTempData] = useState([]);
  const [harga, setharga] = useState([]);

  const router = useRouter();
  const { q, store } = router.query;
  useEffect(() => {
    axios
      .get(process.env.NEXT_PUBLIC_API + "cart?meja_id=" + q)
      .then((res) => {
        setTempData(res.data.count);
        setharga(res.data.harga);
      })
      .catch((err) => {});
  }, [qty]);

  return (
    <div
      className={`fixed w-full md:w-1/2 flex  bg-white py-4 px-4 z-10 justify-center bottom-0 ${
        tempData < 1 ? "hidden" : ""
      }`}
    >
      <div className="flex w-full justify-center text-sm">
        <Link
          href={`/cart?store=${store}&q=${q}`}
          className="bg-yellow-400 px-6 py-3 rounded-full flex items-center text-gray-700"
        >
          <div className=" font-medium">
            {tempData} Item |{" "}
            <span className="font-bold">Rp{harga.toLocaleString()}</span>
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
                fillRule="evenodd"
                d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </Link>
        <div className=""></div>
      </div>
    </div>
  );
}
