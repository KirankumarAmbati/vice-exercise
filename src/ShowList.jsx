import React from 'react';
import PropTypes from 'prop-types';
import styles from './showList.less';

const ShowList = ({ shows, handler }) => (
  <div className="showList">
    <div onClick={() => handler(-2)} className="item skinny" />
    <div onClick={() => handler(-1)} className="item" />
    <div className="item focused" />
    <div onClick={() => handler(1)} className="item" />
    <div onClick={() => handler(2)} className="item skinny" />
  </div>
);

export default ShowList;
