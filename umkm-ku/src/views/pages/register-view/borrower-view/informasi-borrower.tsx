import { cookies } from "next/headers";
import ButtonForm from "../../public-view/button-form";
import InputForm from "../../public-view/input-form";
import PersyaratanForm from "../../public-view/persyaratan-form";
import TextAreaForm from "../../public-view/textarea-form";
import { redirect } from "next/navigation";

const InformasiBorrower = ({ badanUsaha }: { badanUsaha: string }) => {
  const registerBorrower = async (formData: FormData) => {
    "use server";

    // const input = {
    //   address: FormData.get("address"),
    //   identityCard: FormData.get("identityCard"),
    //   identityNumber: FormData.get("identityNumber"),
    //   accountNumber: FormData.get("accountNumber"),
    //   npwp: FormData.get("npwp"),
    //   isInstitution: `${badanUsaha !== "institusi" ? false : true}`,
    // };

    // console.log(input);

    const input = Object.fromEntries(formData);
    const newFormData = new FormData();
    newFormData.append("address", input.address);
    newFormData.append("identityCard", input.identityCard);
    newFormData.append("identityNumber", input.identityNumber);
    newFormData.append("accountNumber", input.accountNumber);
    newFormData.append("npwp", input.npwp);
    console.log(newFormData);

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API_URL}/auth/register/borrower`,
      {
        method: "POST",
        body: newFormData,
        headers: {
          Authorization: `Bearer ${cookies().get("access_token")?.value}`,
        },
      }
    );
    console.log(response);

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
        <InputForm label="Foto KTP *" name="identityCard" type="file" />
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
