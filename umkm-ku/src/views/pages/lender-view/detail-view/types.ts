export interface Sector {
  id: number;
  sector: string;
  createdAt: string;
  updatedAt: string;
}

export interface Borrower {
  id: number;
  userId: number;
  address: string;
  identityNumber: string;
  identityCard: string;
  accountNumber: string;
  npwp: string;
  isInstitution: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface FundingRequest {
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
  sector: Sector;
  borrower: Borrower;
}

export interface APIResponse {
  message: string;
  fundingRequest: FundingRequest;
}

export interface CardProps {
  data: FundingRequest;
}
