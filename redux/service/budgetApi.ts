import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define the expected response type for the budget query
interface Budget {
  id: string;
  amount: number;
  description: string;
  // Add other fields as per the API response structure
}

// Define the API
export const budgetApi = createApi({
  reducerPath: "budgetApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://budget-beta-ten.vercel.app/api",
  }),
  endpoints: (builder) => ({
    getBudgets: builder.query<Budget[], void>({
      query: () => "/budget",
    }),
  }),
});

// Export the auto-generated hook for the `getBudget` query endpoint
export const { useGetBudgetsQuery } = budgetApi;
