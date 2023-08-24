import Meta from '../../src/components/Meta';
import { Helmet } from 'react-helmet-async';

export default {
  title: 'WIP/Components/Meta',
  component: Meta,
  argTypes: {
    title: 'Welcome to TechShop',
    description: 'We sell the best tech supplies',
    keywords: 'Electronics, buy electronics,cheap electronics',
  },
  tags: ['autodocs'],
};

export const Default=args => <Meta {...args}/>
