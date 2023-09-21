import LoginScreen from '../screens/LoginScreen';

export default {
  title: 'Screens/LoginScreen',
  component: LoginScreen,
  tags: ['autodocs'],
};
const Template = (args) => <LoginScreen {...args} />;
export const Default = Template.bind({});

export const LoggedOut = {};
