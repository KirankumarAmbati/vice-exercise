import React from 'react';
import PropTypes from 'prop-types';

const ShowList = ({ shows, handler }) => (
  <ul>
    {
      shows.map(({ name, id }) => <li key={id} onClick={e => handler(id)}>{name}--{id}</li>)
    }
  </ul>
);

export default ShowList;

ShowList.propTypes = {
  shows: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
  })),
  handler: PropTypes.func,
};

ShowList.defaultProps = {
  shows: [],
  handler: () => { },
};
