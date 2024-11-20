import ButtonForm from "../../public-view/button-form";
import InputForm from "../../public-view/input-form";
import PersyaratanForm from "../../public-view/persyaratan-form";
import TextAreaForm from "../../public-view/textarea-form";
import { redirect } from "next/navigation";

const InformasiBorrower = ({ badanUsaha }: { badanUsaha: string }) => {
  const registerBorrower = async (FormData: FormData) => {
    "use server";

    const input = {
      name: FormData.get("name"),
      email: FormData.get("email"),
      password: FormData.get("password"),
      identityNumber: FormData.get("identityNumber"),
      address: FormData.get("address"),
      npwp: FormData.get("npwp"),
      isInstitution: `${badanUsaha !== "institusi" ? false : true}`,
      accountNumber: FormData.get("accountNumber"),
      phoneNumber: FormData.get("phoneNumber"),
      identityCard: FormData.get("identityCard"),
    };

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API_URL}/register/borrower`,
      {
        method: "POST",
        body: JSON.stringify(input),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    // if (!response.ok) throw Error("Error adding data");
    return redirect("/login");
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
        <InputForm label="Nama Lengkap *" name="name" type="text" />
        <InputForm label="Alamat Email *" name="email" type="email" />
        <InputForm label="Password *" name="password" type="password" />
        <TextAreaForm label="Alamat *" name="address" />
        <InputForm label="No Handphone *" name="phoneNumber" type="number" />
        <InputForm label="No KTP *" name="identityNumber" type="number" />
        <InputForm label="No Rekening *" name="accountNumber" type="number" />
        <InputForm label="NPWP *" name="npwp" type="number" />
        <InputForm label="Foto KTP *" name="identityCard" type="file" />
        <PersyaratanForm />
        <ButtonForm />
      </form>
    </div>
  );
};

export default InformasiBorrower;
