import { appApi } from "../../app/app-api";

export const showcaseApi = appApi.injectEndpoints({
  endpoints: (builder) => ({
    getImages: builder.query({
      query: ({ url }) => {
        return {
          url: "",
          method: "get",
          params: {
            _start: 0,
            _limit: 9,
          },
        };
      },
    }),
  }),
});

export const { useGetImagesQuery } = showcaseApi;
