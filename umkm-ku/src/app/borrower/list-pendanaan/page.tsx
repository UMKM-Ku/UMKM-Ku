import { FundingBorrower } from "@/views/_types";
import BorrowerCard from "@/views/pages/borrower-view/borrower-card";
import CarouselHome from "@/views/pages/borrower-view/carousel";
import { cookies } from "next/headers";
import Link from "next/link";
import { FaNotesMedical } from "react-icons/fa6";

export default async function ListPendanaan() {
  const slide = [
    "https://i.imgur.com/JZjhhdW.png",
    "https://i.imgur.com/pyQxQCe.png",
  ];

  const fetchDataFundingBorrower = async () => {
    try {
      const response = await fetch(
        `https://bristle-fate-maraca.glitch.me/borrower/funding-requests`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${cookies().get("access_token")?.value}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const fundingData = await response.json();

      const fundingBorrower = fundingData?.fundingRequest;
      return fundingBorrower;
    } catch (error) {
      console.error("Error fetching funding data:", error);
    }
  };

  const fundingBorrower = await fetchDataFundingBorrower();

  return (
    <>
      <section className="h-lvh mb-32">
        <section className="w-[80%] h-[29%] mx-auto mt-32 flex gap-3 ">
          <div className=" w-[100%] h-fit rounded-lg shadow-md group">
            <CarouselHome slide={slide} />
          </div>
        </section>

        <div className="w-[80%] mx-auto md:mt-32 mb-5 flex justify-between">
          <h2 className="text-2xl font-bold text-gray-600">PENDANAAN SAYA</h2>

          <div className="bg-accent-700 text-white rounded-lg px-4 py-2 flex items-center gap-2 font-semibold hover:bg-accent-800 duration-300 ease-out transition-colors">
            <FaNotesMedical className="text-xl" />
            <Link href={"/borrower/list-pendanaan/ajukan-pendanaan"}>
              <button>Ajukan Pendanaan</button>
            </Link>
          </div>
        </div>
        <section>
          {fundingBorrower &&
            fundingBorrower.map((el: FundingBorrower, index: number) => {
              return <BorrowerCard key={index} funding={el} />;
            })}
        </section>
      </section>
    </>
  );
}
