import InputForm from "../../public-view/input-form";
import CarouselHome from "../carousel";
import { IoIosArrowDropdownCircle } from "react-icons/io";

export default function PendanaanTemplate() {
  const slide = [
    "https://i.imgur.com/JZjhhdW.png",
    "https://i.imgur.com/pyQxQCe.png",
  ];
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
        <form className="my-10">
          <InputForm
            label="Modal yang diperlukan *"
            name="modalDiperlukan"
            type="text"
          />
          <InputForm label="Tenor *" name="tenor" type="number" />
          <InputForm label="Bagi Hasil *" name="bagiHasil" type="number" />
          <div className="relative w-full">
            <label className="font-bold">Sektor Usaha*</label>
            <select
              name="sektorUsaha"
              className="block appearance-none w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500"
            >
              <option value="">Pilih Sektor Usaha</option>
              <option value="Perdagangan">Perdagangan</option>
              <option value="Pertanian">Pertanian</option>
              <option value="Peternakan">Peternakan</option>
              <option value="Teksil">Tekstil</option>
              <option value="Pertambangan">Farmasi</option>
              <option value="Industri">Industri</option>
              <option value="Food and Beverage">Food and Beverage</option>
            </select>
          </div>
          <InputForm
            label="Deskripsi Penggunaan Dana *"
            name="deskripsiPenggunaanDana"
            type="text"
          />
          <InputForm label="Foto KTP *" name="fotoKTP" type="file" />
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
