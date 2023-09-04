import HomeScreen from '../screens/HomeScreen';
export default {
  title: 'Screens/HomeScreen',
  component: HomeScreen,
  tags: ['autodocs'],
};
// export const Default = args=> <HomeScreen {...args}/>
export const Default = {
  render: (args) => <HomeScreen {...args} />,
};
