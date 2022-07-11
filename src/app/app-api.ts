import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const appApi = createApi({
  reducerPath: "appApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/photos",
  }),
  tagTypes: ["Images"],
  endpoints: () => ({}),
});
