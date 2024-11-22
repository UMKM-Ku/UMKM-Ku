import { FC } from "react";
import { PortfolioProps } from "./types";
export const CardPortfolio: FC<PortfolioProps> = ({
  name,
  status,
  remainingPrincipal,
  remainingMargin,
  progress,
  marginPercentage,
  onTimeStatus,
  imageSrc,
}) => {
  return (
    <div className="relative md:min-w-80 rounded-lg shadow-lg border border-gray-200 bg-white overflow-hidden m-7 w-fit">
      <div className="relative h-48">
        <img
          src={imageSrc}
          alt="Portfolio image"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      <div className="p-4 bg-white rounded-tl-3xl -mt-6 relative z-10">
        <div className="flex items-center space-x-2">
          <div className="flex justify-between items-center w-full">
            <div className="flex flex-col">
              <h3 className="font-bold text-lg">{name}</h3>
              <p className="text-sm text-accent-700">{status}</p>
            </div>
            {onTimeStatus && (
              <span className="px-1 py-1 bg-green-100 text-green-800 rounded text-sm">
                Sedang Berjalan
              </span>
            )}
          </div>
        </div>

        <div className="mt-4 text-sm">
          <div className="flex justify-between mb-1">
            <span>Sisa Pokok</span>
            <span className="font-semibold">
              Rp {remainingPrincipal.toLocaleString()}
            </span>
          </div>
          <div className="flex justify-between mb-1">
            <span>Tenor</span>
            <span className="font-semibold">
              {remainingMargin.toLocaleString()} Minggu
            </span>
          </div>
        </div>

        <div className="mt-4">
          <div className="flex justify-between text-sm mb-2">
            <span>
              {progress.current} dari {progress.total} Minggu
            </span>
            <span>{marginPercentage}%</span>
          </div>
          <div className="w-full bg-accent-400 rounded-full h-2">
            <div
              className="bg-accent-700 h-2 rounded-full"
              style={{ width: `${(progress.current / progress.total) * 100}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardPortfolio;
