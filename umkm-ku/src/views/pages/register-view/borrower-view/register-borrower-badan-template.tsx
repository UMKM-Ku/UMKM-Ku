import Link from "next/link";
import RegisterBorrowerBadan from "../register-information/register-borrower-badan";

export default function RegisterBorrowerBadanTemplate() {
  return (
    <>
      <section className="bg-white min-h-screen">
        <div className="min-h-screen flex flex-col items-center my-32 px-6">
          <RegisterBorrowerBadan />
          <Link
            href={"/register/borrower/information/badan-usaha/form-institusi"}
            className=" border-2 py-7 px-6 rounded-md shadow-md mt-7 w-full sm:w-3/4 md:w-2/3 lg:w-1/2 cursor-pointer hover:border-accent-700 hover:border-2 duration-300 ease-out transition-colors"
          >
            <div className="flex flex-col sm:flex-row gap-7 items-center">
              <img
                src="https://i.imgur.com/KfDjX98.png"
                alt="icon"
                className="w-12 h-12 sm:w-16 sm:h-16"
              />
              <div>
                <h4 className="text-gray-600 font-semibold">
                  Badan Usaha Milik Institusi
                </h4>
                <h6 className="text-xs text-gray-400">
                  Pilihan ini berarti Anda mewakili badan hukum / perusahaan
                  yang terdaftar dalam hukum di Negara Indonesia.
                </h6>
              </div>
            </div>
          </Link>
          <Link
            href={"/register/borrower/information/badan-usaha/form-individu"}
            className="border-2 p-4 rounded-md shadow-md mt-7 w-full sm:w-3/4 md:w-2/3 lg:w-1/2 cursor-pointer hover:border-accent-700 hover:border-2 duration-300 ease-out transition-colors"
          >
            <div className="flex flex-col sm:flex-row gap-3 items-center ">
              <img
                src="https://i.imgur.com/2xbbHeS.png"
                alt="icon"
                className="w-16 h-16 sm:w-20 sm:h-20"
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
          </Link>
        </div>
      </section>
    </>
  );
}
