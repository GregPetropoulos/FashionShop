import Meta from '../../src/components/Meta';
import { Helmet } from 'react-helmet-async';

export default {
  title: 'Components/Meta',
  component: Meta,
  tags: ['autodocs'],
};

export const Default=args => <Meta {...args}/>
