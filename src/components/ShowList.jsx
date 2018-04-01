import React from 'react';
import PropTypes from 'prop-types';

const base = 'show-list';
const ShowList = ({ handler, activeIndex, rightBound }) => {
  const items = Array.from({ length: 5 }, (el, i) => {
    const shift = activeIndex + -2 + i;
    const hide = shift < 0 || shift >= rightBound;

    return (
      <button
        tabIndex="0"
        key={i}
        onClick={() => handler(shift)}
        className={`item${hide ? ' hide' : ''}`}
      />
    );
  });

  return (
    <div className={base}>
      <div className={`${base}--items`}>{items}</div>
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
