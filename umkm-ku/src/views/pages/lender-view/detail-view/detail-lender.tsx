import { cookies } from "next/headers";
import { notFound } from "next/navigation";
import Link from "next/link";
import MainCard from "./components/main-card";
import CardUmkm from "./components/card-umkm";
import CardPenilaian from "./components/card-penilaian";
import { FundingRequest, APIResponse } from "./types";

export default async function DetailLender({
  params,
}: {
  params: { id: number };
}) {
  const fetchDetailLender = async (): Promise<FundingRequest> => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_API_URL}/lender/fundings/${params.id}`,
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

      const data: APIResponse = await response.json();
      // console.log(data, "Ini API response");
      return data.fundingRequest;
    } catch (error) {
      console.error("Error fetching funding data:", error);
      notFound();
    }
  };

  const data = await fetchDetailLender();

  return (
    <div className="bg-gray-100 p-4 md:p-6 mt-20">
      <div className="text-gray-500 mb-2 md:mb-4 text-lg md:text-xl">
        <Link href="/lender/marketplace" className="hover:text-blue-500">
          Marketplace
        </Link>
        {" > "}
        <span>{data.title}</span>
      </div>

      <MainCard data={data} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mt-4 md:mt-6">
        <CardUmkm data={data} />
        <CardPenilaian data={data} />
      </div>
    </div>
  );
}
