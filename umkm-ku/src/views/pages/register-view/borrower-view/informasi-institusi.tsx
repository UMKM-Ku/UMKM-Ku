import ButtonForm from "../../public-view/button-form";
import InputForm from "../../public-view/input-form";
import PersyaratanForm from "../../public-view/persyaratan-form";
import TextAreaForm from "../../public-view/textarea-form";

const InformasiInstitusi = () => {
  return (
    <div className="md:w-6/12 md:mx-auto mt-16 mb-10 min-h-screen mx-9">
      <div className="text-center">
        <h1 className="font-bold text-2xl">
          Informasi Diri Sebagai Penerima Pinjaman (Borrower)
        </h1>
        <p className="text-gray-400 pt-2">
          Silahkan isi data dibawah ini jika Anda sebagai Pemilik Perusahaan /
          PIC Perusahaan yang akan mengelola akun borrower di UMKM-Ku
        </p>
      </div>
      <form className="my-10">
        <InputForm
          label="Nama Perusahaan *"
          name="namaPerusahaan"
          type="text"
        />
        <TextAreaForm label="Alamat Perusahaan*" name="alamatPerusahaan" />
        <InputForm label="Nama Lengkap PIC *" name="namaLengkap" type="text" />
        <InputForm
          label="No Handphone PIC *"
          name="noHandphone"
          type="number"
        />
        <InputForm label="No Rekening PIC *" name="noRekening" type="number" />
        <InputForm
          label="Foto KTP (Kontak Darurat) *"
          name="fotoKTP"
          type="file"
        />
        <InputForm label="Rekening Koran *" name="rekeningKoran" type="file" />
        <InputForm label="Surat Izin Domisili *" name="suratIzin" type="file" />
        <InputForm
          label="Laporan Keuangan *"
          name="laporanKeuangan"
          type="file"
        />
        <PersyaratanForm />
        <ButtonForm />
      </form>
    </div>
  );
};

export default InformasiInstitusi;
