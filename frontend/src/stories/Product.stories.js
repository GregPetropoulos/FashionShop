import Product from '../../src/components/Product';
export default {
  title: 'Components/Product',
  component: Product,
  tags: ['autodocs'],
  args: {
    product: {
      _id: '64d5bc1ea651331f3e727f05',
      user: '64d5bc1ea651331f3e727f01',
      name: 'Rhinestone Cross Choker Necklace',
      image: '/images/necklace-1.jpeg',
      brand: 'Forever 21',
      category: 'Jewelry',
      description:
        'A choker necklace featuring a cross pendant with allover rhinestone embellishments, Chain length: 70".',
      rating: 4.5,
      numReviews: 12,
      price: 9.99,
      countInStock: 10,
      reviews: [],
      __v: 0,
      createdAt: '2023-08-11T04:42:06.695Z',
      updatedAt: '2023-08-11T04:42:06.695Z',
    },
  },
  argTypes: { product: { description: 'The product card with details of a single project' } },
};
export const Default = (args) => <Product {...args} />;
