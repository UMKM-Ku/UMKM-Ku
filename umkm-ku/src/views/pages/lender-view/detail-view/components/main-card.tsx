"use client";

import { createFunding } from "@/services/api";
import { CardProps } from "../types";
import formatNumber from "../utils";
import { useState } from "react";
import Swal from "sweetalert2";

export default function MainCard({ data }: CardProps) {
  const [amount, setAmount] = useState(500000);
  const [loading, setLoading] = useState(false);

  const handleFunding = async () => {
    try {
      setLoading(true);

      await createFunding(data.id, amount);

      await Swal.fire({
        title: "Success!",
        text: "Funding transaction created successfully",
        icon: "success",
        confirmButtonText: "OK",
        confirmButtonColor: "#4F46E5",
      });

      window.location.reload();
    } catch (err) {
      console.error("Funding error:", err);
      Swal.fire({
        title: "Error!",
        text: err instanceof Error ? err.message : "Failed to process funding",
        icon: "error",
        confirmButtonText: "OK",
        confirmButtonColor: "#4F46E5",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white p-4 md:p-6 rounded-lg shadow-md">
      <div className="flex flex-col md:flex-row md:gap-6">
        <img
          src={data.image}
          alt="Cows"
          className="rounded-lg w-full md:w-96 h-64 md:h-96 object-cover mb-4 md:mb-0"
        />

        <div className="flex-1">
          <p className="text-gray-700 text-xl md:text-2xl font-bold">
            {data.title}
          </p>
          <div className="text-gray-500 text-lg md:text-xl mt-1">
            {data.sector.sector}
          </div>

          <div className="flex items-center gap-2">
            <span className="text-green-600 text-lg md:text-xl">4.0</span>
            <div className="text-yellow-400 text-lg md:text-xl">★★★★☆</div>
          </div>

          <div className="flex flex-col md:flex-row md:justify-between md:items-center">
            <div className="mt-4 w-full md:w-2/6 text-base md:text-xl">
              <div className="flex justify-between">
                <p className="text-gray-600">Modal</p>
                <p className="font-bold text-gray-800">
                  {formatNumber(data.totalFund)}
                </p>
              </div>
              <div className="flex justify-between">
                <p className="text-gray-600">Tenor</p>
                <p className="font-bold text-gray-800">{data.tenor} Minggu</p>
              </div>
              <div className="flex justify-between">
                <p className="text-gray-600">Bagi Hasil</p>
                <p className="font-bold text-gray-800">{data.returnRate}%</p>
              </div>
              <div className="flex justify-between">
                <p className="text-gray-600">Dana Terkumpul</p>
                <p className="font-bold text-gray-800">
                  {formatNumber(data.fundsRaised)}
                </p>
              </div>
            </div>

            <div className="mt-4 w-full md:w-2/6">
              <div className="flex justify-between">
                <p className="text-gray-600 text-base md:text-xl">
                  Crowdfunding
                </p>
                <span>
                  {((data.fundsRaised / data.totalFund) * 100).toFixed(1)}%
                </span>
              </div>
              <div className="w-full bg-accent-300 rounded-full h-2.5">
                <div
                  className="bg-accent-700 h-2.5 rounded-full"
                  style={{
                    width: `${(data.fundsRaised / data.totalFund) * 100}%`,
                  }}
                />
              </div>
              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700">
                  Jumlah Dana (min. 500.000)
                </label>
                <input
                  type="number"
                  min={500000}
                  max={data.totalFund - data.fundsRaised}
                  value={amount}
                  onChange={(e) => setAmount(Number(e.target.value))}
                  className="mt-1 w-full p-2 border rounded text-center"
                  placeholder="Masukkan jumlah dana"
                />
                <p className="mt-1 text-sm text-gray-500">
                  Sisa dana yang dibutuhkan:{" "}
                  {formatNumber(data.totalFund - data.fundsRaised)}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-4 flex justify-end">
            <button
              onClick={handleFunding}
              disabled={
                loading ||
                data.isFullyFunded ||
                amount < 500000 ||
                amount > data.totalFund - data.fundsRaised
              }
              className="w-full md:w-auto bg-accent-700 text-white py-2 px-4 rounded-lg hover:bg-accent-900 transition-colors duration-300 ease-out disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              {loading ? "Processing..." : "Danai Sekarang"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
