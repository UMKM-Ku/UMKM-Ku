"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const path = usePathname();
  return (
    <>
      <nav className="bg-white p-4 flex justify-between items-center text-gray-600 border-b-2  fixed w-full z-10 top-0 border-gray-300">
        <div className="flex items-center space-x-4 gap-4">
          <Link href={"/"}>
            <img
              src="https://i.ibb.co.com/ThfCXmV/Group-18261.png"
              alt="UMKM-Ku Logo"
              className="h-12 cursor-pointer"
            />
          </Link>
          <img
            className="h-12 cursor-pointer"
            src="https://upload.wikimedia.org/wikipedia/commons/8/83/OJK_Logo.png"
            alt="Workflow"
          />
        </div>
        <div className="hidden md:flex space-x-6 text-gray-500 font-semibold">
          <a
            href="/borrower"
            className={`hover:underline ${
              path === "/borrower" && "text-accent-700"
            }`}
          >
            Beranda
          </a>
          <a
            href="/borrower/list-pendanaan"
            className={`hover:underline ${
              path === "/borrower/list-pendanaan" && "text-accent-700"
            }`}
          >
            List Pendanaan
          </a>
        </div>

        <div className="dropdown dropdown-end mt-2">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />
            </div>
          </div>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-white rounded-md z-[1] mt-3 w-fit py-2 px-5 shadow text-gray-600 border-2"
          >
            <li className="border-b">
              <a className="justify-between hover:text-accent-700 duration-300 ease-out transition-colors">
                Profil
              </a>
            </li>
            <li className="border-b">
              <a className="justify-between hover:text-accent-700 duration-300 ease-out transition-colors">
                Pengaturan
              </a>
            </li>
            <li className="border-b lg:border-none hover:text-accent-700 duration-300 ease-out transition-colors">
              <a>Keluar</a>
            </li>
            <li className="border-b">
              <a
                href="/borrower"
                className="justify-between hover:text-accent-700 duration-300 ease-out transition-colors block lg:hidden"
              >
                Beranda
              </a>
            </li>
            <li className="border-b">
              <a
                href="/list-pendanaan"
                className="justify-between hover:text-accent-700 duration-300 ease-out transition-colors block lg:hidden"
              >
                List Pendanaan
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
