export default function formatNumber(number: number) {
  return number.toLocaleString("id-ID", { style: "currency", currency: "IDR" });
}
