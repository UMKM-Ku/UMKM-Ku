export default function CardPenilaian() {
  return (
    <>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold mb-4">Penilaian Lender</h2>
        <div className="space-y-4">
          <div>
            <p className="font-bold text-gray-800 text-xl">Martono</p>
            <p className="text-gray-600 text-xl">
              Bapak Mulyono selalu tepat waktu saat pembayaran, sukses terus pak
              Mulyono
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
    </>
  );
}
