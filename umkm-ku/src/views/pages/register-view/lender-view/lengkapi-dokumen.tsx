import Link from "next/link";

const LengkapiDokumen = () => {
  return (
    <>
      <div className="text-center mt-16 min-h-screen">
        <h1 className="text-3xl font-bold">Mulai lengkapi dokumen lainnya</h1>
        <p className="text-gray-400 pt-2">
          Lengkapi dokumen pribadi agar dapat mengakses UMKM-KU
        </p>
        <img
          src="https://i.imgur.com/fPFv8zt.png"
          alt="siapkanFile"
          className="mx-auto block w-96"
        />
        <div className="flex gap-10 justify-center mt-5 mx-5">
          <Link href="/register/lender">
            <button className="mt-4 rounded-lg p-2 px-12 text-accent-700 font-semibold border-accent-700 border-2 hover:bg-gray-200 transition-colors duration-300">
              Kembali
            </button>
          </Link>
          <Link href="/register/lender/information/form-lender">
            <button className="mt-4 bg-accent-700 rounded-lg p-2 px-12 text-white font-semibold hover:bg-accent-800 transition-colors duration-300 ease-out">
              Lengkapi
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default LengkapiDokumen;
