import { FaDotCircle } from "react-icons/fa";

export default function RegisterInfoDoc({ dokumen }: { dokumen: string }) {
  return (
    <>
      <div className="mt-3 text-gray-600 flex flex-col md:flex-row justify-between  md:text-sm md:gap-3">
        <div className="flex gap-2 items-center md:flex-1">
          <FaDotCircle className="mt-0.5 text-accent-700" />
          <h4 className="text-xs line-clamp-1 md:text-base">{dokumen}</h4>
        </div>
        <h4 className="text-sky-600 hover:underline duration-300 ease-out transition-all cursor-pointer text-xs md:text-base mt-2">
          Lihat contoh dokumen
        </h4>
      </div>
    </>
  );
}
