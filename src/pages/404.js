import Head from "next/head";
import Link from "next/link";

export default function Custom500() {
  return (
    <>
      <Head>
        <title>404 | Page</title>
      </Head>
      <div class="h-screen w-full flex flex-col justify-center items-center bg-[#1A2238] absolute top-0 z-50">
        <h1 class="text-9xl font-extrabold text-white tracking-widest">404</h1>
        <div class="bg-[#FF6A3D] text-white px-2 text-base font-bold rounded rotate-12 absolute">
          Halam Tidak Ada
        </div>
      </div>
    </>
  );
}
