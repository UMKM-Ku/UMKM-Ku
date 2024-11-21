import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default function TopUp() {
  const handleTopUp = async (formData: FormData) => {
    "use server";
    const amount = formData.get("amount");

    try {
      console.log("Initiating top-up with amount:", amount);
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_API_URL}/lender/wallet/deposit`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${cookies().get("access_token")?.value}`,
          },
          body: JSON.stringify({ amount: Number(amount) }),
          cache: "no-store",
        }
      );
      const result = await response.json();

      console.log("Top-up response:", result);

      if (!result.success) {
        console.log("Top-up failed:", result.message);
      } else {
        console.log("Top-up successful!");
        revalidatePath("/lender");
        redirect("/lender");
      }
    } catch (error) {
      console.error("Top-up error:", error);
    }
  };

  return (
    <>
      <input type="checkbox" id="topup-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="topup-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">Top Up Dana</h3>
          <p className="py-4">Masukkan jumlah top-up yang Anda inginkan:</p>
          <form action={handleTopUp}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Jumlah Top-Up (Rp)</span>
              </label>
              <input
                type="number"
                placeholder="Masukkan jumlah"
                name="amount"
                className="input input-bordered w-full [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                min="50000"
                required
              />
            </div>
            <div className="modal-action">
              <button
                type="submit"
                className="btn bg-accent-700 text-white w-full mt-2 text-xl hover:bg-accent-800 transition-colors duration-300 ease-in-out font-semibold text-center cursor-pointer"
              >
                Top Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
