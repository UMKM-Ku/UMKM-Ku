import Link from "next/link";
import InputBox from "./input-box";
import { jwtDecode } from "jwt-decode";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

interface TokenPayload {
  id: number;
  email: string;
  role: string;
  iat: number;
  exp: number;
}

const handleLogin = async (FormData: FormData) => {
  "use server";

  const input = {
    email: FormData.get("email"),
    password: FormData.get("password"),
  };

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_API_URL}/auth/login`,
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

  const token: string = data.access_token;

  cookies().set("access_token", token, {
    httpOnly: true,
    secure: true,
    sameSite: "strict",
  });

  if (token) {
    const decoded = jwtDecode<TokenPayload>(token);
    decoded.role === "Borrower"
      ? redirect("/register/borrower/information")
      : redirect("register/lender/information");
  }
};

export default function LoginTemplate() {
  return (
    <>
      <section className="w-full md:w-full h-screen md:h-fit flex flex-col md:flex-row bg-white">
        {/* Kiri: Gambar dan Deskripsi */}
        <div className="w-full md:w-2/3 flex flex-col items-center justify-center py-12 md:pb-12 px-4 md:mb-20 ">
          <img
            src="https://i.imgur.com/Nrroar6.png"
            alt="background"
            className="md:w-[60%] w-96 mb-4 md:-mb-0 hidden md:block"
          />
          <h5 className="md:text-base text-lg text-center text-gray-600 md:mt-0 hidden md:block">
            Berikan dampak langsung pada pertumbuhan ekonomi lokal dengan
          </h5>
          <h5 className="text-gray-600 md:text-base text-lg text-center md:mt-2 hidden md:block">
            mendanai UMKM yang membutuhkan modal untuk berembang.
          </h5>
        </div>

        {/* Kanan: Form dan Button */}
        <div className="w-full md:w-1/3 md:bg-accent-100 h-lvh flex flex-col pt-8 px-7 md:pt-40">
          <h6 className="text-gray-800 font-bold text-2xl md:text-3xl">
            Login
          </h6>
          <p className="text-gray-600 mt-2 text-sm md:text-base">
            {" "}
            Silahkan masukkan email dan password
          </p>
          <form action={handleLogin}>
            <div className="flex flex-col gap-3.5 mt-3.5">
              <InputBox name="email" type="text" label="Email" />
              <InputBox name="password" type="password" label="Password" />
            </div>
            <button
              type="submit"
              className="mt-4 bg-accent-700 rounded-lg p-2 text-white font-semibold hover:bg-accent-800 transition-colors duration-300 ease-out w-full"
            >
              Masuk
            </button>
          </form>

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
