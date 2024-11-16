import BorrowerCard from "./borrower-card";
import BorrowerCardNews from "./borrower-card-news";
import BorrowerFaq from "./borrower-faq";
import CarouselHome from "./carousel";

export default function BorrowerPage() {
  const slide = [
    "https://i.imgur.com/JZjhhdW.png",
    "https://i.imgur.com/pyQxQCe.png",
  ];
  return (
    <>
      {/* Header Banner */}
      <section className="w-[80%] h-[29%] mx-auto mt-5 flex gap-3 ">
        <div className=" w-[100%] h-fit rounded-lg shadow-md group">
          <CarouselHome slide={slide} />
        </div>
      </section>

      {/* Status Angsuran Section */}
      <h2 className="text-center text-2xl font-bold my-8">STATUS ANGSURAN</h2>
      <BorrowerCard />
      {/* Berita Terkini Section */}
      <h2 className="text-center text-2xl font-bold my-8">Berita Terkini</h2>
      <BorrowerCardNews />
      <div className="w-full flex flex-col items-center justify-center my-10">
        <BorrowerFaq />
      </div>
    </>
  );
}
