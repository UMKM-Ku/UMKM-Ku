import Link from "next/link";

export default function NavbarRegisterBorrower({ role }: { role: string }) {
  return (
    <>
      <nav className="border-b-2 flex justify-between items-center">
        <div className="flex gap-5 items-center py-4 px-6">
          <Link href={"/"}>
            <img
              src="https://i.imgur.com/GppMmRj.png"
              alt="logo UMKM-Ku"
              className="h-12"
            />
          </Link>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/8/83/OJK_Logo.png"
            alt="logo UMKM-Ku"
            className="h-12 border-r-2 pr-4"
          />

          <h6 className="font-bold text-md mt-2.5 text-accent-700">{role}</h6>
        </div>

        <div className="flex gap-5 items-center text-gray-600 font-semibold mt-2 pr-4 cursor-pointer">
          <Link
            href={"/"}
            className="hover:text-accent-700 duration-300 ease-out transition-colors"
          >
            Beranda
          </Link>
          <Link
            href={"/about-us"}
            className="hover:text-accent-700 duration-300 ease-out transition-colors"
          >
            Tentang Kami
          </Link>
        </div>
      </nav>
    </>
  );
}
