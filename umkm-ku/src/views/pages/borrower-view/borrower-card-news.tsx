export default function BorrowerCardNews() {
  return (
    <>
      <div className="flex flex-col items-center gap-4 px-6">
        {/* News Card */}
        <div className="flex bg-white shadow-lg rounded-lg overflow-hidden w-full md:w-2/3 lg:w-1/2 p-4">
          <img
            src="https://via.placeholder.com/100"
            alt="News Image"
            className="w-24 h-24 object-cover rounded-lg"
          />
          <div className="ml-4">
            <p className="text-xs text-gray-400">WEDNESDAY</p>
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
        <div className="flex bg-white shadow-lg rounded-lg overflow-hidden w-full md:w-2/3 lg:w-1/2 p-4">
          <img
            src="https://via.placeholder.com/100"
            alt="News Image"
            className="w-24 h-24 object-cover rounded-lg"
          />
          <div className="ml-4">
            <p className="text-xs text-gray-400">WEDNESDAY</p>
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
        <button className="btn btn-outline btn-primary mt-4">
          Lihat berita lain
        </button>
      </div>
    </>
  );
}
