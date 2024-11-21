import { redirect } from "next/navigation";
import InputForm from "../../public-view/input-form";
import TextAreaForm from "../../public-view/textarea-form";
import CarouselHome from "../carousel";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

export default function PendanaanTemplate() {
  const slide = [
    "https://i.imgur.com/JZjhhdW.png",
    "https://i.imgur.com/pyQxQCe.png",
  ];

  const ajukanPendanaan = async (FormData: FormData) => {
    "use server";

    const input = {
      title: FormData.get("title"),
      description: FormData.get("description"),
      totalFund: FormData.get("totalFund"),
      tenor: FormData.get("tenor"),
      returnRate: FormData.get("returnRate"),
      sectorId: FormData.get("sectorId"),
      image: FormData.get("image"),
    };

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API_URL}/borrower/create`,
      {
        method: "POST",
        body: JSON.stringify(input),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${cookies().get("access_token")?.value}`,
        },
      }
    );

    if (response) {
      revalidatePath("/borrower/list-pendanaan/ajukan-pendanaan");
      redirect("/borrower/list-pendanaan/ajukan-pendanaan");
    }
  };

  return (
    <>
      <section className="w-[80%] h-[29%] mx-auto mt-32 flex gap-3 ">
        <div className=" w-[100%] h-fit rounded-lg shadow-md group">
          <CarouselHome slide={slide} />
        </div>
      </section>
      <div className="w-[80%] md:mx-auto mt-10 mb-10 ">
        <div className="text-gray-500 mb-4 text-xl">
          <a href="#" className="hover:text-blue-500">
            List Pendanaan
          </a>{" "}
          &gt; <span>Ajukan Pendanaan</span>
        </div>
      </div>
      <div className="md:w-6/12 md:mx-auto mt-16 mb-10 min-h-screen mx-9">
        <div className="text-center">
          <h1 className="font-bold text-2xl">Formulir Ajukan Pendanaan</h1>
          <p className="text-gray-400 pt-2">
            Silahkan isi data dibawah ini jika Anda ingin mengajukan pendanaan
          </p>
        </div>
        <form className="my-10" action={ajukanPendanaan}>
          <InputForm label="Nama Pendanaan *" name="title" type="text" />
          <TextAreaForm
            label="Deskripsi Penggunaan Dana *"
            name="description"
          />
          <InputForm
            label="Modal yang diperlukan *"
            name="totalFund"
            type="text"
          />
          <InputForm label="Tenor *" name="tenor" type="number" />
          <InputForm label="Bagi Hasil *" name="returnRate" type="number" />
          <div className="relative w-full">
            <label className="font-bold">Sektor Usaha*</label>
            <select
              name="sectorId"
              className="block appearance-none w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500"
            >
              <option value="">Pilih Sektor Usaha</option>
              <option value="1">Perdagangan</option>
              <option value="2">Pertanian</option>
              <option value="3">Peternakan</option>
              <option value="4">Tekstil</option>
              <option value="5">Farmasi</option>
              <option value="6">Industri</option>
              <option value="7">Food and Beverage</option>
            </select>
          </div>
          <InputForm label="Foto Pendanaan *" name="image" type="file" />
          <div className="flex justify-center">
            <button
              type="submit"
              className="text-center mt-6 bg-accent-700 rounded-lg p-2 md:px-52 px-24 text-white font-semibold hover:bg-accent-800 transition-colors duration-300 ease-out"
            >
              SIMPAN DATA
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
