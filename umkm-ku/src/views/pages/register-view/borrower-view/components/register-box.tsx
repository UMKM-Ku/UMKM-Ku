import InputBox from "@/views/pages/login-view/input-box";
import Link from "next/link";

export default function RegisterBox({
  link,
  desc1,
  desc2,
  label1,
  label2,
}: {
  link: string;
  desc1: string;
  desc2: string;
  label1: string;
  label2: string;
}) {
  return (
    <>
      <section className="w-full md:w-full h-screen md:h-fit flex flex-col md:flex-row bg-white">
        {/* Kiri: Gambar dan Deskripsi */}
        <div className="w-full md:w-2/3 flex flex-col items-center justify-center py-12 md:pb-12 px-4 md:mb-20 ">
          <img
            src={link}
            alt="background"
            className="md:w-[60%] w-96 mb-4 md:-mb-0 hidden md:block"
          />
          <h5 className="md:text-base text-lg text-center text-gray-600 md:mt-0 hidden md:block">
            {desc1}
          </h5>
          <h5 className="text-gray-600 md:text-base text-lg text-center md:mt-2 hidden md:block">
            {desc2}
          </h5>
        </div>

        {/* Kanan: Form dan Button */}
        <div className="w-full md:w-1/3 md:bg-accent-100 h-lvh flex flex-col pt-8 px-7 md:pt-40">
          <h6 className="text-gray-800 font-bold text-2xl md:text-3xl">
            {label1}
          </h6>
          <p className="text-gray-600 mt-2 text-sm md:text-base">{label2}</p>

          <InputBox name="email" type="text" label="Email" />
          <InputBox name="password" type="password" label="Password" />

          <button className="mt-4 bg-accent-700 rounded-lg p-2 text-white font-semibold hover:bg-accent-800 transition-colors duration-300 ease-out">
            Daftarkan Akun
          </button>

          <h6 className="text-gray-700 text-sm mt-2 text-center">
            Sudah punya akun?
            <span>
              <Link
                href="/login"
                className="text-accent-700 font-semibold ml-1"
              >
                Login
              </Link>
            </span>
          </h6>
        </div>
      </section>
    </>
  );
}
