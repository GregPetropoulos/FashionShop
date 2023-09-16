import ProfileScreen from '../screens/ProfileScreen';
import {rest} from 'msw'
export default {
  title: 'Screens/ProfileScreen',
  component: ProfileScreen,
  tags: ['autodocs'],
  args: {
    userInfo: {
      _id: '64d5bc1ea651331f3e727f02',
      name: 'John Doe',
      email: 'john@email.com',
      isAdmin: false,
    },
    isLoading:false,
    error:{}
  },
  parameters: {
    msw: [
      rest.get('http://localhost:6006/api/orders/mine', (_req, res, ctx) => {
        return res(
          ctx.json([
            {
                shippingAddress: {
                    address: "1239 Main Street",
                    city: "Hometown",
                    postalCode: "12345",
                    country: "USA"
                },
                _id: "64d8550faeea55d820453365",
                user: "64d5bc1ea651331f3e727f02",
                orderItems: [
                    {
                        name: "Collared Zip-Up Mini Dress",
                        qty: 1,
                        image: "/images/womens-dress-3.webp",
                        price: 29.99,
                        product: "64d5bc1ea651331f3e727f09",
                        _id: "64d8550faeea55d820453366"
                    },
                    {
                        name: "Ruffle-Trim Maxi Dress",
                        qty: 1,
                        image: "/images/womens-dress-1.jpg",
                        price: 48.99,
                        product: "64d5bc1ea651331f3e727f07",
                        _id: "64d8550faeea55d820453367"
                    }
                ],
                paymentMethod: "PayPal",
                itemsPrice: 78.98,
                taxPrice: 11.85,
                shippingPrice: 10,
                totalPrice: 100.83,
                isPaid: false,
                isDelivered: false,
                createdAt: "2023-08-13T03:59:11.912Z",
                updatedAt: "2023-08-13T03:59:11.912Z",
                __v: 0
            },
            {
                shippingAddress: {
                    address: "1239 Main Street",
                    city: "Hometown",
                    postalCode: "12345",
                    country: "USA"
                },
                _id: "64d859ccaeea55d820453379",
                user: "64d5bc1ea651331f3e727f02",
                orderItems: [
                    {
                        name: "Collared Zip-Up Mini Dress",
                        qty: 1,
                        image: "/images/womens-dress-3.webp",
                        price: 29.99,
                        product: "64d5bc1ea651331f3e727f09",
                        _id: "64d859ccaeea55d82045337a"
                    },
                    {
                        name: "Ruffle-Trim Maxi Dress",
                        qty: 1,
                        image: "/images/womens-dress-1.jpg",
                        price: 48.99,
                        product: "64d5bc1ea651331f3e727f07",
                        _id: "64d859ccaeea55d82045337b"
                    }
                ],
                paymentMethod: "PayPal",
                itemsPrice: 78.98,
                taxPrice: 11.85,
                shippingPrice: 10,
                totalPrice: 100.83,
                isPaid: false,
                isDelivered: false,
                createdAt: "2023-08-13T04:19:24.114Z",
                updatedAt: "2023-08-13T04:19:24.114Z",
                __v: 0
            },
            {
                shippingAddress: {
                    address: "1239 Main Street",
                    city: "Hometown",
                    postalCode: "12345",
                    country: "USA"
                },
                _id: "64d85a92aeea55d820453383",
                user: "64d5bc1ea651331f3e727f02",
                orderItems: [
                    {
                        name: "Collared Zip-Up Mini Dress",
                        qty: 1,
                        image: "/images/womens-dress-3.webp",
                        price: 29.99,
                        product: "64d5bc1ea651331f3e727f09",
                        _id: "64d85a92aeea55d820453384"
                    },
                    {
                        name: "Ruffle-Trim Maxi Dress",
                        qty: 1,
                        image: "/images/womens-dress-1.jpg",
                        price: 48.99,
                        product: "64d5bc1ea651331f3e727f07",
                        _id: "64d85a92aeea55d820453385"
                    }
                ],
                paymentMethod: "PayPal",
                itemsPrice: 78.98,
                taxPrice: 11.85,
                shippingPrice: 10,
                totalPrice: 100.83,
                isPaid: false,
                isDelivered: false,
                createdAt: "2023-08-13T04:22:42.774Z",
                updatedAt: "2023-08-13T04:22:42.774Z",
                __v: 0
            },
            {
                shippingAddress: {
                    address: "1111 Main St",
                    city: "Anytown",
                    postalCode: "11122",
                    country: "USA"
                },
                paymentResult: {
                    id: "6HV08912MW2711013",
                    status: "COMPLETED",
                    update_time: "2023-08-14T01:58:58Z",
                    email_address: "sb-6kqlj26902530@personal.example.com"
                },
                _id: "64d989d20081247f8ca6e56b",
                user: "64d5bc1ea651331f3e727f02",
                orderItems: [
                    {
                        name: "Ruffle-Trim Maxi Dress",
                        qty: 1,
                        image: "/images/womens-dress-1.jpg",
                        price: 48.99,
                        product: "64d5bc1ea651331f3e727f07",
                        _id: "64d989d20081247f8ca6e56c"
                    }
                ],
                paymentMethod: "PayPal",
                itemsPrice: 48.99,
                taxPrice: 7.35,
                shippingPrice: 10,
                totalPrice: 66.34,
                isPaid: true,
                isDelivered: true,
                createdAt: "2023-08-14T01:56:34.110Z",
                updatedAt: "2023-08-14T02:03:10.844Z",
                __v: 0,
                paidAt: "2023-08-14T01:58:59.141Z",
                deliveredAt: "2023-08-14T02:03:10.841Z"
            },
            {
                shippingAddress: {
                    address: "1234 main",
                    city: "new york",
                    postalCode: "12345",
                    country: "USA"
                },
                _id: "64f40bedaf84f1ccd78337e1",
                user: "64d5bc1ea651331f3e727f02",
                orderItems: [
                    {
                        name: "Mid Rise Baby Boot Jeans with Washwell",
                        qty: 1,
                        image: "/images/womens-bottoms-1.webp",
                        price: 89.99,
                        product: "64d5bc1ea651331f3e727f06",
                        _id: "64f40bedaf84f1ccd78337e2"
                    }
                ],
                paymentMethod: "PayPal",
                itemsPrice: 89.99,
                taxPrice: 13.5,
                shippingPrice: 10,
                totalPrice: 113.49,
                isPaid: false,
                isDelivered: false,
                createdAt: "2023-09-03T04:30:37.243Z",
                updatedAt: "2023-09-03T04:30:37.243Z",
                __v: 0
            },
            {
                shippingAddress: {
                    address: "1234 main",
                    city: "new york",
                    postalCode: "12345",
                    country: "USA"
                },
                _id: "64f40f16af84f1ccd78337f1",
                user: "64d5bc1ea651331f3e727f02",
                orderItems: [
                    {
                        name: "Mid Rise Baby Boot Jeans with Washwell",
                        qty: 1,
                        image: "/images/womens-bottoms-1.webp",
                        price: 89.99,
                        product: "64d5bc1ea651331f3e727f06",
                        _id: "64f40f16af84f1ccd78337f2"
                    },
                    {
                        name: "Rhinestone Cross Choker Necklace",
                        qty: 1,
                        image: "/images/necklace-1.jpeg",
                        price: 9.99,
                        product: "64d5bc1ea651331f3e727f05",
                        _id: "64f40f16af84f1ccd78337f3"
                    }
                ],
                paymentMethod: "PayPal",
                itemsPrice: 99.98,
                taxPrice: 15,
                shippingPrice: 10,
                totalPrice: 124.98,
                isPaid: false,
                isDelivered: false,
                createdAt: "2023-09-03T04:44:06.663Z",
                updatedAt: "2023-09-03T04:44:06.663Z",
                __v: 0
            },
            {
                shippingAddress: {
                    address: "1234 main",
                    city: "new york",
                    postalCode: "12345",
                    country: "USA"
                },
                paymentResult: {
                    id: "4XW13126JW9761905",
                    status: "COMPLETED",
                    update_time: "2023-09-03T05:13:18Z",
                    email_address: "sb-6kqlj26902530@personal.example.com"
                },
                _id: "64f415269e7717caadcd14bc",
                user: "64d5bc1ea651331f3e727f02",
                orderItems: [
                    {
                        name: "Mid Rise Baby Boot Jeans with Washwell",
                        qty: 1,
                        image: "/images/womens-bottoms-1.webp",
                        price: 89.99,
                        product: "64d5bc1ea651331f3e727f06",
                        _id: "64f415269e7717caadcd14bd"
                    }
                ],
                paymentMethod: "PayPal",
                itemsPrice: 89.99,
                taxPrice: 13.5,
                shippingPrice: 10,
                totalPrice: 113.49,
                isPaid: true,
                isDelivered: false,
                createdAt: "2023-09-03T05:09:58.824Z",
                updatedAt: "2023-09-03T05:13:19.672Z",
                __v: 0,
                paidAt: "2023-09-03T05:13:19.670Z"
            },
            {
                shippingAddress: {
                    address: "1234 main st ",
                    city: "raleigh",
                    postalCode: "12345",
                    country: "US"
                },
                _id: "64f5040d5390deed1bb67008",
                user: "64d5bc1ea651331f3e727f02",
                orderItems: [
                    {
                        name: "Rhinestone Cross Choker Necklace",
                        qty: 1,
                        image: "/images/necklace-1.jpeg",
                        price: 9.99,
                        product: "64d5bc1ea651331f3e727f05",
                        _id: "64f5040d5390deed1bb67009"
                    }
                ],
                paymentMethod: "PayPal",
                itemsPrice: 9.99,
                taxPrice: 1.5,
                shippingPrice: 10,
                totalPrice: 21.49,
                isPaid: false,
                isDelivered: false,
                createdAt: "2023-09-03T22:09:17.531Z",
                updatedAt: "2023-09-03T22:09:17.531Z",
                __v: 0
            }
        ])
        );
      }),
    ],
  },
};
const Template = (args) => <ProfileScreen {...args} />;
export const Default = Template.bind({});
// const orders=[
//     {
//         shippingAddress: {
//             address: "1239 Main Street",
//             city: "Hometown",
//             postalCode: "12345",
//             country: "USA"
//         },
//         _id: "64d8550faeea55d820453365",
//         user: "64d5bc1ea651331f3e727f02",
//         orderItems: [
//             {
//                 name: "Collared Zip-Up Mini Dress",
//                 qty: 1,
//                 image: "/images/womens-dress-3.webp",
//                 price: 29.99,
//                 product: "64d5bc1ea651331f3e727f09",
//                 _id: "64d8550faeea55d820453366"
//             },
//             {
//                 name: "Ruffle-Trim Maxi Dress",
//                 qty: 1,
//                 image: "/images/womens-dress-1.jpg",
//                 price: 48.99,
//                 product: "64d5bc1ea651331f3e727f07",
//                 _id: "64d8550faeea55d820453367"
//             }
//         ],
//         paymentMethod: "PayPal",
//         itemsPrice: 78.98,
//         taxPrice: 11.85,
//         shippingPrice: 10,
//         totalPrice: 100.83,
//         isPaid: false,
//         isDelivered: false,
//         createdAt: "2023-08-13T03:59:11.912Z",
//         updatedAt: "2023-08-13T03:59:11.912Z",
//         __v: 0
//     },
//     {
//         shippingAddress: {
//             address: "1239 Main Street",
//             city: "Hometown",
//             postalCode: "12345",
//             country: "USA"
//         },
//         _id: "64d859ccaeea55d820453379",
//         user: "64d5bc1ea651331f3e727f02",
//         orderItems: [
//             {
//                 name: "Collared Zip-Up Mini Dress",
//                 qty: 1,
//                 image: "/images/womens-dress-3.webp",
//                 price: 29.99,
//                 product: "64d5bc1ea651331f3e727f09",
//                 _id: "64d859ccaeea55d82045337a"
//             },
//             {
//                 name: "Ruffle-Trim Maxi Dress",
//                 qty: 1,
//                 image: "/images/womens-dress-1.jpg",
//                 price: 48.99,
//                 product: "64d5bc1ea651331f3e727f07",
//                 _id: "64d859ccaeea55d82045337b"
//             }
//         ],
//         paymentMethod: "PayPal",
//         itemsPrice: 78.98,
//         taxPrice: 11.85,
//         shippingPrice: 10,
//         totalPrice: 100.83,
//         isPaid: false,
//         isDelivered: false,
//         createdAt: "2023-08-13T04:19:24.114Z",
//         updatedAt: "2023-08-13T04:19:24.114Z",
//         __v: 0
//     },
//     {
//         shippingAddress: {
//             address: "1239 Main Street",
//             city: "Hometown",
//             postalCode: "12345",
//             country: "USA"
//         },
//         _id: "64d85a92aeea55d820453383",
//         user: "64d5bc1ea651331f3e727f02",
//         orderItems: [
//             {
//                 name: "Collared Zip-Up Mini Dress",
//                 qty: 1,
//                 image: "/images/womens-dress-3.webp",
//                 price: 29.99,
//                 product: "64d5bc1ea651331f3e727f09",
//                 _id: "64d85a92aeea55d820453384"
//             },
//             {
//                 name: "Ruffle-Trim Maxi Dress",
//                 qty: 1,
//                 image: "/images/womens-dress-1.jpg",
//                 price: 48.99,
//                 product: "64d5bc1ea651331f3e727f07",
//                 _id: "64d85a92aeea55d820453385"
//             }
//         ],
//         paymentMethod: "PayPal",
//         itemsPrice: 78.98,
//         taxPrice: 11.85,
//         shippingPrice: 10,
//         totalPrice: 100.83,
//         isPaid: false,
//         isDelivered: false,
//         createdAt: "2023-08-13T04:22:42.774Z",
//         updatedAt: "2023-08-13T04:22:42.774Z",
//         __v: 0
//     },
//     {
//         shippingAddress: {
//             address: "1111 Main St",
//             city: "Anytown",
//             postalCode: "11122",
//             country: "USA"
//         },
//         paymentResult: {
//             id: "6HV08912MW2711013",
//             status: "COMPLETED",
//             update_time: "2023-08-14T01:58:58Z",
//             email_address: "sb-6kqlj26902530@personal.example.com"
//         },
//         _id: "64d989d20081247f8ca6e56b",
//         user: "64d5bc1ea651331f3e727f02",
//         orderItems: [
//             {
//                 name: "Ruffle-Trim Maxi Dress",
//                 qty: 1,
//                 image: "/images/womens-dress-1.jpg",
//                 price: 48.99,
//                 product: "64d5bc1ea651331f3e727f07",
//                 _id: "64d989d20081247f8ca6e56c"
//             }
//         ],
//         paymentMethod: "PayPal",
//         itemsPrice: 48.99,
//         taxPrice: 7.35,
//         shippingPrice: 10,
//         totalPrice: 66.34,
//         isPaid: true,
//         isDelivered: true,
//         createdAt: "2023-08-14T01:56:34.110Z",
//         updatedAt: "2023-08-14T02:03:10.844Z",
//         __v: 0,
//         paidAt: "2023-08-14T01:58:59.141Z",
//         deliveredAt: "2023-08-14T02:03:10.841Z"
//     },
//     {
//         shippingAddress: {
//             address: "1234 main",
//             city: "new york",
//             postalCode: "12345",
//             country: "USA"
//         },
//         _id: "64f40bedaf84f1ccd78337e1",
//         user: "64d5bc1ea651331f3e727f02",
//         orderItems: [
//             {
//                 name: "Mid Rise Baby Boot Jeans with Washwell",
//                 qty: 1,
//                 image: "/images/womens-bottoms-1.webp",
//                 price: 89.99,
//                 product: "64d5bc1ea651331f3e727f06",
//                 _id: "64f40bedaf84f1ccd78337e2"
//             }
//         ],
//         paymentMethod: "PayPal",
//         itemsPrice: 89.99,
//         taxPrice: 13.5,
//         shippingPrice: 10,
//         totalPrice: 113.49,
//         isPaid: false,
//         isDelivered: false,
//         createdAt: "2023-09-03T04:30:37.243Z",
//         updatedAt: "2023-09-03T04:30:37.243Z",
//         __v: 0
//     },
//     {
//         shippingAddress: {
//             address: "1234 main",
//             city: "new york",
//             postalCode: "12345",
//             country: "USA"
//         },
//         _id: "64f40f16af84f1ccd78337f1",
//         user: "64d5bc1ea651331f3e727f02",
//         orderItems: [
//             {
//                 name: "Mid Rise Baby Boot Jeans with Washwell",
//                 qty: 1,
//                 image: "/images/womens-bottoms-1.webp",
//                 price: 89.99,
//                 product: "64d5bc1ea651331f3e727f06",
//                 _id: "64f40f16af84f1ccd78337f2"
//             },
//             {
//                 name: "Rhinestone Cross Choker Necklace",
//                 qty: 1,
//                 image: "/images/necklace-1.jpeg",
//                 price: 9.99,
//                 product: "64d5bc1ea651331f3e727f05",
//                 _id: "64f40f16af84f1ccd78337f3"
//             }
//         ],
//         paymentMethod: "PayPal",
//         itemsPrice: 99.98,
//         taxPrice: 15,
//         shippingPrice: 10,
//         totalPrice: 124.98,
//         isPaid: false,
//         isDelivered: false,
//         createdAt: "2023-09-03T04:44:06.663Z",
//         updatedAt: "2023-09-03T04:44:06.663Z",
//         __v: 0
//     },
//     {
//         shippingAddress: {
//             address: "1234 main",
//             city: "new york",
//             postalCode: "12345",
//             country: "USA"
//         },
//         paymentResult: {
//             id: "4XW13126JW9761905",
//             status: "COMPLETED",
//             update_time: "2023-09-03T05:13:18Z",
//             email_address: "sb-6kqlj26902530@personal.example.com"
//         },
//         _id: "64f415269e7717caadcd14bc",
//         user: "64d5bc1ea651331f3e727f02",
//         orderItems: [
//             {
//                 name: "Mid Rise Baby Boot Jeans with Washwell",
//                 qty: 1,
//                 image: "/images/womens-bottoms-1.webp",
//                 price: 89.99,
//                 product: "64d5bc1ea651331f3e727f06",
//                 _id: "64f415269e7717caadcd14bd"
//             }
//         ],
//         paymentMethod: "PayPal",
//         itemsPrice: 89.99,
//         taxPrice: 13.5,
//         shippingPrice: 10,
//         totalPrice: 113.49,
//         isPaid: true,
//         isDelivered: false,
//         createdAt: "2023-09-03T05:09:58.824Z",
//         updatedAt: "2023-09-03T05:13:19.672Z",
//         __v: 0,
//         paidAt: "2023-09-03T05:13:19.670Z"
//     },
//     {
//         shippingAddress: {
//             address: "1234 main st ",
//             city: "raleigh",
//             postalCode: "12345",
//             country: "US"
//         },
//         _id: "64f5040d5390deed1bb67008",
//         user: "64d5bc1ea651331f3e727f02",
//         orderItems: [
//             {
//                 name: "Rhinestone Cross Choker Necklace",
//                 qty: 1,
//                 image: "/images/necklace-1.jpeg",
//                 price: 9.99,
//                 product: "64d5bc1ea651331f3e727f05",
//                 _id: "64f5040d5390deed1bb67009"
//             }
//         ],
//         paymentMethod: "PayPal",
//         itemsPrice: 9.99,
//         taxPrice: 1.5,
//         shippingPrice: 10,
//         totalPrice: 21.49,
//         isPaid: false,
//         isDelivered: false,
//         createdAt: "2023-09-03T22:09:17.531Z",
//         updatedAt: "2023-09-03T22:09:17.531Z",
//         __v: 0
//     }
// ]
