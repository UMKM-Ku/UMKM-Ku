import Link from "next/link";
import React from "react";

const DaftarLender1 = () => {
  return (
    <>
      <div className="text-center mt-28 min-h-screen">
        <h1 className="text-3xl font-bold">Mulai lengkapi dokumen lainnya</h1>
        <p className="text-gray-400 pt-2">
          Lengkapi dokumen pribadi agar dapat mengakses UMKM-KU
        </p>
        <img
          src="https://i.ibb.co.com/8XW2QXw/Siapkan-File.png"
          alt="siapkanFile"
          className="mx-auto block w-96"
        />
        <div className="flex gap-10 justify-center mx-5">
          <button className="mt-4 rounded-lg p-2 px-12 text-accent-700 font-semibold border-accent-700 border-2">
            Beranda
          </button>
          <Link href="/lender/daftar/2">
            <button className="mt-4 bg-accent-700 rounded-lg p-2 px-12 text-white font-semibold hover:bg-accent-800 transition-colors duration-300 ease-out">
              Lengkapi
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default DaftarLender1;
