import React from "react";
// import Image from "next/image";

const CardMarketplace = ({
  name,
  description,
  amount,
  tenor,
  profitSharing,
  crowdfundingProgress,
  daysLeft,
  imageSrc,
}: {
  name: string;
  description: string;
  amount: string;
  tenor: string;
  profitSharing: string;
  crowdfundingProgress: number;
  daysLeft: number;
  imageSrc: string;
}) => {
  return (
    <>
      <div className="relative md:min-w-80  rounded-lg shadow-lg border border-gray-200 bg-white overflow-hidden m-7">
        <div className="relative h-48">
          <img
            src={imageSrc}
            alt="Funding card image"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="bg-red-600 ribbon-2 text-white text-sm font-semibold">
            2 Hari lagi
          </div>
        </div>

        <div className="p-4 bg-white rounded-tl-3xl -mt-6 relative z-10">
          <div className="flex items-center space-x-2">
            <div className="avatar placeholder">
              <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center">
                A
              </div>
            </div>

            <div>
              <p className="font-bold text-lg">{name}</p>
              <p className="text-sm text-accent-700">{description}</p>
            </div>
          </div>

          <div className="mt-4 text-sm">
            <div className="flex justify-between">
              <span>Modal</span>
              <span className="font-semibold">{amount}</span>
            </div>
            <div className="flex justify-between">
              <span>Tenor</span>
              <span className="font-semibold">{tenor}</span>
            </div>
            <div className="flex justify-between">
              <span>Bagi Hasil</span>
              <span className="font-semibold">{profitSharing}</span>
            </div>
          </div>
          <div className="mt-4">
            <p className="text-sm font-medium text-accent-700">Crowdfunding</p>
            <div className="w-full bg-accent-400 rounded-full h-2">
              <div
                className="bg-accent-700 h-2 rounded-full"
                style={{ width: `${crowdfundingProgress}%` }}
              ></div>
            </div>
            <p className="text-right text-sm text-gray-500 mt-1">
              {crowdfundingProgress}%
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardMarketplace;
