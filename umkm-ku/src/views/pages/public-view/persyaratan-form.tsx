const PersyaratanForm = () => {
  return (
    <div className="ms-3">
      <h2 className="font-bold text-lg mt-3">Persyaratan</h2>
      <div className="flex gap-2">
        <input type="checkbox" id="privasi" name="privasi" className="mb-2.5" />
        <label htmlFor="privasi" className="text-gray-500 text-sm mt-2">
          Dengan ini, saya menyatakan setuju untuk mengunggah data pribadi saya
          ke platform ini dan memahami bahwa data yang diunggah akan digunakan
          sesuai dengan kebijakan privasi yang berlaku.
        </label>
      </div>
      <div className="flex gap-2 mt-3">
        <input type="checkbox" id="privasi" name="privasi" />
        <label htmlFor="privasi" className="text-gray-500 text-sm">
          {" "}
          Izinkan UMKM-Ku Mengirimkan Saya Informasi Melalui Email yang telah
          saya masukan diatas.
        </label>
      </div>
    </div>
  );
};

export default PersyaratanForm;
