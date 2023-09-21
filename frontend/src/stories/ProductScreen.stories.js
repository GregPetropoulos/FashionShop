import ProductScreen from '../screens/ProductScreen';
import { rest } from 'msw';

export default {
  title: 'Screens/ProductScreen',
  component: ProductScreen,
  tags: ['autodocs'],
  args: {
    userInfo: {
      _id: '64d5bc1ea651331f3e727f02',
      name: 'John Doe',
      email: 'john@email.com',
      isAdmin: false,
    },
    productId: '64d5bc1ea651331f3e727f09',
    isLoading: false,
    error: undefined,
  },
  parameters: {
    msw: [
      rest.get('http://localhost:6006/api/products/64d5bc1ea651331f3e727f09', (_req, res, ctx) => {
        return res(
          ctx.delay(800),
          ctx.json({
            _id: '64d5bc1ea651331f3e727f09',
            user: '64d5bc1ea651331f3e727f01',
            name: 'Collared Zip-Up Mini Dress',
            image: '/images/womens-dress-3.webp',
            brand: 'Forever21',
            category: 'Dress',
            description:
              'A canvas mini dress featuring a zip-front closure, plunging V-neckline, basic collar, seam detailing, cap sleeves, pleating, and a fit and flare silhouette.\n    Content + Care\n    - 100% cotton\n    \n    - Machine wash cold\n    \n    Size + Fit\n    - Model is 5\'7" and wearing a Small',
            rating: 3.5,
            numReviews: 10,
            price: 29.99,
            countInStock: 7,
            reviews: [],
            __v: 0,
            createdAt: '2023-08-11T04:42:06.696Z',
            updatedAt: '2023-08-11T04:42:06.696Z',
          })
        );
      }),
      rest.get('/hot-update/*', (req) => req.passthrough()),
    ],
  },
};
const Template = (args) => <ProductScreen {...args} />;
export const Default = Template.bind({});
