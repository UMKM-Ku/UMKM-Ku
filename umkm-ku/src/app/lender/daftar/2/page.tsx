import InputLender from "@/views/lender-view/input-lender";
import React from "react";

const DaftarLender2 = () => {
  return (
    <>
      <div className="md:w-6/12 md:mx-auto mt-28 min-h-screen mx-9">
        <div className="text-center">
          <h1 className="font-bold text-2xl">
            Informasi Diri Sebagai Pemberi Pinjaman (Lender)
          </h1>
          <p className="text-gray-400 pt-2">
            Silahkan isi data dibawah ini jika Anda sebagai lender di UMKM-Ku
          </p>
        </div>
        <form className="my-10">
          <InputLender label="Nama Lengkap *" name="namaLengkap" type="text" />
          <InputLender
            label="No Handphone *"
            name="noHandphone"
            type="number"
          />
          <InputLender label="No Rekening *" name="noRekening" type="number" />
          <InputLender label="Foto KTP *" name="fotoKTP" type="file" />
          <div className="ms-3">
            <h2 className="font-bold text-lg my-3">Persyaratan</h2>
            <div>
              <input type="checkbox" id="privasi" name="privasi" />
              <label htmlFor="privasi" className="text-gray-500 text-sm">
                {" "}
                Saya menyatakan telah membaca dan setuju dengan Kebijakan
                Privasi & Syarat Ketentuan yang ada.
              </label>
            </div>
            <div>
              <input type="checkbox" id="privasi" name="privasi" />
              <label htmlFor="privasi" className="text-gray-500 text-sm">
                {" "}
                Izinkan UMKM-Ku Mengirimkan Saya Informasi Melalui Email yang
                telah saya masukan diatas.
              </label>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default DaftarLender2;
