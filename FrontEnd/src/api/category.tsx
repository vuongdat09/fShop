import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IProduct } from "../interface/product";

import { ICategory } from "../interface/product";
const CategoryApi = createApi({
  reducerPath: "category",
  tagTypes: [`Category`],
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8080/api",
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("accessToken");
      if (token) {
        headers.set("Authorization", "Bearer xxx");
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getCategory: builder.query<ICategory[], void>({
      query: () => `/category`,
      providesTags: [`Category`],
    }),

    getCategoryById: builder.query<ICategory, number>({
      query: (id) => `/category/${id}`,
    }),
    deleteCategoryById: builder.mutation<ICategory, number>({
      query: (id) => ({
        url: `/category/${id}`,
        method: `DELETE`,
      }),
      invalidatesTags: ["Category"],
    }),
    addCategory: builder.mutation<ICategory, IProduct>({
      query: (category) => ({
        url: `/category`,
        method: `POST`,
        body: category,
      }),
      invalidatesTags: ["Category"],
    }),
    updateCategory: builder.mutation<ICategory, IProduct>({
      query: (category) => ({
        url: `/category/${category._id}`,
        method: `PUT`,
        body: category,
      }),
      invalidatesTags: ["Category"],
    }),
  }),
});
export const {
  useAddCategoryMutation,
  useDeleteCategoryByIdMutation,
  useUpdateCategoryMutation,
  useGetCategoryByIdQuery,
  useGetCategoryQuery,
} = CategoryApi;
export default CategoryApi;
