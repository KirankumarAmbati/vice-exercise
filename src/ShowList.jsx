import React from 'react';
import PropTypes from 'prop-types';

const ShowList = ({ shows }) => (
  <ul>
    {shows.map(({ name, id }) => <li key={id}>{name}--{id}</li>)}
  </ul>
);

export default ShowList;

ShowList.propTypes = {
  shows: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
  })),
};

ShowList.defaultProps = {
  shows: [],
};
