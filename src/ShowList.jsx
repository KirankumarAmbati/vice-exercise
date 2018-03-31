/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';

const base = 'show-list';
const ShowList = ({ handler, activeIndex, rightBound }) => {
  const items = Array.from({ length: 5 }, (el, i) => {
    const shift = activeIndex + -2 + i;
    const hide = shift < 0 || shift >= rightBound;

    return (
      <li
        key={i}
        onClick={() => handler(shift)}
        className={`item${hide ? ' hide' : ''}`}
      />
    );
  });

  return (
    <div className={base}>
      <ul className={`${base}--items`}>{items}</ul>
      <div className={`${base}--page`}>{activeIndex + 1}</div>
    </div>
  );
};

export default ShowList;

ShowList.propTypes = {
  handler: PropTypes.func.isRequired,
  activeIndex: PropTypes.number.isRequired,
  rightBound: PropTypes.number.isRequired,
};
