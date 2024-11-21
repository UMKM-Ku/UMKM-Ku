import InputBox from "@/views/pages/login-view/input-box";

import Link from "next/link";
import { redirect } from "next/navigation";

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
  const handleRegister = async (FormData: FormData) => {
    "use server";

    const input = {
      name: FormData.get("name"),
      email: FormData.get("email"),
      password: FormData.get("password"),
      phoneNumber: FormData.get("phoneNumber"),
      role: "Borrower",
    };

    console.log(input);

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API_URL}/auth/register/user`,
      {
        method: "POST",
        body: JSON.stringify(input),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) throw Error("Error Login");
    const data = await response.json();

    console.log(data);

    console.log(response);
    if (response.ok) redirect("/login");
  };

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
          <form action={handleRegister}>
            <div className="flex flex-col gap-3.5 mt-3.5">
              <InputBox name="name" type="text" label="Name" />
              <InputBox name="email" type="text" label="Email" />
              <InputBox name="password" type="password" label="Password" />
              <InputBox name="phoneNumber" type="number" label="Phone Number" />
            </div>
            <button
              type="submit"
              className="mt-4 bg-accent-700 rounded-lg p-2 text-white font-semibold hover:bg-accent-800 transition-colors duration-300 ease-out w-full"
            >
              Daftarkan Akun
            </button>
          </form>

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
