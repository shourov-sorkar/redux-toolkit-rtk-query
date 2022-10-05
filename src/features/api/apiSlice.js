import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const apiSlice = createApi({
  reducerPath: "apiSlice",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.github.com/users/",
  }),
  tagTypes: ["Post"],
  endpoints: (builder) => ({
    getProfile: builder.query({
      query: () => "shourov-sorkar",
    }),
  }),
});
export const { useGetProfileQuery } = apiSlice;
