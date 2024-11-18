import BorrowerCard from "@/views/pages/borrower-view/borrower-card";
import CarouselHome from "@/views/pages/borrower-view/carousel";
import { FaNotesMedical } from "react-icons/fa6";

export default function ListPendanaan() {
  const slide = [
    "https://i.imgur.com/JZjhhdW.png",
    "https://i.imgur.com/pyQxQCe.png",
  ];
  return (
    <>
      <section className="h-lvh">
        <section className="w-[80%] h-[29%] mx-auto mt-32 flex gap-3 ">
          <div className=" w-[100%] h-fit rounded-lg shadow-md group">
            <CarouselHome slide={slide} />
          </div>
        </section>

        <div className="w-[80%] mx-auto md:mt-32 mb-5 flex justify-between">
          <h2 className="text-2xl font-bold text-gray-600">PENDANAAN SAYA</h2>

          <div className="bg-accent-700 text-white rounded-lg px-4 py-2 flex items-center gap-2 font-semibold hover:bg-accent-800 duration-300 ease-out transition-colors">
            <FaNotesMedical className="text-xl" />
            <button>Ajukan Pendanaan</button>
          </div>
        </div>
        <section>
          <BorrowerCard />
        </section>
      </section>
    </>
  );
}
