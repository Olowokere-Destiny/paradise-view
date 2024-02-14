import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const key = process.env.NEXT_PUBLIC_API_KEY as string;
export const hotelsService = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_BASE_URL,
    prepareHeaders: (headers) => {
      headers.set("X-RapidAPI-Key", key);
      headers.set("Content-Type", "application/json; charset=utf-8");
      return headers;
    },
  }),

  endpoints: (builder) => ({
    getHotels: builder.query({
      query: (body) => `/search${body}`,
    }),
  }),
});

export const { useGetHotelsQuery } = hotelsService;
