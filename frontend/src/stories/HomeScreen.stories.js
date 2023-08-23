import React from "react";
import HomeScreen from "../../src/screens/HomeScreen";
// import { Provider } from 'react-redux';
// import { useGetProductsQuery } from '../../src/slices/productsApiSlice';
import { rest } from 'msw'
import ProductCarousel from "../../src/components/ProductCarousel";
// import { MockedState } from './TaskList.stories';
// import Product from "../../src/components/Product";

// import store from '../../src/store';
const data={page:1,pages:2,products:[
    {
        _id: "64d5bc1ea651331f3e727f05",
        user: "64d5bc1ea651331f3e727f01",
        name: "Rhinestone Cross Choker Necklace",
        image: "/images/necklace-1.jpeg",
        brand: "Forever 21",
        category: "Jewelry",
        description: "A choker necklace featuring a cross pendant with allover rhinestone embellishments, Chain length: 70\".",
        rating: 4.5,
        numReviews: 12,
        price: 9.99,
        countInStock: 10,
        reviews: [],
        __v: 0,
        createdAt: "2023-08-11T04:42:06.695Z",
        updatedAt: "2023-08-11T04:42:06.695Z"
    },
    {
        _id: "64d5bc1ea651331f3e727f06",
        user: "64d5bc1ea651331f3e727f01",
        name: "Mid Rise Baby Boot Jeans with Washwell",
        image: "/images/womens-bottoms-1.webp",
        brand: "GAP",
        category: "Jeans",
        description: "A classic bootcut jean with a mini-gone-major update. We kept it straight through the leg — then ended with a slight flare. This is the 2.0 version of a forever favorite.\n\n      - Fit: A full-length slim fit with a mini bootcut leg.​\n      - Fabric: 81% Cotton, 4% Recycled Materials, 6% Stretch.\n      - Stretch: High Stretch Jeans. Innovative stretch with high recovery. ​Made to move & always bounces back.​\n      - Rise: Mid Rise Jeans.\n      - Look: A classic five-pocket jean in a medium wash.\n      - Details: Zip fly & five-pocket styling.\n      Responsibly Made: This pair of jeans is part of our water-saving Washwell program. Compared to conventional wash methods, Washwell has saved millions of liters of water since 2016.",
        rating: 4,
        numReviews: 8,
        price: 89.99,
        countInStock: 7,
        reviews: [],
        __v: 0,
        createdAt: "2023-08-11T04:42:06.696Z",
        updatedAt: "2023-08-11T04:42:06.696Z"
    },
    {
        _id: "64d5bc1ea651331f3e727f07",
        user: "64d5bc1ea651331f3e727f01",
        name: "Ruffle-Trim Maxi Dress",
        image: "/images/womens-dress-1.jpg",
        brand: "Independent",
        category: "Dress",
        description: "A woven maxi dress featuring a smocked bodice, square-cut neckline and back, shoulder straps with ruffle trim, a column silhouette, and flounce hem.\n    - This is an independent brand and not a Forever 21 branded item.\n\n    Content + Care\n    - 100% polyester rayon\n    \n    - Machine wash cold\n    \n    Size + Fit\n    - Model is 5'7\" and wearing a Small",
        rating: 3,
        numReviews: 12,
        price: 48.99,
        countInStock: 5,
        reviews: [],
        __v: 0,
        createdAt: "2023-08-11T04:42:06.696Z",
        updatedAt: "2023-08-11T04:42:06.696Z"
    }
]}
export default {
    title:'screens/HomeScreen',
    component:HomeScreen,
    // decorators: [(story) => <Provider store={store}>{story()}</Provider>],
    tags: ['autodocs'],
  };
//   console.log("useGetProductsQuery",useGetProductsQuery)

export const HomeScreenProducts = ((args)=> {

return (<HomeScreen {...args}><ProductCarousel/></HomeScreen>)

})
HomeScreenProducts.parameters = {
  msw: {
    handlers: [
      rest.get('/api/products', (req, res, ctx) => {
        return res(
          ctx.json(data)
        )
      }),
    //   rest.get('/api/products/top', (req, res, ctx) => {
    //     return res(
    //       ctx.json(products)
    //     )
    //   }),
    ]
  },
}
export const Default = {
    args:{
        keyword:'',
        pageNumber:''
    },
   
}

// export const Default = {
// + parameters: {
// +   msw: {
// +     handlers: [
// +       rest.get(
// +         'https://jsonplaceholder.typicode.com/todos?userId=1',
// +         (req, res, ctx) => {
// +           return res(ctx.json(MockedState.tasks));
// +         }
// +       ),
// +     ],
// +   },
// + },
// };
// export const Error = {
// + parameters: {
// +   msw: {
// +     handlers: [
// +       rest.get(
// +         'https://jsonplaceholder.typicode.com/todos?userId=1',
// +         (req, res, ctx) => {
// +           return res(ctx.status(403));
// +         }
// +       ),
// +     ],
// +   },
// + },
