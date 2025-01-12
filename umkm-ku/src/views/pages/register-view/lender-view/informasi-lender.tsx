import { redirect } from "next/navigation";
import ButtonForm from "../../public-view/button-form";
import InputForm from "../../public-view/input-form";
import PersyaratanForm from "../../public-view/persyaratan-form";
import TextAreaForm from "../../public-view/textarea-form";
import { cookies } from "next/headers";

const InformasiLender = () => {
  const handleDetail = async (formData: FormData) => {
    "use server";

    // const input = {
    //   address: FormData.get("address"),
    //   identityNumber: FormData.get("identityNumber"),
    //   accountNumber: FormData.get("accountNumber"),
    //   birthDate: FormData.get("birthDate"),
    // };

    // console.log(input);
    const input = Object.fromEntries(formData);
    const newFormData = new FormData();
    newFormData.append("address", input.address);
    newFormData.append("identityCard", input.identityCard);
    newFormData.append("identityNumber", input.identityNumber);
    newFormData.append("accountNumber", input.accountNumber);
    newFormData.append("birthDate", input.birthDate);
    console.log(newFormData);

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API_URL}/auth/register/lender`,
      {
        method: "POST",
        body: newFormData,
        headers: {
          // "Content-Type": "multi",
          Authorization: `Bearer ${cookies().get("access_token")?.value}`,
        },
      }
    );

    if (!response.ok) {
      // Try to parse the error message
      const errorMessage = await response.text();
      console.error("Error Response:", {
        status: response.status,
        statusText: response.statusText,
        message: errorMessage,
      });
      return;
    }
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
          <InputForm label="Foto KTP *" name="identityCard" type="file" />
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
