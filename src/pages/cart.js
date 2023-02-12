import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Cart() {
  return (
    <>
      <div className="bg-white fixed bottom-0 w-full pb-10 pt-8 px-4 rounded-t-3xl border-t">
        <div className="font-bold text-xl">Rincian Order</div>
        <div className="flex justify-between text-lg mt-3">
          <div className="text-gray-800">Item</div>
          <div className="text-gray-800">6 qty</div>
        </div>
        <div className="flex justify-between text-lg mt-3 font-semibold">
          <div className="text-gray-800">Subtotal</div>
          <div className="text-gray-800">Rp36.000</div>
        </div>
        <div className="bg-yellow-500 py-3 text-lg font-medium mt-4 rounded-lg w-full text-center">
          Pesan Sekarang
        </div>
      </div>
      <div className="px-4">
        <div className="flex items-center mb-4">
          <Link href="/">
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
        <div className="border rounded-lg flex py-3 pr-3 items-center mb-6">
          <div className="rounded-lg">
            <Image
              src="https://img.freepik.com/premium-photo/cheese-burger-with-onion-tomato-lettuce-bacon-white-background_499484-1161.jpg?w=2000"
              alt="Picture of the author"
              width={110}
              height={110}
              className="rounded-lg"
            />
          </div>
          <div className="ml-2 w-full">
            <div className="font-bold text-xl text-gray-900">Cheese Burger</div>
            <div className="flex justify-between items-center mt-2">
              <div className="">
                <div className="">Rp12.000</div>
              </div>
              <div className="flex items-center">
                <div className="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm3 10.5a.75.75 0 000-1.5H9a.75.75 0 000 1.5h6z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="mx-4">3</div>
                <div className="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="w-6 h-6"
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
          </div>
        </div>
        <div className="border rounded-lg flex py-3 pr-3 items-center mb-6">
          <div className="rounded-lg">
            <Image
              src="data:image/jpeg;base64,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"
              alt="Picture of the author"
              width={110}
              height={110}
              className="rounded-lg"
            />
          </div>
          <div className="ml-2 w-full">
            <div className="font-bold text-xl text-gray-900">
              Jus Mangga Manado
            </div>
            <div className="flex justify-between items-center mt-2">
              <div className="">
                <div className="">Rp12.000</div>
              </div>
              <div className="flex items-center">
                <div className="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm3 10.5a.75.75 0 000-1.5H9a.75.75 0 000 1.5h6z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="mx-4">3</div>
                <div className="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="w-6 h-6"
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
          </div>
        </div>
      </div>
    </>
  );
}
