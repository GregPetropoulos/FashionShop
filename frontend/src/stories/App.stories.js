import App from '../App'
export default {
    title:'Root/App',
    component:App,
  tags: ['autodocs'],
}

const Template = args=>  <App {...args}/>
export const Default = Template.bind({})