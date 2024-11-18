export default function MainCard() {
  return (
    <>
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
    </>
  );
}
