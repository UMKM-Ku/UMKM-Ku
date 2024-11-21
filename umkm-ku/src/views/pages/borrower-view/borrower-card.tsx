import { Funding } from "@/views/_types";
import moment from "moment";

export default function BorrowerCard({ funding }: { funding: Funding }) {
  function formatRupiah(angka: number) {
    // Mengubah angka menjadi string dan memformatnya dengan pemisah ribuan titik
    return angka?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }

  const randomNumber = Math.floor(Math.random() * 10);

  return (
    <>
      <div className="flex flex-wrap justify-center gap-8 mt-8 w-[90%] mx-auto">
        {/* Card 1 */}
        <div className="flex flex-col md:flex-row gap-4 bg-white shadow-lg rounded-lg overflow-hidden p-4 md:w-4/6 border-2 items-center">
          <img
            src={funding?.image}
            alt="Borrower Image"
            className="w-48 md:max-w-36 md:max-h-32 md:min-w-36 md:min-h-36 object-cover rounded-lg"
          />
          <div className="flex flex-col justify-between">
            <h3 className="text-xl font-semibold">{funding?.title}</h3>
            <p className="text-gray-600 text-sm mt-2 line-clamp-3 text-justify min-h-20 ">
              {funding?.description}
            </p>
            <div className="flex justify-between items-center mt-2">
              <a href="#" className="text-blue-500 font-semibold inline-block">
                Lihat detail Proyek →
              </a>
              <h6 className="text-xs text-gray-400">
                {moment(funding?.createdAt).format("LL")}
              </h6>
            </div>
          </div>
        </div>
        {/* Info for Card 1 */}
        <div className="flex flex-col gap-2 bg-white shadow-lg rounded-lg w-full md:w-1/4 lg:w-1/5 p-4 border-2 text-gray-600">
          <div className="flex justify-between">
            <span className="font-bold">Tenor</span>
            <span>{funding.tenor} Minggu</span>
          </div>
          <div className="flex justify-between">
            <span className="font-bold">Modal</span>
            <span>Rp. {formatRupiah(funding?.totalFund)}</span>
          </div>

          <div className="flex justify-between">
            <span className="font-bold">Pendanaan</span>
            <span>Rp. {formatRupiah(funding?.fundsRaised)}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-bold">Batas Waktu</span>
            <span>{moment(funding?.fundingExpired).format("L")}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-bold">Jumlah Angsuran</span>
            <span>{randomNumber} Kali</span>
          </div>
        </div>
      </div>
    </>
  );
}
