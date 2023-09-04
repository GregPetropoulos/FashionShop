import Header from '../components/Header';
// import LinkTo from '@storybook/addon-links/react';//May need this later

export default {
  title: 'Components/Header',
  component: Header,
  tags: ['autodocs'],
};
export const Default = (args) => <Header {...args} />;

export const AuthUser = (args) => <Header {...args} />;
AuthUser.args = {
  userInfo: {
    _id: '64d5bc1ea651331f3e727f02',
    name: 'John Doe',
    email: 'john@email.com',
    isAdmin: false,
  },
};
