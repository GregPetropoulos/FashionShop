import RegisterScreen from '../screens/RegisterScreen';

export default {
  title: 'Screens/RegisterScreen',
  component: RegisterScreen,
  tags: ['autodocs'],
};
const Template = (args) => <RegisterScreen {...args} />;
export const Default = Template.bind({});
