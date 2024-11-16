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
      <section className="w-lvw md:w-full md:h-fit h-screen flex bg-white">
        <div className="w-4/6">
          <div className="md:flex md:flex-col md:items-center md:mb-0 my-12">
            <img
              src={link}
              alt="background"
              className="md:w-[60%] w-96 hidden md:block"
            />
            <h5 className="md:text-base md:text-gray-600 text-center md:mt-0">
              {desc1}
            </h5>
            <h5 className="text-gray-600 md:text-base text-center -mb-12 md:mb-0">
              {desc2}
            </h5>
          </div>
        </div>

        <div className="w-2/6 bg-accent-100 h-screen flex flex-col pt-40 px-7">
          <h6 className="text-gray-800 font-bold text-3xl">{label1}</h6>
          <p className="text-gray-600 mt-2">{label2}</p>
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
