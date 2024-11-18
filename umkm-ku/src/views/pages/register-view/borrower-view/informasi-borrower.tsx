import ButtonForm from "../../public-view/button-form";
import InputForm from "../../public-view/input-form";
import PersyaratanForm from "../../public-view/persyaratan-form";
import TextAreaForm from "../../public-view/textarea-form";

const InformasiBorrower = () => {
  return (
    <div className="md:w-6/12 md:mx-auto mt-16 mb-10 min-h-screen mx-9">
      <div className="text-center">
        <h1 className="font-bold text-2xl">
          Informasi Diri Sebagai Penerima Pinjaman (Borrower)
        </h1>
        <p className="text-gray-400 pt-2">
          Silahkan isi data dibawah ini jika Anda sebagai borrower di UMKM-Ku
        </p>
      </div>
      <form className="my-10">
        <InputForm label="Nama Lengkap *" name="namaLengkap" type="text" />
        <TextAreaForm label="Alamat *" name="alamat" />
        <InputForm label="No Handphone *" name="noHandphone" type="number" />
        <InputForm label="No Rekening *" name="noRekening" type="number" />
        <InputForm label="Foto KTP *" name="fotoKTP" type="file" />
        <PersyaratanForm />
        <ButtonForm />
      </form>
    </div>
  );
};

export default InformasiBorrower;
