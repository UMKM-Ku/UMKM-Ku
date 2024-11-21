import React from "react";
import { CardPortfolio } from "./card-portfolio";
import { GiWallet } from "react-icons/gi";
import TopUp from "../topup-view/topup";

export default function PortfolioLender() {
  const portfolioData = {
    name: "Joniwarta",
    status: "Berjalan",
    remainingPrincipal: 4500000,
    remainingMargin: 4000,
    progress: {
      current: 10,
      total: 50,
    },
    marginPercentage: 70,
    onTimeStatus: true,
    imageSrc:
      "https://images.unsplash.com/photo-1527580477540-6ef8bc65b8a3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  };

  return (
    <div className="px-4 md:px-8 lg:px-32 mt-32 mb-8 w-full">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Left Section - Income */}
        <div className="w-full md:w-2/3">
          <div className="bg-white rounded-lg shadow p-4 md:p-6 h-full">
            <h2 className="text-xl md:text-2xl font-bold mb-4">Pendapatan</h2>
            <div className="space-y-4">
              <div className="flex justify-between border-b pb-3">
                <span>Jumlah Pendanaan</span>
                <span className="text-teal-600">Rp 500.000</span>
              </div>
              <div className="flex justify-between border-b pb-3">
                <span>Imbal hasi selama ini</span>
                <span className="text-teal-600">Rp 1.000.000</span>
              </div>
              <div className="flex justify-between border-b pb-3">
                <span>Jumlah penarikan dana</span>
                <span className="text-teal-600">Rp 6.000</span>
              </div>

              <div className="mt-6">
                <h3 className="mb-4">Mitra yang didanai</h3>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-gray-500">Mitra yang didanai</div>
                    <div className="font-bold text-teal-600">2 Mitra</div>
                  </div>
                  <div>
                    <div className="text-gray-500">Pembayaran lancar</div>
                    <div className="font-bold text-teal-600">1 Mitra</div>
                  </div>
                  <div>
                    <div className="text-gray-500">Pembayaran terlambat</div>
                    <div className="font-bold text-teal-600">1 Mitra</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section - Balance and Contribution */}
        <div className="w-full md:w-1/3 flex flex-col gap-6">
          {/* Balance Card */}
          <div className="p-8 gap-5 border-2 w-full  rounded-md flex items-center md:flex-col md:items-start md:justify-center">
            <div className="flex gap-5 items-center md:flex-row md:items-center md:justify-center">
              <div className="p-4 bg-accent-600 rounded-lg">
                <GiWallet className="text-white text-5xl" />
              </div>
              <div className="md:flex md:flex-col md:items-start md:justify-center">
                <h4 className="text-lg font-semibold text-gray-600">Saldoku</h4>
                <h4 className="text-accent-700 font-semibold text-lg">
                  Rp. 2.000.000
                </h4>
              </div>
            </div>
            <label
              htmlFor="topup-modal"
              className="mt-5 border-2 w-full py-2 rounded-md border-accent-600 text-accent-700 hover:bg-accent-700 hover:text-white transition-colors duration-300 ease-in-out font-semibold text-center cursor-pointer"
            >
              Top Up Dana
            </label>
          </div>

          {/* Contribution Card */}
          <div className="bg-white rounded-lg shadow p-4 md:p-6">
            <div className="mb-4">
              <h3 className="text-lg md:text-xl font-bold">Kontribusi mu</h3>
              <div className="flex items-center gap-2 mt-4">
                <div className="bg-green-100 p-2 rounded-lg">
                  <svg
                    className="w-5 h-5 md:w-6 md:h-6 text-teal-600"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"
                    />
                  </svg>
                </div>
                <div>Kamu sudah memberi dampak ke 3 UMKM</div>
              </div>
            </div>
            <button
              type="button"
              className="mt-5 border-2 w-full py-2 rounded-md border-accent-600 text-accent-700 hover:bg-accent-700 hover:text-white transition-colors duration-300 ease-in-out font-semibold"
            >
              Lihat dampak yang diberikan
            </button>
          </div>
        </div>
      </div>
      {/* Modal Top Up */}
      <TopUp />
      {/* Partner Data Section */}
      <div className="mt-6 bg-white rounded-lg shadow p-4 md:p-6">
        <h2 className="text-xl md:text-2xl font-bold mb-4">Data Mitra</h2>
        <div className="flex gap-2 mb-6 flex-wrap">
          <button className="px-3 md:px-4 py-1 md:py-2 border border-teal-600 text-teal-600 rounded-full text-sm md:text-base">
            Tepat Waktu
          </button>
          <button className="px-3 md:px-4 py-1 md:py-2 bg-teal-600 text-white rounded-full text-sm md:text-base">
            Terlambat
          </button>
          <button className="px-3 md:px-4 py-1 md:py-2 border border-teal-600 text-teal-600 rounded-full text-sm md:text-base">
            Lunas
          </button>
          <button className="px-3 md:px-4 py-1 md:py-2 border border-teal-600 text-teal-600 rounded-full text-sm md:text-base">
            Klaim Selesai
          </button>
          <button className="px-3 md:px-4 py-1 md:py-2 border border-teal-600 text-teal-600 rounded-full text-sm md:text-base">
            Menunggu Pencairan
          </button>
          <button className="px-3 md:px-4 py-1 md:py-2 border border-teal-600 text-teal-600 rounded-full text-sm md:text-base">
            Lainnya
          </button>
        </div>
        <CardPortfolio {...portfolioData} />
      </div>
    </div>
  );
}
