// Home Page when the users first visit the website
import Image from "next/image";
import KeuntunganMenarik from "@/public/landing-pages/keuntungan-menarik.png";
import PlatformAman from "@/public/landing-pages/platform-aman.png";
import DukunganPenuh from "@/public/landing-pages/dukungan-penuh.png";
import Link from "next/link";

export default function LandingPages() {
  return (
    <div className="flex flex-col w-screen">
      {/* // Hero Section */}
      <div className="flex py-28 px-20">
        <div className="flex flex-col gap-2">
          <h1 className="text-4xl font-semibold text-gray-800 mb-2">
            Pendanaan & Investasi lebih inklusif untuk semua
          </h1>
          <p className="text-sm mb-3">
            UMKM-ku adalah platform peer-to-peer (P2P) lending yang
            menghubungkan usaha mikro, kecil, dan menengah (UMKM) dengan para
            investor yang mencari peluang untuk mendukung bisnis lokal. Dengan
            misi memberdayakan UMKM di Indonesia, UMKM-ku memudahkan akses modal
            bagi pengusaha, sekaligus membuka peluang investasi bagi masyarakat
            luas.
          </p>
          <div className="flex gap-2 items-end">
            <div className="flex flex-col items-center justify-center">
              <label className="form-control w-full max-w-xs">
                <input
                  type="text"
                  placeholder="Masukkan email..."
                  className="input input-bordered w-full max-w-xs"
                />
              </label>
            </div>
            <Link href="/register/borrower">
              <button className="btn text-white bg-teal-700 hover:bg-teal-600">
                Daftar sekarang
              </button>
            </Link>
          </div>
        </div>
        <button className="btn btn-circle btn-outline">
          <img src="/hero-image.png" alt="hero-image" />
        </button>
      </div>

      {/* // Metrics Section */}
      <div className="flex flex-col py-32 px-20">
        <div className="flex flex-col gap-12 items-center">
          <h1 className="text-2xl font-semibold text-gray-800 line-clamp-2">
            UMKM-ku telah menjadi solusi terpercaya bagi lender dan borrower
          </h1>

          <div className="grid grid-cols-4 gap-2">
            <div className="flex flex-col items-start gap-1 px-4 py-4 rounded-lg bg-[#E2F7F4] border border-black/15 shadow-sm">
              <h3 className="text-xl font-semibold text-teal-800">Rp123M</h3>
              <p className="text-sm text-gray-600">
                Total modal yang sudah disalurkan
              </p>
            </div>
            <div className="flex flex-col items-start gap-1 px-4 py-4 rounded-lg bg-[#E2F7F4] border border-black/15 shadow-sm">
              <h3 className="text-xl font-semibold text-teal-800">60,000+</h3>
              <p className="text-sm text-gray-600">
                Total UMKM yang sudah terbantu
              </p>
            </div>
            <div className="flex flex-col items-start gap-1 px-4 py-4 rounded-lg bg-[#E2F7F4] border border-black/15 shadow-sm">
              <h3 className="text-xl font-semibold text-teal-800">
                1.500.000+
              </h3>
              <p className="text-sm text-gray-600">
                Total investor yang telah bergabung
              </p>
            </div>
            <div className="flex flex-col items-start gap-1 px-4 py-4 rounded-lg bg-[#E2F7F4] border border-black/15 shadow-sm">
              <h3 className="text-xl font-semibold text-teal-800">Rp88M</h3>
              <p className="text-sm text-gray-600">
                Total nilai pinjaman yang sudah tersalurkan
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* // USP for using the UMKM-ku */}
      <div className="flex flex-col py-32 px-20">
        <div className="flex flex-col gap-12 items-center">
          <h1 className="text-4xl font-semibold text-gray-800 line-clamp-2">
            Alasan untuk memilih UMKM-ku
          </h1>
          <div className="grid grid-cols-3 gap-2">
            <div className="flex flex-col items-start gap-2">
              <Image
                src={DukunganPenuh}
                alt="Dukungan penuh untuk UMKM"
                className="bg-none rounded-md w-full shadow-sm mb-2"
                height={300}
              />
              <h3 className="text-xl font-semibold text-gray-700">
                Dukungan penuh untuk UMKM
              </h3>
              <p className="text-sm text-gray-600">
                Berikan dampak langsung pada pertumbuhan ekonomi lokal dengan
                mendanai UMKM yang membutuhkan modal untuk berkembang.
              </p>
            </div>
            <div className="flex flex-col items-start gap-2">
              <Image
                src={KeuntunganMenarik}
                alt="Keuntungan yang menarik"
                className="bg-none rounded-md w-full shadow-sm mb-2"
                height={300}
              />
              <h3 className="text-xl font-semibold text-gray-700">
                Keuntungan yang menarik
              </h3>
              <p className="text-sm text-gray-600">
                Dapatkan keuntungan kompetitif dengan membantu bisnis lokal
                tumbuh. Investasi Anda tidak hanya menghasilkan return
                finansial, tetapi juga sosial.
              </p>
            </div>
            <div className="flex flex-col items-start gap-2">
              <Image
                src={PlatformAman}
                alt="Dukungan penuh untuk UMKM"
                className="bg-none rounded-md w-full shadow-sm mb-2"
                height={300}
              />
              <h3 className="text-xl font-semibold text-gray-700">
                Platform Aman & Terpercaya
              </h3>
              <p className="text-sm text-gray-600">
                Dengan sistem keamanan berstandar tinggi dan regulasi ketat,
                UMKM-ku memberikan kenyamanan dan perlindungan bagi semua
                pengguna, baik pemberi dana maupun peminjam.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
