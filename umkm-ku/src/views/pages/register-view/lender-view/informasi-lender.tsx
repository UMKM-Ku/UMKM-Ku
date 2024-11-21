import { redirect } from "next/navigation";
import ButtonForm from "../../public-view/button-form";
import InputForm from "../../public-view/input-form";
import PersyaratanForm from "../../public-view/persyaratan-form";
import TextAreaForm from "../../public-view/textarea-form";

const InformasiLender = () => {
  const handleDetail = async (FormData: FormData) => {
    "use server";

    const input = {
      address: FormData.get("name"),
      email: FormData.get("email"),
      password: FormData.get("password"),
      phoneNumber: FormData.get("phoneNumber"),
      role: "Lender",
    };

    console.log(input);

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API_URL}/auth/register/user`,
      {
        method: "POST",
        body: JSON.stringify(input),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) throw Error("Error pengisian form");
    const data = await response.json();

    console.log(data);

    console.log(response);
    if (response.ok) redirect("/lender");
  };

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
        <form className="my-10" action={handleDetail}>
          <TextAreaForm label="Alamat *" name="address" />
          <InputForm label="No KTP *" name="identityNumber" type="number" />
          <InputForm label="No Rekening *" name="accountNumber" type="number" />
          <InputForm label="Tanggal lahir *" name="birthDate" type="date" />
          <PersyaratanForm />
          <ButtonForm />
        </form>
      </div>
    </>
  );
};

export default InformasiLender;
