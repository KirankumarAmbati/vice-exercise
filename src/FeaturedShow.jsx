import React from 'react';
import PropTypes from 'prop-types';

const FeaturedShow = ({ name }) => (
  <h1>{name}</h1>
);

export default FeaturedShow;

FeaturedShow.propTypes = {
  name: PropTypes.string,
};

FeaturedShow.defaultProps = {
  name: 'Placeholder',
};
