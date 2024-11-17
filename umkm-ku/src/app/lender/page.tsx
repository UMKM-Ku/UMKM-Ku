import { useState } from "react";

export default function Lender() {
  const [totalBalance, setTotalBalance] = useState(120000);
  const [profit, setProfit] = useState(50000);
  const [claimedCredit, setClaimedCredit] = useState(1);

  return (
    <>
     <div className="min-h-screen bg-gray-50 p-4">
      {/* Header */}
      <header className="flex justify-between items-center bg-white p-4 rounded-lg shadow-md mb-4">
        <div className="flex items-center">
          <img src="/logo.png" alt="Logo UMKM-Ku" className="w-12 h-12" />
          <h1 className="ml-2 text-2xl font-bold text-green-600">UMKM-Ku</h1>
        </div>
        <div className="flex space-x-4">
          <button className="btn btn-ghost">Dashboard</button>
          <button className="btn btn-ghost">Marketplace</button>
          <button className="btn btn-ghost">Portfolio</button>
        </div>
        <div className="flex items-center space-x-4">
          <button className="btn btn-ghost">Notifikasi</button>
          <button className="btn btn-primary">Profile</button>
        </div>
      </header>

      {/* Banner */}
      <section className="bg-green-100 rounded-lg p-4 flex justify-between items-center shadow-md mb-6">
        <div>
          <h2 className="text-xl font-bold text-green-700">
            Yuk, danai para UMKM
          </h2>
          <p className="text-gray-600">
            Mereka membutuhkan modal untuk berkembang.
          </p>
        </div>
        <button className="btn btn-success">Cek Sekarang</button>
      </section>

      {/* Informasi Aset */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="card bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold">SaldoKu</h3>
          <p className="text-2xl font-bold text-green-600">Rp. {totalBalance.toLocaleString()}</p>
          <button className="btn btn-primary mt-4">Top up danamu</button>
        </div>
        <div className="card bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold">Asetku</h3>
          <p>Dalam Pinjaman: Rp. {profit.toLocaleString()}</p>
          <p>Keuntungan: Rp. {profit.toLocaleString()}</p>
          <p>Dana yang diclaim: {claimedCredit} UMKM</p>
          <button className="btn btn-ghost mt-4">Lihat Lainnya</button>
        </div>
      </section>

      {/* Berita Terkini */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-4">Berita Terkini</h2>
        <div className="grid gap-4">
          <div className="card bg-white p-4 rounded-lg shadow-md flex items-center space-x-4">
            <img src="/image-placeholder.jpg" alt="Berita" className="w-16 h-16 rounded" />
            <div>
              <h3 className="font-bold">Tahun 2024 UMKM naik 4%?</h3>
              <p className="text-gray-600 text-sm">16/11/2023</p>
            </div>
          </div>
        </div>
        <button className="btn btn-outline w-full mt-4">Lihat berita lain</button>
      </section>

      {/* Pusat Bantuan */}
      <section className="bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Pusat Bantuan</h2>
        <div className="space-y-2">
          <div className="flex justify-between">
            <p>Kamus</p>
            <button className="text-blue-500"></button>
          </div>
          <div className="flex justify-between">
            <p>FAQ</p>
            <button className="text-blue-500"></button>
          </div>
          <div className="flex justify-between">
            <p>Tentang Kami</p>
            <button className="text-blue-500"></button>
          </div>
          <div className="flex justify-between">
            <p>Contact</p>
            <button className="text-blue-500"></button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-8 p-4 bg-green-700 text-white text-center rounded-lg">
        <p>Copyright ©2024, UMKM-Ku</p>
      </footer>
    </div>
    </>
  )
}
