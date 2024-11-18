export default function DetailLender() {
  return (
    <>
      <div className="bg-gray-100 p-6">
        <div className="text-gray-500 mb-4 text-xl">
          <a href="#" className="hover:text-blue-500">
            Marketplace
          </a>{" "}
          &gt; <span>Mulyono</span>
        </div>

        {/* Main Card */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex gap-6">
            {/* Image Section */}
            <img
              src="https://via.placeholder.com/150"
              alt="Cows"
              className="rounded-lg size-96 object-cover"
            />

            {/* Information Section */}
            <div className="flex-1 ">
              <div className="flex justify-between items-center">
                <h1 className="text-xl font-semibold">Mulyono</h1>
                <div className="flex items-center gap-2">
                  <span className="text-green-600 font-bold text-3xl">4.0</span>
                  <div className="text-yellow-400 text-4xl">★★★★☆</div>
                </div>
              </div>
              <p className="text-gray-600 text-xl">Membeli pakan sapi</p>
              <div className="text-gray-500 text-xl mt-1">Peternakan</div>
              <div className="flex justify-between items-center">
                <div className="mt-4 w-2/6 text-xl">
                  <div className="flex justify-between ">
                    <p className="text-gray-600">Modal</p>
                    <p className="font-bold text-gray-800">Rp. 4.500.000</p>
                  </div>
                  <div className="flex justify-between">
                    <p className="text-gray-600">Tenor</p>
                    <p className="font-bold text-gray-800">50 Minggu</p>
                  </div>
                  <div className="flex justify-between">
                    <p className="text-gray-600">Bagi Hasil</p>
                    <p className="font-bold text-gray-800">12%</p>
                  </div>
                </div>

                {/* Crowdfunding Progress */}
                <div className="mt-4 w-2/6">
                  <div className="flex justify-between">
                    <p className="text-gray-600 text-xl">Crowdfunding</p>
                    <span>70%</span>
                  </div>
                  <div className="w-full bg-accent-300 rounded-full h-2.5">
                    <div
                      className="bg-accent-700 h-2.5 rounded-full"
                      style={{ width: "70%" }}
                    />
                  </div>
                  <div className="flex justify-between items-center text-xl mt-2 bg-gray-200">
                    <button className="bg-gray-400 text-gray-800 px-3 py-1 rounded hover:bg-gray-300 transition">
                      -
                    </button>
                    <span>Rp. 100.000</span>
                    <button className="bg-gray-400 text-gray-800 px-3 py-1 rounded hover:bg-gray-300 transition">
                      +
                    </button>
                  </div>
                </div>

                {/* Donate Button */}
              </div>
              <div className="mt-4 flex justify-end">
                <button className="bg-accent-700 text-white py-2 px-4 rounded-lg hover:bg-accent-900 transition-colors duration-300 ease-out">
                  Danai Sekarang
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Details Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {/* Tentang UMKM */}
          <div className="bg-white p-6 rounded-lg shadow-md ">
            <h2 className="text-3xl font-semibold mb-4">Tentang UMKM</h2>
            <div className="space-y-2 text-xl flex flex-col gap-5">
              <div className="flex justify-between border-b-2 pb-4">
                <p className="text-gray-600">Tenor Pendanaan</p>
                <p className="font-bold text-gray-800">50 Minggu</p>
              </div>
              <div className="flex justify-between border-b-2 pb-4">
                <p className="text-gray-600">Bagi Hasil</p>
                <p className="font-bold text-gray-800">Rp 575.000</p>
              </div>
              <div className="flex justify-between border-b-2 pb-4">
                <p className="text-gray-600">Angsuran Mingguan</p>
                <p className="font-bold text-gray-800">Rp 115.000</p>
              </div>
              <div className="flex justify-between border-b-2 pb-4">
                <p className="text-gray-600">Pendanaan ke</p>
                <p className="font-bold text-gray-800">2 (Dua)</p>
              </div>
              <div className="flex justify-between border-b-2 pb-4">
                <p className="text-gray-600">Pekerjaan</p>
                <p className="font-bold text-gray-800">Peternak sapi</p>
              </div>
              <div className="flex justify-between border-b-2 pb-4">
                <p className="text-gray-600">Penghasilan perbulan</p>
                <p className="font-bold text-gray-800">Rp 4.500.000</p>
              </div>
              <div className="flex justify-between">
                <p className="text-gray-600">Sektor usaha</p>
                <p className="font-bold text-gray-800">Peternakan</p>
              </div>
            </div>
          </div>

          {/* Penilaian Lender */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-3xl font-semibold mb-4">Penilaian Lender</h2>
            <div className="space-y-4">
              <div>
                <p className="font-bold text-gray-800 text-xl">Martono</p>
                <p className="text-gray-600 text-xl">
                  Bapak Mulyono selalu tepat waktu saat pembayaran, sukses terus
                  pak Mulyono
                </p>
                <div className="text-yellow-400 text-xl">★★★★★</div>
              </div>
              <div>
                <p className="font-bold text-gray-800 text-xl">Martino</p>
                <p className="text-gray-600 text-xl">
                  Gak pernah telat kalo angsuran mantap pak
                </p>
                <div className="text-yellow-400 text-xl">★★★★☆</div>
              </div>
            </div>
            {/* Komentar Section */}
            <div className="mt-4">
              <h2 className="text-lg font-semibold mb-4">Komentar Lainnya</h2>
              <div className="space-y-4">
                <div>
                  <p className="font-bold text-gray-800">Komentar</p>
                  <textarea
                    className="w-full p-2 border border-gray-200 rounded-md"
                    placeholder="Tulis komentar disini"
                  ></textarea>
                  <button className="bg-accent-700 rounded-lg py-2 px-3 text-white font-medium text-sm hover:bg-accent-800 transition-colors duration-300 ease-out">
                    Komentar
                  </button>
                </div>
              </div>
            </div>
            {/* Pagination Section */}
            <div className="mt-4">
              <nav
                className="flex justify-center"
                aria-label="Page navigation example"
              >
                <ul className="flex list-style-none">
                  <li className="page-item">
                    <a
                      className="page-link relative block py-1.5 px-3  border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 focus:shadow-none"
                      href="#"
                      aria-label="Previous"
                    >
                      <span aria-hidden="true">&laquo;</span>
                    </a>
                  </li>
                  <li className="page-item">
                    <a
                      className="page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 text-gray-800 hover:text-gray-800 focus:shadow-none"
                      href="#"
                    >
                      1
                    </a>
                  </li>
                  <li className="page-item">
                    <a
                      className="page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 text-gray-800 hover:text-gray-800 focus:shadow-none"
                      href="#"
                    >
                      2
                    </a>
                  </li>
                  <li className="page-item">
                    <a
                      className="page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 text-gray-800 hover:text-gray-800 focus:shadow-none"
                      href="#"
                    >
                      3
                    </a>
                  </li>
                  <li className="page-item">
                    <a
                      className="page-link relative block py-1.5 px-3  border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 focus:shadow-none"
                      href="#"
                      aria-label="Next"
                    >
                      <span aria-hidden="true">&raquo;</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
