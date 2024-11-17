// Home Page when the users first visit the website
import Image from "next/image";
import KeuntunganMenarik from "@/public/landing-pages/keuntungan-menarik.png";
import PlatformAman from "@/public/landing-pages/platform-aman.png";
import DukunganPenuh from "@/public/landing-pages/dukungan-penuh.png";
import Link from "next/link";
import LandingNavigation from "./landing-navigation";
import PlaceholderImage from "@/public/landing-pages/placeholder-img.png";

export default function LandingPages() {
  return (
    <div className="flex flex-col w-screen">
      {/* // Hero Section */}
      <div className="flex py-8 md:py-16 lg:py-28 px-4 md:px-16 lg:px-32">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-14 items-center">
          <div className="flex flex-col gap-3 w-full lg:w-1/2">
            <div className="flex flex-col gap-2">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-800 mb-2">
                Pendanaan & Investasi lebih inklusif untuk semua
              </h1>
              <p className="text-sm md:text-base mb-3 text-gray-600">
                UMKM-ku adalah platform peer-to-peer (P2P) lending yang
                menghubungkan usaha mikro, kecil, dan menengah (UMKM) dengan
                para investor yang mencari peluang untuk mendukung bisnis lokal.
                Dengan misi memberdayakan UMKM di Indonesia, UMKM-ku memudahkan
                akses modal bagi pengusaha, sekaligus membuka peluang investasi
                bagi masyarakat luas.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-2">
              <Link href="register/borrower">
                <button className="w-full sm:w-auto bg-accent-700 rounded-lg py-2 px-3 text-white font-medium text-sm hover:bg-accent-800 transition-colors duration-300 ease-out">
                  Daftar sebagai Borrower
                </button>
              </Link>
              <Link href="register/lender">
                <button className="w-full sm:w-auto bg-white rounded-lg border border-gray-200 py-2 px-3 text-black font-medium text-sm hover:bg-gray-100 transition-colors duration-300 ease-out">
                  Daftar sebagai Lender
                </button>
              </Link>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <Image
              src={PlaceholderImage}
              alt="Placeholder Image"
              className="bg-none rounded-md w-full shadow-sm mb-2"
              height={480}
              width={480}
            />
          </div>
        </div>
      </div>

      {/* // Metrics Section */}
      <div className="flex flex-col py-16 md:py-24 lg:py-32 px-4 md:px-16 lg:px-32">
        <div className="flex flex-col gap-8 lg:gap-12 items-center">
          <h1 className="text-xl md:text-2xl font-semibold text-gray-800 line-clamp-2 text-center px-4">
            UMKM-ku telah menjadi solusi terpercaya bagi lender dan borrower
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
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
                Total pinjaman yang sudah tersalurkan
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* // USP for using the UMKM-ku */}
      <div className="flex flex-col py-16 md:py-24 lg:py-32 px-4 md:px-16 lg:px-32">
        <div className="flex flex-col gap-8 lg:gap-12 items-center">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-800 line-clamp-2 text-center">
            Alasan untuk memilih UMKM-ku
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flex flex-col items-start gap-2">
              <Image
                src={DukunganPenuh}
                alt="Dukungan penuh untuk UMKM"
                className="bg-none rounded-md w-full shadow-sm mb-2"
                height={300}
              />
              <h3 className="text-lg md:text-xl font-semibold text-gray-700">
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
              <h3 className="text-lg md:text-xl font-semibold text-gray-700">
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
                alt="Platform Aman & Terpercaya"
                className="bg-none rounded-md w-full shadow-sm mb-2"
                height={300}
              />
              <h3 className="text-lg md:text-xl font-semibold text-gray-700">
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
      {/* Borrower Section */}
      <div className="flex flex-col py-16 md:py-24 lg:py-32 px-4 md:px-16 lg:px-32 bg-[#FBF8F4] items-center">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-800 line-clamp-2 pb-10 lg:pb-20 text-center">
          Untuk Borrower
        </h1>
        <div className="flex flex-col gap-10 w-full">
          {/* First Feature */}
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-14 items-center w-full">
            <div className="flex flex-col gap-3 w-full lg:w-1/2">
              <h2 className="text-lg md:text-xl font-semibold text-gray-800">
                Proses Pengajuan Pendanaan yang Cepat dan Sederhana
              </h2>
              <p className="text-sm md:text-base text-gray-600">
                UMKM-ku menawarkan solusi pendanaan yang jauh lebih cepat dan
                sederhana dibandingkan proses perbankan tradisional. Peminjam
                dapat mengajukan pendanaan secara online dengan langkah-langkah
                yang jelas dan transparan, tanpa harus menghadapi birokrasi yang
                berbelit-belit.
              </p>
            </div>
            <div className="w-full lg:w-1/2">
              <Image
                src={PlaceholderImage}
                alt="Placeholder Image"
                className="bg-none rounded-md w-full shadow-sm"
                height={480}
                width={480}
              />
            </div>
          </div>

          {/* Second Feature */}
          <div className="flex flex-col-reverse lg:flex-row gap-8 lg:gap-14 items-center w-full">
            <div className="w-full lg:w-1/2">
              <Image
                src={PlaceholderImage}
                alt="Placeholder Image"
                className="bg-none rounded-md w-full shadow-sm"
                height={480}
                width={480}
              />
            </div>
            <div className="flex flex-col gap-3 w-full lg:w-1/2">
              <h2 className="text-lg md:text-xl font-semibold text-gray-800">
                Pendanaan yang Fleksibel dan Disesuaikan dengan Kebutuhan Usaha
              </h2>
              <p className="text-sm md:text-base text-gray-600">
                UMKM-ku memahami bahwa setiap bisnis memiliki kebutuhan yang
                berbeda. Oleh karena itu, kami memberikan fleksibilitas dalam
                memilih jumlah pinjaman dan jangka waktu pembayaran sesuai
                dengan kondisi dan arus kas bisnis Anda. Pendanaan yang
                disesuaikan ini memungkinkan UMKM untuk fokus pada pengembangan
                bisnis tanpa tekanan cicilan yang terlalu berat.
              </p>
            </div>
          </div>

          {/* Third Feature */}
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-14 items-center w-full">
            <div className="flex flex-col gap-3 w-full lg:w-1/2">
              <h2 className="text-lg md:text-xl font-semibold text-gray-800">
                Kesempatan Tumbuh dengan Dukungan Komunitas Investor
              </h2>
              <p className="text-sm md:text-base text-gray-600">
                Melalui platform kami, UMKM tidak hanya memperoleh dana, tetapi
                juga membangun hubungan dengan komunitas investor yang tertarik
                mendukung usaha lokal. Investor pada platform ini adalah
                individu maupun institusi yang memiliki visi untuk membantu UMKM
                sukses. Dengan UMKM-ku, Anda mendapatkan lebih dari sekadar
                modal — anda mendapat dukungan nyata untuk pertumbuhan usaha
                Anda.
              </p>
            </div>
            <div className="w-full lg:w-1/2">
              <Image
                src={PlaceholderImage}
                alt="Placeholder Image"
                className="bg-none rounded-md w-full shadow-sm"
                height={480}
                width={480}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Lender Section */}
      <div className="flex flex-col py-16 md:py-24 lg:py-32 px-4 md:px-16 lg:px-32 bg-[#F4FBFA] items-center">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-800 line-clamp-2 pb-10 lg:pb-20 text-center">
          Untuk Lender
        </h1>
        <div className="flex flex-col gap-10 w-full">
          {/* First Feature */}
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-14 items-center w-full">
            <div className="flex flex-col gap-3 w-full lg:w-1/2">
              <h2 className="text-lg md:text-xl font-semibold text-gray-800">
                Potensi Pengembalian Investasi yang Lebih Tinggi dengan Risiko
                Terkelola
              </h2>
              <p className="text-sm md:text-base text-gray-600">
                UMKM-ku menawarkan peluang investasi dengan tingkat pengembalian
                yang lebih tinggi dibandingkan dengan instrumen investasi
                tradisional seperti deposito atau obligasi. Dengan sistem
                analisis risiko yang cermat, lender dapat meminimalisir potensi
                kerugian sambil tetap mendapatkan return yang kompetitif. Ini
                memungkinkan para lender untuk berinvestasi dengan lebih percaya
                diri, mengetahui bahwa risiko telah dianalisis dengan baik oleh
                platform.
              </p>
            </div>
            <div className="w-full lg:w-1/2">
              <Image
                src={PlaceholderImage}
                alt="Placeholder Image"
                className="bg-none rounded-md w-full shadow-sm"
                height={480}
                width={480}
              />
            </div>
          </div>

          {/* Second Feature */}
          <div className="flex flex-col-reverse lg:flex-row gap-8 lg:gap-14 items-center w-full">
            <div className="w-full lg:w-1/2">
              <Image
                src={PlaceholderImage}
                alt="Placeholder Image"
                className="bg-none rounded-md w-full shadow-sm"
                height={480}
                width={480}
              />
            </div>
            <div className="flex flex-col gap-3 w-full lg:w-1/2">
              <h2 className="text-lg md:text-xl font-semibold text-gray-800">
                Investasi yang Memberikan Dampak Sosial Positif
              </h2>
              <p className="text-sm md:text-base text-gray-600">
                Selain mendapatkan keuntungan finansial, lender di UMKM-ku juga
                dapat merasakan kepuasan dari memberikan dampak nyata bagi
                pertumbuhan ekonomi lokal. Dengan mendanai UMKM, lender berperan
                langsung dalam mendukung bisnis-bisnis kecil yang mungkin tidak
                memiliki akses ke pendanaan dari lembaga keuangan besar.
                Investasi ini membantu menciptakan lapangan kerja baru,
                meningkatkan taraf hidup, dan memberdayakan masyarakat sekitar.
              </p>
            </div>
          </div>

          {/* Third Feature */}
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-14 items-center w-full">
            <div className="flex flex-col gap-3 w-full lg:w-1/2">
              <h2 className="text-lg md:text-xl font-semibold text-gray-800">
                Diversifikasi Portofolio Investasi dengan Pilihan UMKM yang
                Beragam
              </h2>
              <p className="text-sm md:text-base text-gray-600">
                UMKM-ku menyediakan berbagai pilihan UMKM dari berbagai sektor
                untuk didanai, memungkinkan lender mendiversifikasi portofolio
                investasinya dengan lebih luas. Diversifikasi ini membantu
                mengurangi risiko sambil membuka peluang bagi lender untuk
                mendapatkan pengembalian yang lebih stabil. Lender dapat memilih
                UMKM berdasarkan sektor yang diminati, tingkat risiko, atau
                potensi pertumbuhan bisnis, memberikan fleksibilitas dalam
                pengelolaan investasi.
              </p>
            </div>
            <div className="w-full lg:w-1/2">
              <Image
                src={PlaceholderImage}
                alt="Placeholder Image"
                className="bg-none rounded-md w-full shadow-sm"
                height={480}
                width={480}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Testimonial Section */}
      <div className="flex flex-col py-16 md:py-24 lg:py-32 px-4 md:px-16 lg:px-32 bg-white items-center">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-800 line-clamp-2 pb-10 lg:pb-20 text-center">
          Apa kata mereka yang telah bergabung dengan UMKM-ku
        </h1>

        {/* Testimonial Cards Container */}
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-6 w-full">
          {/* You can add testimonial cards here. Example structure: */}
          <div className="flex flex-col gap-4 p-6 rounded-lg border border-gray-200 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gray-200"></div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  Nama Pengguna
                </h3>
                <p className="text-sm text-gray-600">Role / Posisi</p>
              </div>
            </div>
            <p className="text-sm text-gray-600">
              "Testimonial text goes here. This is a placeholder for actual user
              testimonials."
            </p>
          </div>

          {/* Repeat testimonial cards as needed */}
          <div className="flex flex-col gap-4 p-6 rounded-lg border border-gray-200 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gray-200"></div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  Nama Pengguna
                </h3>
                <p className="text-sm text-gray-600">Role / Posisi</p>
              </div>
            </div>
            <p className="text-sm text-gray-600">
              "Testimonial text goes here. This is a placeholder for actual user
              testimonials."
            </p>
          </div>

          <div className="flex flex-col gap-4 p-6 rounded-lg border border-gray-200 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gray-200"></div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  Nama Pengguna
                </h3>
                <p className="text-sm text-gray-600">Role / Posisi</p>
              </div>
            </div>
            <p className="text-sm text-gray-600">
              "Testimonial text goes here. This is a placeholder for actual user
              testimonials."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
