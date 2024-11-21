import CardMarketplace from "./card-marketplace";
import FilterCheckbox from "./filter-checkbox";
import { cookies } from "next/headers";
import { Funding } from "@/views/_types";
import Link from "next/link";

const MarketplaceLender = async () => {
  const fetchDataFunding = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_API_URL}/lender/fundings`,
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

      const data = await response.json();
      const fund = data.fundingRequests || [];
      return fund;
    } catch (error) {
      console.error("Error fetching funding data:", error);
    }
  };

  const funding = await fetchDataFunding();

  return (
    <>
      <div className="md:flex gap-28 mt-16">
        <aside
          id="sidebar-multi-level-sidebar"
          className="overflow-auto w-64 md:min-h-screen transition-transform  sm:translate-x-0 m-8"
          aria-label="Sidebar"
        >
          <div className="h-full px-3 py-4 ">
            <h1 className="text-2xl mb-3">Filters</h1>
            <FilterCheckbox
              title="Skor Kredit"
              labelOne="A"
              labelTwo="B"
              labelThree="C"
              labelFour="D"
            />
            <FilterCheckbox
              title="Tenor"
              labelOne="10 Minggu"
              labelTwo="20 Minggu"
              labelThree="30 Minggu"
            />
            <FilterCheckbox
              title="Sektor"
              labelOne="Perdagangan"
              labelTwo="Pertanian"
              labelThree="Peternakan"
              labelFour="Tesktil"
              labelFive="Farmasi"
              labelSix="Food and Beverage"
            />
            <FilterCheckbox
              title="Bagi Hasil"
              labelOne="5% - 10%"
              labelTwo="15% - 20%"
              labelThree="25% - 30%"
            />
          </div>
        </aside>
        <div>
          <div className="grid md:grid-cols-2 gap-x-16 mt-16">
            {funding &&
              funding.map((el: Funding, index: number) => {
                return (
                  <Link href={`/lender/marketplace/${el.id}`}>
                    <CardMarketplace
                      key={index}
                      name={el.title}
                      description={el.sectorId}
                      amount={el.totalFund}
                      tenor={el.tenor}
                      profitSharing={el.returnRate}
                      crowdfundingProgress={70}
                      daysLeft={2}
                      imageSrc="https://images.unsplash.com/photo-1527580477540-6ef8bc65b8a3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    />
                  </Link>
                );
              })}
          </div>
          <div className="flex justify-end mb-5 me-7">
            <div className="join">
              <button className="join-item btn text-accent-700">«</button>
              <button className="join-item btn text-accent-700 ">Page 1</button>
              <button className="join-item btn text-accent-700">»</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MarketplaceLender;
