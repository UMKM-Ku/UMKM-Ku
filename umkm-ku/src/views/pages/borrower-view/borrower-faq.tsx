export default function BorrowerFaq() {
  return (
    <>
      <div className="w-[80%]">
        <h1 className="text-3xl font-bold ">Pusat Bantuan</h1>
        <div className="collapse collapse-arrow rounded-none bg-base-200  ">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">Kamus</div>
          <div className="collapse-content">
            <p>hello</p>
          </div>
        </div>
        <div className="collapse collapse-arrow rounded-none bg-base-200">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">FAQ</div>
          <div className="collapse-content">
            <p>hello</p>
          </div>
        </div>
        <div className="collapse collapse-arrow rounded-none bg-base-200">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">Tentang kami</div>
          <div className="collapse-content">
            <p>hello</p>
          </div>
        </div>
      </div>
    </>
  );
}
