import InputForm from "../../public-view/input-form";

const InformasiLender = () => {
  return (
    <>
      <div className="md:w-6/12 md:mx-auto mt-16 mb-10 min-h-screen mx-9">
        <div className="text-center">
          <h1 className="font-bold text-2xl">
            Informasi Diri Sebagai Pemberi Pinjaman (Lender)
          </h1>
          <p className="text-gray-400 pt-2">
            Silahkan isi data dibawah ini jika Anda sebagai lender di UMKM-Ku
          </p>
        </div>
        <form className="my-10">
          <InputForm label="Nama Lengkap *" name="namaLengkap" type="text" />
          <InputForm label="No Handphone *" name="noHandphone" type="number" />
          <InputForm label="No Rekening *" name="noRekening" type="number" />
          <InputForm label="Foto KTP *" name="fotoKTP" type="file" />
          <div className="ms-3">
            <h2 className="font-bold text-lg mt-3">Persyaratan</h2>
            <div className="flex gap-2">
              <input
                type="checkbox"
                id="privasi"
                name="privasi"
                className="mb-2.5"
              />
              <label htmlFor="privasi" className="text-gray-500 text-sm mt-2">
                Dengan ini, saya menyatakan setuju untuk mengunggah data pribadi
                saya ke platform ini dan memahami bahwa data yang diunggah akan
                digunakan sesuai dengan kebijakan privasi yang berlaku.
              </label>
            </div>
            <div className="flex gap-2 mt-3">
              <input type="checkbox" id="privasi" name="privasi" />
              <label htmlFor="privasi" className="text-gray-500 text-sm">
                {" "}
                Izinkan UMKM-Ku Mengirimkan Saya Informasi Melalui Email yang
                telah saya masukan diatas.
              </label>
            </div>
          </div>
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
};

export default InformasiLender;
