import Loader from '../../src/components/Loader';
import { Spinner } from 'react-bootstrap';
export default {
  title: 'Components/Loader',
  component: Loader,
  tags: ['autodocs'],
  argTypes: { role: { description: 'Should remain status for aria' } },
};

export const Default = (args) => <Loader {...args} />;
