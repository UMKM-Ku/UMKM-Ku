"use server";

import { cookies } from "next/headers";

export const createFunding = async (
  fundingRequestId: number,
  amount: number
) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API_URL}/lender/fundings/transaction`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${cookies().get("access_token")?.value}`,
        },
        body: JSON.stringify({
          fundingRequestId,
          amount,
        }),
      }
    );

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || "Failed to process funding");
    }

    return await response.json();
  } catch (error) {
    throw error;
  }
};

export const createReview = async (
  rating: number,
  comment: string,
  lenderId: number,
  borrowerId: number
) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API_URL}/lender/review`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${cookies().get("access_token")?.value}`,
        },
        body: JSON.stringify({
          rating,
          comment,
          lenderId,
          borrowerId,
        }),
      }
    );

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || "Failed to process review");
    }

    return await response.json();
  } catch (error) {
    throw error;
  }
};
