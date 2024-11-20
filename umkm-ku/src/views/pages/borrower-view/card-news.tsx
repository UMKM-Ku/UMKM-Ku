"use client";
import Link from "next/link";
import { useState } from "react";

export async function getServerSideProps({ limit }: { limit: number }) {
  try {
    const response = await fetch(
      "https://api-berita-indonesia.vercel.app/cnn/ekonomi/"
    );

    if (!response.ok) {
      throw new Error("Failed to fetch news");
    }

    const newsApi = await response.json();
    let news = newsApi.data.posts.slice(0, limit);

    return news;
  } catch (error) {
    console.error("Error fetching news:", error);
  }
}
interface News {
  title: string;
  link: string;
  thumbnail: string;
  description: string;
  pubDate: string;
}
export default async function BorrowerCardNews() {
  const [limit, setLimit] = useState<number>(5);
  const news = await getServerSideProps({ limit });

  return (
    <div className="flex flex-col items-center gap-4">
      {/* News Cards */}

      {news?.length > 0 ? (
        news.map((item: News, index: number) => (
          <Link
            href={item.link}
            key={index}
            className="flex bg-white rounded-lg overflow-hidden p-4 w-[80%] border-2 hover:shadow-xl duration-300 ease-out transition-shadow"
          >
            <div className="flex w-full">
              <img
                src={item.thumbnail || "https://via.placeholder.com/100"}
                alt={item.title}
                className="w-24 h-26 object-cover rounded-lg "
              />
              <div className="ml-4 w-full">
                <h3 className="text-xl font-semibold">{item.title}</h3>

                <p className="text-gray-600 text-lg mt-2 min-h-10 w-full text-justify">
                  {item.description || "Deskripsi tidak tersedia..."}
                </p>

                <p className="text-md text-gray-400 flex justify-end">
                  {new Date(item.pubDate).toLocaleDateString("id-ID", {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
              </div>
            </div>
          </Link>
        ))
      ) : (
        <p>No news available</p>
      )}

      {/* Button for More News */}
      {/* <button
        onClick={() => setLimit(limit + 5)}
        className="mt-4 bg-accent-700 rounded-lg p-2 px-12 text-white font-semibold hover:bg-accent-800 transition-colors duration-300 ease-out"
      >
        Lihat berita lain
      </button> */}
    </div>
  );
}
