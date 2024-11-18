import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

export default function CardTeam({
  nama,
  link,
  hidden,
  quote,
  linkedin,
  github,
  job,
}: {
  nama: string;
  link: string;
  hidden: string;
  quote: string;
  linkedin: string;
  github: string;
  job: string;
}) {
  return (
    <>
      <div className="flex py-5">
        <div className="card bg-base-100 w-72 shadow-xl">
          <figure>
            <img src={link} alt="foto" className="h-52 w-full object-cover" />
          </figure>
          <div className="px-5 py-3 flex flex-col gap-3">
            <div>
              <h2 className="text-2xl max-w-72 text-center font-bold ">
                {nama}
              </h2>
              <div className="flex gap-1 justify-center mt-0.5">
                <div
                  className={`badge bg-accent-600 text-white p-3 text-xs w-20 ${hidden}`}
                >
                  {job}
                </div>
                <div className="badge bg-red-400 text-white p-3 text-xs w-20">
                  Front-End
                </div>
              </div>
            </div>

            <p className="max-w-96 text-sm text-justify mt-1 text-gray-500">
              {quote}
            </p>
            <div className="card-actions justify-between mt-2">
              <Link
                href={linkedin}
                className="badge badge-outline flex gap-1 items-center py-4 w-28 font-semibold hover:text-white hover:bg-sky-800 transition-colors text-xs duration-300 ease-out cursor-pointer"
              >
                <FaLinkedin className="text-lg" />
                <h6>Linkedin</h6>
              </Link>

              <Link
                href={github}
                className="badge text-xs badge-outline w-28 flex gap-1 items-center py-4 font-semibold hover:text-white hover:bg-gray-800 transition-colors duration-300 ease-out cursor-pointer"
              >
                <FaGithub className="text-lg" />
                <h6>Github</h6>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
