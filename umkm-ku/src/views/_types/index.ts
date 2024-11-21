export type Funding = {
  id: number;
  borrowerId: number;
  title: string;
  description: string;
  image: string;
  totalFund: number;
  tenor: number;
  returnRate: number;
  fundingExpired: string;
  sectorId: number;
  status: number;
  fundsRaised: number;
  isFullyFunded: boolean;
  createdAt: string;
  updatedAt: string;
};

export type FundingBorrower = {
  id: number;
  borrowerId: number;
  title: string;
  description: string;
  image: string;
  totalFund: number;
  tenor: number;
  returnRate: number;
  fundingExpired: string;
  sectorId: number;
  status: number;
  fundsRaised: number;
  isFullyFunded: boolean;
  createdAt: string;
  updatedAt: string;
};
