import BorrowerCardNews from "../borrower-view/borrower-card-news";
import LenderFaq from "./lender-faq";
import CarouselHome from "../borrower-view/carousel";
import { GiWallet } from "react-icons/gi";
import { FaMoneyBills } from "react-icons/fa6";
import { GiProfit } from "react-icons/gi";
import { AiFillFund } from "react-icons/ai";

export default function LenderHome() {
  const slide = [
    "https://i.imgur.com/pyQxQCe.png",
    "https://i.imgur.com/JZjhhdW.png",
  ];
  return (
    <>
      {/* Header Banner */}
      <section className="w-[80%] h-[29%] mx-auto mt-28 flex gap-3 ">
        <div className=" w-[100%] h-fit rounded-lg shadow-md group mt-5">
          <CarouselHome slide={slide} />
        </div>
      </section>

      {/* Asetku */}
      <section className="w-full md:w-[80%] mx-auto mt-10">
        <div className="flex flex-col md:flex-row gap-5 justify-between">
          {/* Saldo */}
          <div className="p-8 gap-5 border-2 w-full md:w-[30%] rounded-md flex items-center md:flex-col md:items-start md:justify-center">
            <div className="flex gap-5 items-center md:flex-row md:items-center md:justify-center">
              <div className="p-4 bg-accent-600 rounded-lg">
                <GiWallet className="text-white text-5xl" />
              </div>
              <div className="md:flex md:flex-col md:items-start md:justify-center">
                <h4 className="text-lg font-semibold text-gray-600">Saldoku</h4>
                <h4 className="text-accent-700 font-semibold text-lg">Rp. 0</h4>
              </div>
            </div>
            <button
              type="button"
              className="mt-5 border-2 w-full py-2 rounded-md border-accent-600 text-accent-700 hover:bg-accent-700 hover:text-white transition-colors duration-300 ease-in-out font-semibold"
            >
              Top Up Dana
            </button>
          </div>

          {/* Asetku */}
          <div className="p-8 gap-5 border-2 w-full md:w-[70%] rounded-md items-center">
            <h6 className="text-lg font-semibold border-b-2 pb-2 text-gray-600">
              Asetku
            </h6>
            <div className="my-10 text-lg flex flex-col md:flex-row justify-between">
              {/* Dana yang bisa ditarik */}
              <div className="text-gray-600 items-center flex gap-3 mb-5 md:mb-0">
                <FaMoneyBills className="text-6xl" />
                <div>
                  <h6>Dana yang bisa ditarik</h6>
                  <h6>Rp.0</h6>
                </div>
              </div>
              {/* Keuntungan */}
              <div className="text-gray-600 items-center flex gap-3 mb-5 md:mb-0">
                <GiProfit className="text-6xl" />
                <div>
                  <h6>Keuntungan</h6>
                  <h6>Rp.0</h6>
                </div>
              </div>
              {/* Pendanaan UMKM */}
              <div className="text-gray-600 items-center flex gap-3">
                <AiFillFund className="text-6xl" />
                <div>
                  <h6>Pendanaan UMKM</h6>
                  <h6>0</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Berita Terkini Section */}
      <h2 className="text-center text-2xl font-bold my-8 text-gray-600">
        BERITA TERKINI
      </h2>
      <BorrowerCardNews />
      <div className="w-full flex flex-col items-center justify-center my-10">
        <LenderFaq />
      </div>
    </>
  );
}
