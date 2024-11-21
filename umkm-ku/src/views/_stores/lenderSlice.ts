import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { AppDispatch } from ".";
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
const initialState = {
  fundings: [] as Funding[],
};

export const lenderSlice = createSlice({
  name: "lender",
  initialState,
  reducers: {
    getFunding: (state, action: PayloadAction<Funding[]>) => {
      state.fundings = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { getFunding } = lenderSlice.actions;

export const fetchDataFunding = () => async (dispatch: AppDispatch) => {
  try {
    console.log("Masuk 2");
    const response = await fetch(`http://localhost:8083/lender/fundings`, {
      method: "GET",
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTUsImVtYWlsIjoiaXJ3YW5iYWNodGlhckBnbWFpbC5jb20iLCJyb2xlIjoiTGVuZGVyIiwiaWF0IjoxNzMyMTc1NjUxLCJleHAiOjE3MzIyNjIwNTF9.jtb41IfOXS1ycKZ-rxilquhNcXF2O7cTBU9lB6_aVCA`,
      },
    });
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await response.json();
    const fund = data.fundingRequests || [];

    dispatch(getFunding(fund));
  } catch (error) {
    console.error("Error fetching funding data:", error);
  }
};

export default lenderSlice.reducer;
