import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://ird-task-2s9y.onrender.com",
  }),
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: () => ({
        url: "/categories",
        method: "GET",
      }),
    }),
    getSubCategories: builder.query({
      query: (categoryId) => ({
        url: `/subcategories?cat=${categoryId}`,
        method: "GET",
      }),
    }),
    getDoa: builder.query({
      query: (categoryId) => ({
        url: `/doa?cat_id=${categoryId}`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useGetCategoriesQuery,
  useGetSubCategoriesQuery,
  useGetDoaQuery,
} = api;

export default api;
