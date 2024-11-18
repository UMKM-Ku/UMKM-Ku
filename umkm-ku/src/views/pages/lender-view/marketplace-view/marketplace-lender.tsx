import CardMarketplace from "./card-marketplace";
import FilterCheckbox from "./filter-checkbox";

const MarketplaceLender = () => {
  return (
    <>
<<<<<<< HEAD:umkm-ku/src/views/pages/register-view/lender-view/marketplace-lender.tsx
      <div className="md:flex gap-28 mt-24">
=======
      <div className="md:flex gap-28 mt-16">
>>>>>>> 7d8b6e38532b5931f0d6ac534bcb31a563af9e8b:umkm-ku/src/views/pages/lender-view/marketplace-view/marketplace-lender.tsx
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
            <CardMarketplace
              name="Mulyono"
              description="Modal beli pakan"
              amount="RP. 4.500.000"
              tenor="50 Minggu"
              profitSharing="12%"
              crowdfundingProgress={70}
              daysLeft={2}
              imageSrc="https://images.unsplash.com/photo-1527580477540-6ef8bc65b8a3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            <CardMarketplace
              name="Mulyono"
              description="Modal beli pakan"
              amount="RP. 4.500.000"
              tenor="50 Minggu"
              profitSharing="12%"
              crowdfundingProgress={70}
              daysLeft={2}
              imageSrc="https://images.unsplash.com/photo-1527580477540-6ef8bc65b8a3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            <CardMarketplace
              name="Mulyono"
              description="Modal beli pakan"
              amount="RP. 4.500.000"
              tenor="50 Minggu"
              profitSharing="12%"
              crowdfundingProgress={70}
              daysLeft={2}
              imageSrc="https://images.unsplash.com/photo-1527580477540-6ef8bc65b8a3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            <CardMarketplace
              name="Mulyono"
              description="Modal beli pakan"
              amount="RP. 4.500.000"
              tenor="50 Minggu"
              profitSharing="12%"
              crowdfundingProgress={70}
              daysLeft={2}
              imageSrc="https://images.unsplash.com/photo-1527580477540-6ef8bc65b8a3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
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
