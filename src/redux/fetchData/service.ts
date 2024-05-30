import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const key = process.env.NEXT_PUBLIC_RAPIDAPI_KEY as string;

export const hotelsServiceV1 = createApi({
  reducerPath: "hotelsServiceV1",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_RAPIDAPI_BASE_URL_V1,
    prepareHeaders: (headers) => {
      headers.set("X-RapidAPI-Key", key);
      headers.set("Content-Type", "application/json; charset=utf-8");
      return headers;
    },
  }),

  endpoints: (builder) => ({
    getPhotos: builder.query({
      query: (body) => `/photos?hotel_id=${body}&locale=en-gb`,
    }),
  }),
});

export const hotelsServiceV2 = createApi({
  reducerPath: "hotelsServiceV2",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_RAPIDAPI_BASE_URL_V2,
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
    getDescription: builder.query({
      query: (body) => `/description?${body}`,
    }),
    getHotelDetails: builder.query({
      query: (body) => `/details?${body}`,
    }),
  }),
});

export const { useGetPhotosQuery } = hotelsServiceV1;
export const { useGetHotelsQuery, useLazyGetDescriptionQuery, useGetHotelDetailsQuery } = hotelsServiceV2;
