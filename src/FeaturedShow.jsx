import React from 'react';
import PropTypes from 'prop-types';

const base = 'featured-show';

const FeaturedShow = ({ show }) => (
  <div className={base}>
    <img
      className={`${base}--image`}
      src={show.product_image_url}
      alt={`${show.title}`}
    />
    <h3 className={`${base}--meta`}>{`${show.episodes} episodes`}</h3>
    <h2 className={`${base}--title`}>{show.title}</h2>
  </div>
);

export default FeaturedShow;

FeaturedShow.propTypes = {
  show: PropTypes.shape({
    product_image_url: PropTypes.string.isRequired,
    episodes: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};
