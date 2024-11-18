export default function LenderFaq() {
  return (
    <>
      <div className="w-[80%]">
        <h1 className="text-2xl font-bold mb-3 text-gray-600">Pusat Bantuan</h1>
        <div className="collapse bg-base-200 border-2 collapse-arrow rounded-tr-md rounded-tl-md rounded-none">
          <input type="checkbox" />
          <div className="collapse-title text-lg text-gray-700 font-medium">
            Siapa itu Peminjam Dana?
          </div>
          <div className="collapse-content bg-white ">
            <p className="pt-3">
              Peminjam dana adalah individu atau perusahaan yang memberikan dana
              kepada UMKM (Usaha Mikro, Kecil, dan Menengah) untuk membantu
              perkembangan usaha mereka. Sebagai pendana, Anda akan mendapatkan
              imbal hasil atau bunga sebagai bentuk keuntungan atas dana yang
              Anda investasikan.
            </p>
          </div>
        </div>
        <div className="collapse bg-base-200 border-2 collapse-arrow  rounded-none">
          <input type="checkbox" />
          <div className="collapse-title text-lg text-gray-700 font-medium ">
            Bagaimana cara saya mulai mendanai?
          </div>
          <div className="collapse-content bg-white">
            <p className="pt-3">
              Untuk mulai mendanai, ikuti langkah-langkah berikut:
            </p>

            <p>
              1. Pilih proyek pendanaan yang sesuai dengan preferensi dan profil
              risiko Anda.
            </p>
            <p>2. Tentukan jumlah dana yang ingin Anda investasikan.</p>
            <p>3. Ikuti instruksi untuk menyelesaikan transaksi pendanaan.</p>
            <p>
              4. Tunggu konfirmasi dan pantau perkembangan proyek yang Anda
              danai.
            </p>
          </div>
        </div>
        <div className="collapse bg-base-200 border-2 collapse-arrow rounded-br-md rounded-bl-md rounded-none">
          <input type="checkbox" />
          <div className="collapse-title text-lg text-gray-700 font-medium">
            Apa keuntungan yang saya dapatkan sebagai pendana?
          </div>
          <div className="collapse-content bg-white">
            <p className="pt-3">
              1. Imbal Hasil: Anda akan menerima bunga atas dana yang Anda
              investasikan. Besaran bunga tergantung pada proyek yang Anda
              pilih.
            </p>
            <p>
              2. Diversifikasi Investasi: Anda dapat memilih berbagai proyek
              untuk mengurangi risiko.
            </p>
            <p>
              3. Dukungan untuk UMKM: Anda turut membantu pengembangan usaha
              kecil yang berpotensi tumbuh.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
