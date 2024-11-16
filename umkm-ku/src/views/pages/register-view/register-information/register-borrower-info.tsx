import Link from "next/link";
import RegisterInfoDoc from "./components/register-info-doc";
import { RegisterInfoLabel } from "./components/register-info-label";

export default function RegisterBorrowerInformationView() {
  return (
    <>
      <section className="bg-white h-lvh">
        <div className="h-lvh flex flex-col my-14 items-center">
          <RegisterInfoLabel
            tittle="Silahkan Siapkan Dokumen Yang Diperlukan"
            desc="Siapkan dokumen dibawah ini untuk proses verifikasi sebelum Anda siap untuk meminjam"
          />

          <div className="w-3/6 border py-2 px-3 rounded-md shadow-md mt-7">
            <h4 className="text-gray-600 font-semibold w-full border-b pb-2">
              Dokumen Badan usaha Individu
            </h4>

            <RegisterInfoDoc dokumen="Kartu Tanda Penduduk (KTP)" />
            <RegisterInfoDoc dokumen="Nomor Pokok Wajib Pajak (NPWP)" />
          </div>

          <div className="w-3/6 border py-2 px-3 rounded-md shadow-md mt-7">
            <h4 className="text-gray-600 font-semibold w-full border-b pb-2">
              Dokumen Badan usaha Institusi
            </h4>

            <RegisterInfoDoc dokumen="Surat Izin Domisili" />
            <RegisterInfoDoc dokumen="Rekening koran 6 bulan terakhir pada bank operasional" />
            <RegisterInfoDoc dokumen="Laporan keuangan neraca & laba rugi dalam 2 tahun sampai sekarang" />
            <RegisterInfoDoc dokumen="KTP orang yang ditunjuk sebagai kontak darurat" />
          </div>

          <Link
            href={"/register/borrower/information/badan-usaha"}
            className="mt-7 w-3/6 bg-accent-700 rounded-lg p-2 text-white font-semibold hover:bg-accent-800 transition-colors duration-300 ease-out"
          >
            <h6 className="text-center">Saya Mengerti</h6>
          </Link>
        </div>
      </section>
    </>
  );
}
