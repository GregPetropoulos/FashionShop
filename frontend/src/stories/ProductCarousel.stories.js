import React from 'react';
import ProductCarousel from '../../src/components/ProductCarousel';
import { rest } from 'msw';
import { useGetTopProductsQuery } from '../../src/slices/productsApiSlice';
import { Provider } from 'react-redux';
import { apiSlice } from '../../src/slices/apiSlice';
import { PRODUCTS_URL, UPLOAD_URL } from '../../src/constants';


import { configureStore, createSlice } from '@reduxjs/toolkit';
// const products=[
//     {
//         _id: "64d5bc1ea651331f3e727f05",
//         user: "64d5bc1ea651331f3e727f01",
//         name: "Rhinestone Cross Choker Necklace",
//         image: "/images/necklace-1.jpeg",
//         brand: "Forever 21",
//         category: "Jewelry",
//         description: "A choker necklace featuring a cross pendant with allover rhinestone embellishments, Chain length: 70\".",
//         rating: 4.5,
//         numReviews: 12,
//         price: 9.99,
//         countInStock: 10,
//         reviews: [],
//         __v: 0,
//         createdAt: "2023-08-11T04:42:06.695Z",
//         updatedAt: "2023-08-11T04:42:06.695Z"
//     },
//     {
//         _id: "64d5bc1ea651331f3e727f06",
//         user: "64d5bc1ea651331f3e727f01",
//         name: "Mid Rise Baby Boot Jeans with Washwell",
//         image: "/images/womens-bottoms-1.webp",
//         brand: "GAP",
//         category: "Jeans",
//         description: "A classic bootcut jean with a mini-gone-major update. We kept it straight through the leg — then ended with a slight flare. This is the 2.0 version of a forever favorite.\n\n      - Fit: A full-length slim fit with a mini bootcut leg.​\n      - Fabric: 81% Cotton, 4% Recycled Materials, 6% Stretch.\n      - Stretch: High Stretch Jeans. Innovative stretch with high recovery. ​Made to move & always bounces back.​\n      - Rise: Mid Rise Jeans.\n      - Look: A classic five-pocket jean in a medium wash.\n      - Details: Zip fly & five-pocket styling.\n      Responsibly Made: This pair of jeans is part of our water-saving Washwell program. Compared to conventional wash methods, Washwell has saved millions of liters of water since 2016.",
//         rating: 4,
//         numReviews: 8,
//         price: 89.99,
//         countInStock: 7,
//         reviews: [],
//         __v: 0,
//         createdAt: "2023-08-11T04:42:06.696Z",
//         updatedAt: "2023-08-11T04:42:06.696Z"
//     },
//     {
//         _id: "64d5bc1ea651331f3e727f07",
//         user: "64d5bc1ea651331f3e727f01",
//         name: "Ruffle-Trim Maxi Dress",
//         image: "/images/womens-dress-1.jpg",
//         brand: "Independent",
//         category: "Dress",
//         description: "A woven maxi dress featuring a smocked bodice, square-cut neckline and back, shoulder straps with ruffle trim, a column silhouette, and flounce hem.\n    - This is an independent brand and not a Forever 21 branded item.\n\n    Content + Care\n    - 100% polyester rayon\n    \n    - Machine wash cold\n    \n    Size + Fit\n    - Model is 5'7\" and wearing a Small",
//         rating: 3,
//         numReviews: 12,
//         price: 48.99,
//         countInStock: 5,
//         reviews: [],
//         __v: 0,
//         createdAt: "2023-08-11T04:42:06.696Z",
//         updatedAt: "2023-08-11T04:42:06.696Z"
//     }
// ]

const MockedState = [
  {
    _id: '64d5bc1ea651331f3e727f05',
    name: 'Rhinestone Cross Choker Necklace',
    image: '/images/necklace-1.jpeg',
    price: 9.99,
  },
];

const Mockstore = ({ topProductState, children }) => (
  <Provider
    store={configureStore({
      reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
        // product: createSlice({
        //   name: 'topProduct',
        //   initialState: topProductState,
        //   reducers: {
        //     getTopProducts :(state, action)=> {
        //         state = action.payload
        //     }
        //   },
        // }).reducer,
        products:apiSlice.injectEndpoints({
            endpoints: (builder) => ({
        getTopProducts: builder.query({
            query: () => ({
              url: `${PRODUCTS_URL}/top`,
            }),
            keepUnusedDataFor: 5,
          }),
        }),
      }),
//       middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
//   devTools: true,
    }})}
  >
    {children}
  </Provider>
);

export default {
  title: 'Components/ProductCarousel',
  component: ProductCarousel,
  decorators: [(story) => <div style={{ padding: '3rem' }}>{story()}</div>],
  tags: ['autodocs'],
  excludeStories: /.*MockedState$/,
};

export const Default = {
  decorators: [(story) => <Mockstore topProductState={MockedState}>{story()}</Mockstore>],
};

// export const Default = args => <ProductCarousel {...args}/>
// Default.args={
//     data:[]
// }
// ProductCarousel.parameters = {
//     msw: {
//       handlers: [
//         rest.get('/api/products/top', (req, res, ctx) => {
//           return res(
//             ctx.json({data})
//           )
//         }),
//       ]
//     },
//   }
