import CartScreen from '../screens/CartScreen';
import { rest } from 'msw';

export default {
  title: 'Screens/CartScreen',
  component: CartScreen,
  tags: ['autodocs'],
  args: {
    cartItems: [
      {
        _id: '64d5bc1ea651331f3e727f05',
        user: '64d5bc1ea651331f3e727f01',
        name: 'Rhinestone Cross Choker Necklace',
        image: '/images/necklace-1.jpeg',
        brand: 'Forever 21',
        category: 'Jewelry',
        description:
          'A choker necklace featuring a cross pendant with allover rhinestone embellishments, Chain length: 70',
        rating: 4.5,
        numReviews: 12,
        price: 9.99,
        countInStock: 10,
        reviews: [],
        __v: 0,
        createdAt: '2023-08-11T04:42:06.695Z',
        updatedAt: '2023-08-11T04:42:06.695Z',
        qty: 1,
      },
    ],
  },
  parameters: {
    msw: [
      rest.get('http://localhost:6006/api/products/64d5bc1ea651331f3e727f05', (_req, res, ctx) => {
        return res(
          ctx.json([
            {
              _id: '64d5bc1ea651331f3e727f05',
              user: '64d5bc1ea651331f3e727f01',
              name: 'Rhinestone Cross Choker Necklace',
              image: '/images/necklace-1.jpeg',
              brand: 'Forever 21',
              category: 'Jewelry',
              description:
                'A choker necklace featuring a cross pendant with allover rhinestone embellishments, Chain length: 70',
              rating: 4.5,
              numReviews: 12,
              price: 9.99,
              countInStock: 10,
              reviews: [],
              __v: 0,
              createdAt: '2023-08-11T04:42:06.695Z',
              updatedAt: '2023-08-11T04:42:06.695Z',
              qty: 1,
            },
          ])
        );
      }),
    ],
  },
};
const Template = (args) => <CartScreen {...args} />;
export const Default = Template.bind({});

// export const AddOne =Template.bind({})
// AddOne.args= {
//     cartItems: [
//       {
//         _id: '64d5bc1ea651331f3e727f05',
//         user: '64d5bc1ea651331f3e727f01',
//         name: 'Rhinestone Cross Choker Necklace',
//         image: '/images/necklace-1.jpeg',
//         brand: 'Forever 21',
//         category: 'Jewelry',
//         description:
//           'A choker necklace featuring a cross pendant with allover rhinestone embellishments, Chain length: 70',
//         rating: 4.5,
//         numReviews: 12,
//         price: 9.99,
//         countInStock: 10,
//         reviews: [],
//         __v: 0,
//         createdAt: '2023-08-11T04:42:06.695Z',
//         updatedAt: '2023-08-11T04:42:06.695Z',
//         qty: 1,
//       },
//     ],
//   };
