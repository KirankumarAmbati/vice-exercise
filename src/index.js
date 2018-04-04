import React from 'react';
import { render } from 'react-dom';
import ShowContainer from 'containers/ShowContainer';
import '../styles/app.less';

const App = () => (
  <ShowContainer />
);

export default App;

render(<App />, document.getElementById('app'));
