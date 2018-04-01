import React from 'react';
import ReactDOM from 'react-dom';
import ShowContainer from 'containers/ShowContainer';
import styles from '../styles/app.less'; // eslint-disable-line no-unused-vars

const App = () => (
  <ShowContainer /> // eslint-disable-line react/jsx-filename-extension
);

export default App;

ReactDOM.render(<App />, document.getElementById('app'));
