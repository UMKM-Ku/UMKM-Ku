import Link from "next/link";

export default function FooterLender() {
  return (
    <>
      <footer className="bg-teal-600 text-white">
        <div className="max-w-7xl mx-auto py-12 px-4">
          <div className="grid grid-cols-1 md:grid-cols-7 gap-2">
            <div className="md:col-span-4 col-span-1">
              <Link href={"/"}>
                <img
                  src="https://i.imgur.com/Httb8oJ.png"
                  alt="logo"
                  className="h-16"
                />
              </Link>
              <p className="text-sm md:pr-36">
                Berikan dampak langsung pada pertumbuhan ekonomi lokal dengan
                mendanai UMKM yang membutuhkan modal untuk berkembang.
              </p>
            </div>

            <div className="col-span-1">
              <h3 className="text-lg font-semibold mb-4">Beranda Lender</h3>
              <ul className="space-y-2">
                <li>
                  <a href="/lender" className="text-sm hover:underline">
                    Asetku
                  </a>
                </li>
                <li>
                  <a href="/lender" className="text-sm hover:underline">
                    Berita Terkini
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-span-1">
              <h3 className="text-lg font-semibold mb-4">Marketplace</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/lender/marketplace"
                    className="text-sm hover:underline"
                  >
                    List Peminjam
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-span-1">
              <h3 className="text-lg font-semibold mb-4">Beranda</h3>
              <ul className="space-y-2">
                <li>
                  <a href="/" className="text-sm hover:underline">
                    Landing Page
                  </a>
                </li>
                <li>
                  <a href="/our-team" className="text-sm hover:underline">
                    Tentang Kami
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="mt-8 pt-8 border-t border-teal-500">
            <div className="flex justify-between items-center">
              <p className="text-sm">© Copyright 2024, UMKM-Ku</p>
              <div className="flex space-x-4">
                <a href="#" className="text-white hover:text-teal-200">
                  {/* <Facebook className="h-5 w-5" /> */}
                </a>
                <a href="#" className="text-white hover:text-teal-200">
                  {/* <Twitter className="h-5 w-5" /> */}
                </a>
                <a href="#" className="text-white hover:text-teal-200">
                  {/* <Instagram className="h-5 w-5" /> */}
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
