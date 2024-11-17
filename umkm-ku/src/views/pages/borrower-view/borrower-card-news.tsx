export default function BorrowerCardNews() {
  return (
    <>
      <div className="flex flex-col items-center gap-4  ">
        {/* News Card */}
        <div className="flex bg-white shadow-lg rounded-lg overflow-hidden p-4 w-[80%] border-2">
          <img
            src="https://via.placeholder.com/100"
            alt="News Image"
            className="w-24 h-24 object-cover rounded-lg"
          />
          <div className="ml-4">
            <p className="text-lg text-gray-400 ">WEDNESDAY</p>
            <h3 className="text-md font-semibold">Tahun 2024 UMKM naik 4%?</h3>
            <p className="text-gray-600 text-sm mt-2">
              Dalam penemuan di Jawa Timur para dok...{" "}
              <a href="#" className="text-blue-500">
                selengkapnya
              </a>
            </p>
          </div>
        </div>
        {/* Repeat News Card */}
        <div className="flex bg-white shadow-lg rounded-lg overflow-hidden w-[80%] p-4 border-2">
          <img
            src="https://via.placeholder.com/100"
            alt="News Image"
            className="w-24 h-24 object-cover rounded-lg"
          />
          <div className="ml-4">
            <p className="text-xl text-gray-400">WEDNESDAY</p>
            <h3 className="text-md font-semibold">
              UMKM Diera digital apa itu?
            </h3>
            <p className="text-gray-600 text-sm mt-2">
              Indonesia perlu melakukan segala keb...{" "}
              <a href="#" className="text-blue-500">
                selengkapnya
              </a>
            </p>
          </div>
        </div>
        {/* Button for More News */}
        <button className="mt-4 bg-accent-700 rounded-lg p-2 px-12 text-white font-semibold hover:bg-accent-800 transition-colors duration-300 ease-out">
          Lihat berita lain
        </button>
      </div>
    </>
  );
}
