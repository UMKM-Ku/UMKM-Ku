export default function BorrowerFaq() {
  return (
    <>
      <div className="w-[80%]">
        <h1 className="text-2xl font-bold mb-3">Pusat Bantuan</h1>
        <div className="collapse bg-base-200 border-2 collapse-arrow rounded-tr-md rounded-tl-md rounded-none">
          <input type="checkbox" />
          <div className="collapse-title text-lg text-gray-700 font-medium">
            Apa syarat untuk mengajukan pinjaman?
          </div>
          <div className="collapse-content bg-white ">
            <p className="pt-3">
              UMKM-Ku memiliki kriteria untuk seseorang yang ingin mangjukan
              pendanaan sebagai berikut:
            </p>
            <p>1. Warga negara Indonesia atau penduduk tetap.</p>
            <p>2. Berusia minimal 21 tahun.</p>
            <p>3. Memiliki rekam jejak kredit yang baik.</p>
            <p>4. Mempunyai NPWP dan Rekening Bank</p>
          </div>
        </div>
        <div className="collapse bg-base-200 border-2 collapse-arrow  rounded-none">
          <input type="checkbox" />
          <div className="collapse-title text-lg text-gray-700 font-medium ">
            Apa yang dimaksud dengan imba hasil dan bagaimana cara kerjanya?
          </div>
          <div className="collapse-content bg-white">
            <p className="pt-3">
              Imba hasil adalah sebuah keuntungan yang akan Anda berikan kepada
              seorang peminjam dana, nilai keuntungan yang dapat dibagikan
              dimulai dari 5-30% dan ini tergantung peminjam dana ingin memberi
              berapa persen keuntunngan kalian.
            </p>
          </div>
        </div>
        <div className="collapse bg-base-200 border-2 collapse-arrow rounded-br-md rounded-bl-md rounded-none">
          <input type="checkbox" />
          <div className="collapse-title text-lg text-gray-700 font-medium">
            Bagaimana cara saya membayar angsuran perbulan?
          </div>
          <div className="collapse-content bg-white">
            <p className="pt-3">
              Angsuran perbulan akan langsung ditarik melalui rekening bank para
              peminjam dana secara otomatis setiap bulan, apabila tidak terdapat
              saldo didalam rekening maka akan datang notifikasi kepada peminjam
              dana dan jika peminjam dengan sengaja tidak membayar, maka akan
              datang pegawai kami ke lokasi peminjam.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
