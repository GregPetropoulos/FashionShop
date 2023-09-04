import React from 'react';
import { Helmet } from 'react-helmet-async';
import PropTypes from 'prop-types';

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keywords' content={keywords} />
    </Helmet>
  );
};

Meta.defaultProps = {
  title: 'Welcome to the Fashion Shop',
  description: 'We sell the best women fashion products',
  keywords: 'Dress,women apparel, high fashion, quality fashion',
};
Meta.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  keywords: PropTypes.string,
};
export default Meta;
