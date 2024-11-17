import Link from "next/link";
import InputBox from "./input-box";

export default function LoginTemplate() {
  return (
    <>
      <section className="w-lvw md:w-full md:h-fit h-screen flex bg-white">
        <div className="w-4/6">
          <div className="md:flex md:flex-col md:items-center md:mb-0 my-12">
            <img
              src="https://i.imgur.com/Nrroar6.png"
              alt="background"
              className="md:w-[60%] w-96 hidden md:block"
            />
            <h5 className="md:text-base md:text-gray-600 text-center xl:mt-5 md:mt-0">
              Berikan dampak langsung pada pertumbuhan ekonomi lokal dengan
            </h5>
            <h5 className="text-gray-600 md:text-base text-center -mb-12 md:mb-0">
              mendanai UMKM yang membutuhkan modal untuk berembang.
            </h5>
          </div>
        </div>

        <div className="w-2/6 bg-accent-100 h-screen flex flex-col pt-40 px-7">
          <h6 className="text-gray-800 font-bold text-3xl">Login</h6>
          <p className="text-gray-600 mt-2">
            Silahkan masukkan email dan password
          </p>
          <InputBox name="email" type="text" label="Email" />
          <InputBox name="password" type="password" label="Password" />
          <button className="mt-4 bg-accent-700 rounded-lg p-2 text-white font-semibold hover:bg-accent-800 transition-colors duration-300 ease-out">
            Masuk
          </button>
          <h6 className="text-gray-700 text-sm mt-2 text-center">
            Tidak punya akun?
            <span>
              <Link
                href="/register/lender"
                className="text-accent-700 font-semibold ml-1"
              >
                Daftar Lender
              </Link>
            </span>
            <span> /</span>
            <span>
              <Link
                href="/register/borrower"
                className="text-accent-700 font-semibold ml-1"
              >
                Daftar Borrower
              </Link>
            </span>
          </h6>
        </div>
      </section>
    </>
  );
}
