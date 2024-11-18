export interface PortfolioProps {
  name: string;
  status: string;
  remainingPrincipal: number;
  remainingMargin: number;
  progress: {
    current: number;
    total: number;
  };
  marginPercentage: number;
  onTimeStatus: boolean;
  imageSrc: string;
}
