import axios from "axios";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Timer from "./components/timer";

export async function getServerSideProps({ query }) {
  let meja = query.q;
  let store = query.store;
  if (!meja || !store) {
    return {
      notFound: true,
    };
  }

  let tempData;
  let harga;
  let produk;
  let menit;
  await axios
    .get(process.env.NEXT_PUBLIC_API + "cart?meja_id=" + meja)
    .then((res) => {
      tempData = res.data.count;
      harga = res.data.harga;
      menit = res.data.menit;
      produk = res.data.data;
    })
    .catch((err) => {
      return {
        notFound: true,
      };
    });

  return {
    props: {
      q: meja,
      store: store,
      count: tempData,
      harga: harga,
      produk: produk,
      menit: menit,
    },
  };
}

export default function Cart({ q, store, harga, menit, produk, count }) {
  const [tempData, setTempData] = useState(count);
  const [tempharga, setharga] = useState(harga);
  const [tempproduk, setproduk] = useState(produk);
  const [tempmenit, setmenit] = useState(menit);
  const [loadUp, setLoadUp] = useState(false);

  const addCart = (a, index, type = "plus") => {
    let formData = {
      meja_id: q,
      produk_id: a.uuid,
    };
    if (type !== "plus") {
      formData = {
        meja_id: q,
        produk_id: a.uuid,
        min: "1",
      };
    }
    axios
      .post(process.env.NEXT_PUBLIC_API + "cart", formData)
      .then((res) => {
        fetchData();
      })
      .catch((err) => {
        console.log("ada error", err);
      });
  };

  const fetchData = () => {
    axios
      .get(process.env.NEXT_PUBLIC_API + "cart?meja_id=" + q)
      .then((res) => {
        setTempData(res.data.count);
        setharga(res.data.harga);
        setmenit(res.data.menit);
        setproduk(res.data.data);
        setLoadUp(false);
      })
      .catch((err) => {
        console.log("err", err);
        setLoadUp(false);
      });
  };

  const tagLoading = () => {
    return (
      <div className="animate-pulse ">
        <div className="bg-gray-400 w-full h-20 rounded-lg mb-3">
          <div className="flex h-full">
            <div className="bg-gray-500 h-full w-20 rounded-l-lg"></div>
            <div className="p-4 w-full">
              <div className="bg-gray-500 w-1/2 mb-2 h-3 rounded-xl ml-2"></div>
              <div className="bg-gray-500 w-1/3 mb-2 h-3 rounded-xl ml-2"></div>
              <div className="bg-gray-500 w-full h-3 rounded-xl ml-2"></div>
            </div>
          </div>
        </div>
        <div className="bg-gray-400 w-full h-20 rounded-lg mb-3">
          <div className="flex h-full">
            <div className="bg-gray-500 h-full w-20 rounded-l-lg"></div>
            <div className="p-4 w-full">
              <div className="bg-gray-500 w-1/2 mb-2 h-3 rounded-xl ml-2"></div>
              <div className="bg-gray-500 w-1/3 mb-2 h-3 rounded-xl ml-2"></div>
              <div className="bg-gray-500 w-full h-3 rounded-xl ml-2"></div>
            </div>
          </div>
        </div>
        <div className="bg-gray-400 w-full h-20 rounded-lg mb-3">
          <div className="flex h-full">
            <div className="bg-gray-500 h-full w-20 rounded-l-lg"></div>
            <div className="p-4 w-full">
              <div className="bg-gray-500 w-1/2 mb-2 h-3 rounded-xl ml-2"></div>
              <div className="bg-gray-500 w-1/3 mb-2 h-3 rounded-xl ml-2"></div>
              <div className="bg-gray-500 w-full h-3 rounded-xl ml-2"></div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <Head>
        <title>Cart</title>
      </Head>

      <div className="bg-white fixed bottom-0 md:w-1/2 w-full pb-10 pt-6 md:pt-8 px-4 rounded-t-3xl border-t z-50">
        <div className="font-bold text-sm">Rincian Order</div>
        <div className="flex justify-between text-sm mt-2">
          <div className="text-gray-800">Pesanan siap dalam</div>
          <div className="text-gray-800">
            {tempmenit} menit{" "}
            <span className="text-red-500">
              <Timer delayResend={tempmenit * 60} />
            </span>
          </div>
        </div>
        <div className="flex justify-between text-sm mt-2">
          <div className="text-gray-800">Item</div>
          <div className="text-gray-800">{tempData} qty</div>
        </div>
        <div className="flex justify-between text-sm mt-2 font-semibold">
          <div className="text-gray-800">Subtotal</div>
          <div className="text-gray-800">Rp{tempharga.toLocaleString()}</div>
        </div>
        <div className="bg-yellow-500 py-3 text-sm font-medium mt-4 rounded-lg w-full text-center">
          Pesan Sekarang
        </div>
      </div>
      <div className="px-4">
        <div className="flex items-center mb-4">
          <Link href={`/?store=${store}&q=${q}`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-8 h-8  text-gray-800"
            >
              <path
                fillRule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-4.28 9.22a.75.75 0 000 1.06l3 3a.75.75 0 101.06-1.06l-1.72-1.72h5.69a.75.75 0 000-1.5h-5.69l1.72-1.72a.75.75 0 00-1.06-1.06l-3 3z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
          <div className="font-bold text-gray-800 ml-4">Orderan Meja 18</div>
          <div className=""></div>
        </div>
        {!loadUp || tagLoading()}
        <div className="mb-36">
          {tempproduk.map((item, index) => {
            return (
              <div
                className="border rounded-lg flex  items-center mb-3 relative"
                key={index}
              >
                <div className="rounded-lg h-20 w-32 object-cover relative">
                  <Image
                    src={item.image}
                    alt="Picture of the author"
                    fill
                    className="rounded-l-lg object-cover object-center w-20"
                  />
                </div>
                <div className=" w-full p-3">
                  <div className="font-bold text-sm text-gray-900">
                    {item.nama}
                  </div>
                  <div className="flex justify-between items-center mt-2">
                    <div className="">
                      <div className="text-sm">
                        Rp{item.price.toLocaleString()}
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div
                        className="text-yellow-300"
                        onClick={() => addCart(item, index, "min")}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            fillRule="evenodd"
                            d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm3 10.5a.75.75 0 000-1.5H9a.75.75 0 000 1.5h6z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <div className="mx-4">{item.qty}</div>
                      <div
                        className="text-yellow-500"
                        onClick={() => addCart(item, index)}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            fillRule="evenodd"
                            d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 9a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25V15a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V9z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="text-xs font-medium absolute top-0 right-0 bg-yellow-500 bg-opacity-60 px-6 py-1 rounded-bl-xl rounded-tr-lg">
                    {item.menit}min
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
