import HomeScreen from '../screens/HomeScreen';
export default {
  title: 'Screens/HomeScreen',
  component: HomeScreen,
  tags: ['autodocs'],
};
export const Default = args=> <HomeScreen {...args}/>
// export const Default = {
//     render: (args) => {
//         console.log(args,"ARGS")
//     return (<HomeScreen {...args}><Product/></HomeScreen>)},
// };

// // 👇 Imports the required stories
// import * as PageLayout from './PageLayout.stories';
// import * as DocumentHeader from './DocumentHeader.stories';
// import * as DocumentList from './DocumentList.stories';


// export const Simple = {
//   args: {
//     user: PageLayout.Simple.args.user,
//     document: DocumentHeader.Simple.args.document,
//     subdocuments: DocumentList.Simple.args.documents,
//   },
// };