import ProductCarousel from '../components/ProductCarousel';
import { rest } from 'msw';

// GETTING ISSUE WITH THE API/PRODUCTS/TOP THROWING AN ERROR--NEED TO MOCK
export default {
  title: 'Components/ProductCarousel',
  component: ProductCarousel,
  tags: ['autodocs'],
  parameters: {
    msw: [
      rest.get('http://localhost:6006/api/products/top', (_req, res, ctx) => {
        return res(
          ctx.json([
            {
              _id: '64d5bc1ea651331f3e727f08',
              name: 'Plunging Cutout Maxi Dress',
              image: '/images/womens-dress-2.webp',
              price: 24.99,
            },
            {
              _id: '64d5bc1ea651331f3e727f05',
              name: 'Rhinestone Cross Choker Necklace',
              image: '/images/necklace-1.jpeg',
              price: 9.99,
            },
            {
              _id: '64d5bc1ea651331f3e727f06',
              name: 'Mid Rise Baby Boot Jeans with Washwell',
              image: '/images/womens-bottoms-1.webp',
              price: 89.99,
            },
          ])
        );
      }),
    ],
  },
};
const Template = () => <ProductCarousel />;

export const Default = Template.bind({});

// export const FailedResponse = Template.bind({});
// FailedResponse.parameters = {
//   msw: [
//     rest.get('http://localhost:6006/api/products/top', (_req, res, ctx) => {
//       return res(
//         // ctx.delay(3000),
//         ctx.json({ message: 'Not found 404, /api/products/top' }),
//         ctx.status(403)
//       );
//     }),
//   ],
// };
// FailedResponse.args = {
//   isLoading: false,
//   error: { data: { message: 'Failed error message' } },
// };
