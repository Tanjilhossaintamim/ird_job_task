import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:7000",
  }),
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: () => ({
        url: "/categories",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetCategoriesQuery } = api;

export default api;
