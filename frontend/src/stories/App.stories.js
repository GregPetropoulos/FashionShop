import App from '../App'
export default {
    title:'Root/App',
    component:App
}

const Template = args=>  <App {...args}/>
export const Default = Template.bind({})