export default function Footer() {
  return (
    <>
      <footer className="bg-teal-600 text-white">
        <div className="max-w-7xl mx-auto py-12 px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Branding */}
            <div className="col-span-1">
              <h3 className="text-xl font-bold mb-4">UMKM-Ku</h3>
              <p className="text-sm">
                Website untuk membantu UMKM yang membutuhkan modal dan
                memberikan solusi.
              </p>
            </div>

            {/* Quick Links */}
            <div className="col-span-1">
              <h3 className="text-lg font-semibold mb-4">Pusat Bantuan</h3>
              <ul className="space-y-2">
                <li>
                  <a href="/syarat" className="text-sm hover:underline">
                    Syarat
                  </a>
                </li>
                <li>
                  <a href="/faq" className="text-sm hover:underline">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="/tentang-kami" className="text-sm hover:underline">
                    Tentang Kami
                  </a>
                </li>
                <li>
                  <a href="/contact" className="text-sm hover:underline">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Information */}
            <div className="col-span-1">
              <h3 className="text-lg font-semibold mb-4">Informasi</h3>
              <ul className="space-y-2">
                <li>
                  <a href="/berita-terkini" className="text-sm hover:underline">
                    Berita Terkini
                  </a>
                </li>
                <li>
                  <a href="/media" className="text-sm hover:underline">
                    Media
                  </a>
                </li>
              </ul>
            </div>

            {/* Portfolio */}
            <div className="col-span-1">
              <h3 className="text-lg font-semibold mb-4">Portfolio</h3>
              <ul className="space-y-2">
                <li>
                  <a href="/usaha" className="text-sm hover:underline">
                    Usaha
                  </a>
                </li>
                <li>
                  <a href="/dana" className="text-sm hover:underline">
                    Dana
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
