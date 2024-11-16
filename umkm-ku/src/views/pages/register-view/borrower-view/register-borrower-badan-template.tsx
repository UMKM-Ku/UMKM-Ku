import RegisterBorrowerBadan from "../register-information/register-borrower-badan";

export default function RegisterBorrowerBadanTemplate() {
  return (
    <>
      <section className="bg-white h-lvh">
        <div className="h-lvh flex flex-col my-32 items-center">
          <RegisterBorrowerBadan />

          <div className="flex gap-7 items-center border-2 py-7 px-6 rounded-md shadow-md mt-7 w-3/6 cursor-pointer hover:border-accent-700 hover:border-2 duration-300 ease-out transition-colors">
            <img
              src="https://i.imgur.com/KfDjX98.png"
              alt="icon"
              className="size-10"
            />
            <div>
              <h4 className="text-gray-600 font-semibold">
                Badan Usaha Milik Institusi
              </h4>
              <h6 className="text-xs text-gray-400">
                Pilihan ini berarti Anda mewakili badan hukum / perusahaan yang
                terdaftar dalam hukum di Negara Indonesia.
              </h6>
            </div>
          </div>

          <div className="flex gap-3 items-center border-2 p-4 rounded-md shadow-md mt-7 w-3/6 cursor-pointer hover:border-accent-700 hover:border-2 duration-300 ease-out transition-colors ">
            <img
              src="https://i.imgur.com/2xbbHeS.png"
              alt="icon"
              className="size-16"
            />
            <div>
              <h4 className="text-gray-600 font-semibold">
                Badan Usaha Milik Individu
              </h4>
              <h6 className="text-xs text-gray-400">
                Pilihan ini berarti Anda mewakili diri sendiri dan bisnis Anda
                sebagai entitas perorangan.
              </h6>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
