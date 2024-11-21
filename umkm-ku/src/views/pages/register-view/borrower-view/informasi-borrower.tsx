import ButtonForm from "../../public-view/button-form";
import InputForm from "../../public-view/input-form";
import PersyaratanForm from "../../public-view/persyaratan-form";
import TextAreaForm from "../../public-view/textarea-form";
import { redirect } from "next/navigation";

const InformasiBorrower = ({ badanUsaha }: { badanUsaha: string }) => {
  const registerBorrower = async (FormData: FormData) => {
    "use server";

    const input = {
      address: FormData.get("address"),
      identityNumber: FormData.get("identityNumber"),
      accountNumber: FormData.get("accountNumber"),
      npwp: FormData.get("npwp"),
      isInstitution: `${badanUsaha !== "institusi" ? false : true}`,
    };

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API_URL}/auth/register/borrower`,
      {
        method: "POST",
        body: JSON.stringify(input),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    // if (!response.ok) throw Error("Error adding data");
    return redirect("/borrower");
  };

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
      <form
        className="bg-white shadow-lg rounded-lg p-6"
        action={registerBorrower}
      >
        <TextAreaForm label="Alamat *" name="address" />
        <InputForm label="No KTP *" name="identityNumber" type="number" />
        <InputForm label="No Rekening *" name="accountNumber" type="number" />
        <InputForm label="NPWP *" name="npwp" type="number" />
        <PersyaratanForm />
        <ButtonForm />
      </form>
    </div>
  );
};

export default InformasiBorrower;
