import React from 'react';
import PropTypes from 'prop-types';

const FeaturedShow = props => (
  <h1>{props && props.show ? props.show.name : 'Placeholder'}</h1>
);

export default FeaturedShow;

// FeaturedShow.propTypes = {
//   name: PropTypes.string,
// };

// FeaturedShow.defaultProps = {
//   name: 'Placeholder',
// };
