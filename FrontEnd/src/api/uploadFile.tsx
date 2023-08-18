import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query";



const imgBB = createApi({
    reducerPath:"images",
    tagTypes:["Images"],
    baseQuery: fetchBaseQuery({
         baseUrl: 'http://localhost:8080/api' 
        }
    ),

    endpoints: (builder) => ({
      upload: builder.mutation({
        query: (file) => ({
          url: '/images/upload',
          method: 'POST',
          body: file,
        }),
        invalidatesTags:["Images"]
      }),
    }),
  })
  
  export default imgBB
  // export const { useUploadMutation } = imgBB

