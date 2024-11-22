"use client";

import { CardProps } from "../types";
import Swal from "sweetalert2";
import { createReview } from "@/services/api";
import { useState } from "react";
import { redirect } from "next/navigation";
export default function CardPenilaian({ data }: CardProps) {
  const [rating, setRating] = useState(1);
  const [comment, setComment] = useState("");
  const [loading, setLoading] = useState(false);
  const lenderId = 2;
  const borrowerId = 9;

  const handleReview = async () => {
    try {
      setLoading(true);

      await createReview(rating, comment, lenderId, borrowerId);

      await Swal.fire({
        title: "Success!",
        text: "Review created successfully",
        icon: "success",
        confirmButtonText: "OK",
        confirmButtonColor: "#4F46E5",
      });
      window.location.reload();
    } catch (err) {
      console.error("Funding error:", err);
      Swal.fire({
        title: "Error!",
        text: err instanceof Error ? err.message : "Failed to process review",
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
      <h2 className="text-2xl md:text-3xl font-semibold mb-4">
        Penilaian Lender
      </h2>
      <div className="space-y-3 md:space-y-4">
        <div>
          <p className="font-bold text-gray-800 text-lg md:text-xl">Martono</p>
          <p className="text-gray-600 text-base md:text-xl">
            Bapak Mulyono selalu tepat waktu saat pembayaran, sukses terus pak
            Mulyono
          </p>
          <div className="text-yellow-400 text-lg md:text-xl">★★★★★</div>
        </div>
        <div>
          <p className="font-bold text-gray-800 text-lg md:text-xl">Martino</p>
          <p className="text-gray-600 text-base md:text-xl">
            Gak pernah telat kalo angsuran mantap pak
          </p>
          <div className="text-yellow-400 text-lg md:text-xl">★★★★☆</div>
        </div>
      </div>

      <div className="mt-4">
        <h2 className="text-base md:text-lg font-semibold mb-4">
          Komentar Lainnya
        </h2>
        <div className="space-y-4">
          <form
            className="bg-white shadow-lg rounded-lg p-6"
            onSubmit={handleReview}
          >
            <div>
              <p className="font-bold text-gray-800 text-base md:text-lg mb-2">
                Komentar
              </p>
              <div className="flex gap-7 items-center">
                <p className="text-nowrap text-lg mb-2.5">Review Star ⭐ :</p>
                <select
                  name="rating"
                  className="w-full p-2 border border-gray-200 rounded-md text-sm md:text-base mb-2"
                  aria-placeholder="Rating"
                  onChange={(e) => setRating(Number(e.target.value))}
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </div>
              <textarea
                name="comment"
                className="w-full p-2 border border-gray-200 rounded-md text-sm md:text-base mb-2"
                placeholder="Tulis komentar disini"
                rows={4}
                onChange={(e) => setComment(e.target.value)}
              ></textarea>

              <button
                type="submit"
                className="w-full md:w-auto bg-accent-700 rounded-lg py-2 px-4 text-white font-medium text-sm md:text-base hover:bg-accent-800 transition-colors duration-300 ease-out"
              >
                {loading ? "Processing..." : "Kirim Komentar"}
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="mt-6">
        <nav className="flex justify-center" aria-label="Page navigation">
          <ul className="flex items-center gap-1 text-sm md:text-base">
            <li>
              <a
                className="px-2 md:px-3 py-1 md:py-1.5 rounded hover:bg-gray-100 transition-colors duration-200"
                href="#"
                aria-label="Previous"
              >
                <span aria-hidden="true">&laquo;</span>
              </a>
            </li>
            <li>
              <a
                className="px-2 md:px-3 py-1 md:py-1.5 rounded hover:bg-gray-100 transition-colors duration-200"
                href="#"
              >
                1
              </a>
            </li>
            <li>
              <a
                className="px-2 md:px-3 py-1 md:py-1.5 rounded hover:bg-gray-100 transition-colors duration-200"
                href="#"
              >
                2
              </a>
            </li>
            <li>
              <a
                className="px-2 md:px-3 py-1 md:py-1.5 rounded hover:bg-gray-100 transition-colors duration-200"
                href="#"
              >
                3
              </a>
            </li>
            <li>
              <a
                className="px-2 md:px-3 py-1 md:py-1.5 rounded hover:bg-gray-100 transition-colors duration-200"
                href="#"
                aria-label="Next"
              >
                <span aria-hidden="true">&raquo;</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
