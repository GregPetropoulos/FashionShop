/* eslint-disable no-undef */
import React from 'react';
import Product from './Product';

describe('<Product />', () => {
  const product = {
    _id: '64d5bc1ea651331f3e727f09',
    user: '64d5bc1ea651331f3e727f01',
    image: {
      secure_url:
        'https://res.cloudinary.com/dzko4kn7x/image/upload/v1698727103/fashionShopProductImages/v0p2uot06hqkfx4v6cht.jpg',
    },
    name: 'Collared Zip-Up Mini Dress',
    brand: 'Forever21',
    category: 'Dress',
    description: `A canvas mini dress featuring a zip-front closure, plunging V-neckline, basic collar, seam detailing, cap sleeves, pleating, and a fit and flare silhouette. Content + Care - 100% cotton - Machine wash cold Size + Fit - Model is 5'7" and wearing a Small"`,
    rating: 3.5,
    numReviews: 10,
    price: 29.99,
    countInStock: 7,
    reviews: [],
    __v: 0,
    createdAt: '2023-08-11T04:42:06.696Z',
    updatedAt: '2023-10-31T04:38:23.273Z',
  };

  it('renders', () => {
    // cy.intercept('GET', '/api/product/64d5bc1ea651331f3e727f05/*', { fixture: 'product.json' }).as('getAProductWithId')
    // see: https://on.cypress.io/mounting-react
    cy.viewport(400, 750).mount(<Product product={product} />);
    // cy.wait('@getAProductWithId')
    cy.get('.card-img-top');
  });
});
