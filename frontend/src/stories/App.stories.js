import App from '../App';

export default {
  title: 'App',
  component: App,
  tags: ['autodocs'],
};
// export const Default = args=> <HomeScreen {...args}/>
export const Default = {
  render: (args) => <App {...args} />,
};
