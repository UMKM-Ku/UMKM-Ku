import BorrowerCard from "./borrower-card";
import BorrowerCardNews from "./borrower-card-news";
import BorrowerFaq from "./borrower-faq";

export default function BorrowerPage() {
  return (
    <>
      {/* Header Banner */}
      <section className="bg-teal-600 text-white p-8 text-center">
        <h1 className="text-2xl font-semibold mb-2">
          Yuk, ajukan pendanaan di UMKM-Ku
        </h1>
        <p className="mb-4">Para pemberi dana sedang menunggu Anda.</p>
        <button className="btn btn-primary">Cari Pendanaan</button>
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
