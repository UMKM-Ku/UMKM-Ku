import { FaDotCircle } from "react-icons/fa";

export default function RegisterInfoDoc({ dokumen }: { dokumen: string }) {
  return (
    <>
      <div className="mt-3 text-gray-600 flex justify-between items-center text-sm">
        <div className="flex gap-2 items-center">
          <FaDotCircle className="mt-0.5 text-accent-700" />
          <h4>{dokumen}</h4>
        </div>
        <h4 className="text-sky-600 hover:underline duration-300 ease-out transition-all cursor-pointer">
          Lihat contoh dokumen
        </h4>
      </div>
    </>
  );
}
