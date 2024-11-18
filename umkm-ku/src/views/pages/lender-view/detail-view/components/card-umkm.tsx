export default function CardUmkm() {
  return (
    <>
      <div className="bg-white p-6 rounded-lg shadow-md ">
        <h2 className="text-3xl font-semibold mb-4">Tentang UMKM</h2>
        <div className="space-y-2 text-xl flex flex-col gap-5">
          <div className="flex justify-between border-b-2 pb-4">
            <p className="text-gray-600">Tenor Pendanaan</p>
            <p className="font-bold text-gray-800">50 Minggu</p>
          </div>
          <div className="flex justify-between border-b-2 pb-4">
            <p className="text-gray-600">Bagi Hasil</p>
            <p className="font-bold text-gray-800">Rp 575.000</p>
          </div>
          <div className="flex justify-between border-b-2 pb-4">
            <p className="text-gray-600">Angsuran Mingguan</p>
            <p className="font-bold text-gray-800">Rp 115.000</p>
          </div>
          <div className="flex justify-between border-b-2 pb-4">
            <p className="text-gray-600">Pendanaan ke</p>
            <p className="font-bold text-gray-800">2 (Dua)</p>
          </div>
          <div className="flex justify-between border-b-2 pb-4">
            <p className="text-gray-600">Pekerjaan</p>
            <p className="font-bold text-gray-800">Peternak sapi</p>
          </div>
          <div className="flex justify-between border-b-2 pb-4">
            <p className="text-gray-600">Penghasilan perbulan</p>
            <p className="font-bold text-gray-800">Rp 4.500.000</p>
          </div>
          <div className="flex justify-between">
            <p className="text-gray-600">Sektor usaha</p>
            <p className="font-bold text-gray-800">Peternakan</p>
          </div>
        </div>
      </div>
    </>
  );
}
