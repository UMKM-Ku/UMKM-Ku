import Link from "next/link";
import CarouselHome from "../carousel";
import { BsArrowLeft } from "react-icons/bs";
import { IoIosArrowForward } from "react-icons/io";
import { RiDeleteBin2Fill } from "react-icons/ri";
import { GiCash } from "react-icons/gi";
import { RxLapTimer } from "react-icons/rx";
import { IoWallet } from "react-icons/io5";
import { IoExtensionPuzzle } from "react-icons/io5";
import { CgTimelapse } from "react-icons/cg";
import { BsFillCreditCard2FrontFill } from "react-icons/bs";
import { TbCreditCardRefund } from "react-icons/tb";
import { HiMiniReceiptPercent } from "react-icons/hi2";

export default function DetailPendanaanView() {
  const slide = [
    "https://i.imgur.com/JZjhhdW.png",
    "https://i.imgur.com/pyQxQCe.png",
  ];
  return (
    <>
      <section className="h-lvh mb-24">
        <section className="w-[80%] h-[29%] mx-auto mt-32 flex gap-3 ">
          <div className=" w-[100%] h-fit rounded-lg shadow-md group">
            <CarouselHome slide={slide} />
          </div>
        </section>

        <section className="w-[80%] mx-auto md:mt-32  text-gray-400 flex justify-between">
          <div className="flex gap-1 items-center">
            <Link href={"/borrower/list-pendanaan"}>
              <BsArrowLeft className="text-2xl mt-0.5" />
            </Link>
            <Link href={"/borrower/list-pendanaan"}>
              <h4 className="font-semibold text-lg pl-1">List Pendanaan</h4>
            </Link>
            <IoIosArrowForward className="text-xl mt-0.5" />
            <h4 className="font-semibold text-lg text-gray-600 ">
              Pendanaan Pakan Sapi
            </h4>
          </div>
        </section>

        <section className="w-[80%] h-full mx-auto mt-5">
          <div className="w-full border-2 shadow-lg p-5 rounded-md ">
            <div className="flex gap-7">
              <img
                src="https://images.unsplash.com/photo-1527580477540-6ef8bc65b8a3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="foto pendanaan"
                className="h-80 max-w-96 object-cover rounded-md"
              />
              <div className="w-full">
                <div className="flex justify-between">
                  <h1 className="text-3xl font-bold">Pendanaan Pakan Sapi</h1>
                  <div className="bg-red-500 text-white rounded-lg px-4 py-2 flex items-center gap-2 font-semibold hover:bg-red-800 duration-300 ease-out transition-colors cursor-pointer">
                    <RiDeleteBin2Fill className="text-xl" />
                    <button>Hapus</button>
                  </div>
                </div>

                <div className="flex gap-2 items-center text-gray-400">
                  <IoExtensionPuzzle className=" text-lg" />
                  <h4 className="text-sm font-semibold">
                    Sektor : Perternakan
                  </h4>
                </div>

                <div className="flex gap-4 items-center">
                  <div className="flex gap-1 items-center border-2 text-accent-700 py-1 font-semibold border-accent-700 rounded-md px-2 w-fit mt-3">
                    <GiCash className="text-lg" />
                    <h4 className="font-bold text-sm">Modal : Rp10.000.000</h4>
                  </div>
                  <div className="flex gap-1 items-center border-2 text-accent-700 py-1 font-semibold border-accent-700 rounded-md px-2 w-fit mt-3">
                    <BsFillCreditCard2FrontFill className="text-lg" />
                    <h4 className="font-bold text-sm">
                      Total Pembayaran : Rp2.000.000
                    </h4>
                  </div>

                  <div className="flex gap-1 items-center border-2 text-accent-700 py-1 font-semibold border-accent-700 rounded-md px-2 w-fit mt-3">
                    <CgTimelapse className="text-lg" />
                    <h4 className="font-bold text-sm">
                      Jatuh Tempo : 15 Juli 2024
                    </h4>
                  </div>
                </div>

                <div className="flex gap-4 items-center">
                  <div className="flex gap-1 items-center border-2 text-accent-700 py-1 font-semibold border-accent-700 rounded-md px-2 w-fit mt-2">
                    <RxLapTimer className="text-lg" />
                    <h4 className="font-bold text-sm">Tenor : 50 Minggu</h4>
                  </div>
                  <div className="flex gap-1 items-center border-2 text-accent-700 py-1 font-semibold border-accent-700 rounded-md px-2 w-fit mt-2">
                    <HiMiniReceiptPercent className="text-lg" />
                    <h4 className="font-bold text-sm">Imba Hasil : 15%</h4>
                  </div>
                </div>
                <h4 className="py-3 text-gray-500 text-justify min-h-36 max-h-36">
                  Saya membutuhkan pendanaan untuk memastikan kelangsungan usaha
                  peternakan saya, mengingat biaya pakan yang semakin tinggi dan
                  fluktuatif, serta kebutuhan pakan yang terus meningkat seiring
                  dengan pertumbuhan populasi sapi yang mereka pelihara;
                  pendanaan ini akan membantu membeli pakan berkualitas yang
                  dapat mendukung kesehatan sapi, meningkatkan produksi susu
                  atau daging, dan pada akhirnya memastikan keberlanjutan usaha
                  peternakan tersebut dalam jangka panjang.
                </h4>
                <div className="flex justify-between items-center">
                  <h4 className="font-semibold text-gray-400 text-sm ">
                    Mulai Pendanaan : 15 Agustuts 2024
                  </h4>
                  <div className="flex gap-2 items-center border-2 bg-accent-700 text-white py-1 px-2 rounded-md w-fit">
                    <TbCreditCardRefund className="text-xl" />
                    <h4 className="font-semibold">
                      Dana Terkumpul : Rp8.000.000
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}
