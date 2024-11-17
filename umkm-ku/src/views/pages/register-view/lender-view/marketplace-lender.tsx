import FilterCheckbox from "./filter-checkbox";

const MarketplaceLender = () => {
  return (
    <>
      <aside
        id="sidebar-multi-level-sidebar"
        className="overflow-auto w-64 h-screen transition-transform  sm:translate-x-0 m-8"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 ">
          <h1 className="text-2xl mb-3">Filters</h1>
          <FilterCheckbox
            title="Skor Kredit"
            labelOne="A"
            labelTwo="B"
            labelThree="C"
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
          />
          <FilterCheckbox
            title="Bagi Hasil"
            labelOne="5% - 10%"
            labelTwo="15% - 20%"
            labelThree="25% - 30%"
          />
        </div>
      </aside>
    </>
  );
};

export default MarketplaceLender;
