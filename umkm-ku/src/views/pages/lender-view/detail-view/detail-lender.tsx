import CardPenilaian from "./components/card-penilaian";
import CardUmkm from "./components/card-umkm";
import MainCard from "./components/main-card";

export default function DetailLender() {
  return (
    <>
      <div className="bg-gray-100 p-6">
        <div className="text-gray-500 mb-4 text-xl">
          <a href="#" className="hover:text-blue-500">
            Marketplace
          </a>{" "}
          &gt; <span>Mulyono</span>
        </div>

        {/* Main Card */}
        <MainCard />
        {/* Details Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {/* Tentang UMKM */}
          <CardUmkm />

          {/* Penilaian Lender */}
          <CardPenilaian />
        </div>
      </div>
    </>
  );
}
