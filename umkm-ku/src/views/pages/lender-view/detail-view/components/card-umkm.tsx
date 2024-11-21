import { CardProps } from "../types";
import formatNumber from "../utils";

export default function CardUmkm({ data }: CardProps) {
  return (
    <>
      <div className="bg-white p-4 md:p-6 rounded-lg shadow-md">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          Tentang UMKM
        </h2>
        <div className="space-y-2 text-base md:text-xl flex flex-col gap-3 md:gap-5">
          <div className="flex justify-between border-b-2 pb-3 md:pb-4">
            <p className="text-gray-600">Tenor Pendanaan</p>
            <p className="font-bold text-gray-800">{data.tenor} Minggu</p>
          </div>
          <div className="flex justify-between border-b-2 pb-3 md:pb-4">
            <p className="text-gray-600">Bagi Hasil</p>
            <p className="font-bold text-gray-800">{data.returnRate}%</p>
          </div>
          <div className="flex justify-between border-b-2 pb-3 md:pb-4">
            <p className="text-gray-600">Perkiraan Untung</p>
            <p className="font-bold text-gray-800">
              {formatNumber((data.returnRate / 100) * data.totalFund)}
            </p>
          </div>
          {/* <div className="flex justify-between border-b-2 pb-4">
            <p className="text-gray-600">Angsuran Mingguan</p>
            <p className="font-bold text-gray-800">
              {formatNumber(data.returnRate)}
            </p>
          </div> */}
          <div className="flex justify-between border-b-2 pb-3 md:pb-4">
            <p className="text-gray-600">Pendanaan ke</p>
            <p className="font-bold text-gray-800">2 (Dua)</p>
          </div>
          <div className="flex justify-between border-b-2 pb-3 md:pb-4">
            <p className="text-gray-600">Pekerjaan</p>
            <p className="font-bold text-gray-800">Peternak sapi</p>
          </div>
          <div className="flex justify-between border-b-2 pb-3 md:pb-4">
            <p className="text-gray-600">Penghasilan perbulan</p>
            <p className="font-bold text-gray-800">
              {formatNumber((data.totalFund / data.tenor) * 4 * 3)}
            </p>
          </div>
          <div className="flex justify-between">
            <p className="text-gray-600">Sektor usaha</p>
            <p className="font-bold text-gray-800">{data.sector.sector}</p>
          </div>
        </div>
      </div>
    </>
  );
}
