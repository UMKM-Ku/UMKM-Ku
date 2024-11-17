export default function BorrowerCard() {
  return (
    <>
      <div className="flex flex-wrap justify-center gap-8 px-6">
        {/* Card 1 */}
        <div className="flex flex-col md:flex-row gap-4 bg-white shadow-lg rounded-lg overflow-hidden w-[80%] p-4">
          <img
            src="https://via.placeholder.com/100"
            alt="Cow Image"
            className="w-24 h-24 object-cover rounded-lg"
          />
          <div className="flex-1">
            <h3 className="text-xl font-semibold">Pendanaan Pakan Sapi</h3>
            <p className="text-gray-600 text-sm mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut non
              augue nec ligula.
            </p>
            <a
              href="#"
              className="text-blue-500 font-semibold mt-4 inline-block"
            >
              Lihat detail Proyek →
            </a>
          </div>
        </div>
        {/* Info for Card 1 */}
        <div className="flex flex-col gap-2 bg-white shadow-lg rounded-lg w-full md:w-1/4 lg:w-1/5 p-4">
          <div className="flex justify-between">
            <span className="font-bold">Total Pinjaman</span>
            <span>Rp. 1.000.000</span>
          </div>
          <div className="flex justify-between">
            <span className="font-bold">Total Pembayaran</span>
            <span>Rp. 200.000</span>
          </div>
          <div className="flex justify-between">
            <span className="font-bold">Jatuh Tempo</span>
            <span>15 Juli 2022</span>
          </div>
          <div className="flex justify-between">
            <span className="font-bold">Jumlah Angsuran</span>
            <span>10x</span>
          </div>
        </div>
      </div>
    </>
  );
}
