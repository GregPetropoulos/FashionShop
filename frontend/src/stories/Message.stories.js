import Message from '../../src/components/Message';

export default {
  title: 'Components/Message',
  component: Message,
  tags: ['autodocs'],
  args: { children: 'Enter message here' },
  argTypes: {
    variant: {
      options: ['info', 'primary', 'secondary', 'success', 'warning', 'danger', 'light', 'dark'],
      control: { type: 'radio' },
    },
  },
};

export const Default = (args) => <Message {...args} />;
