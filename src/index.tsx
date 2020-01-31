import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'reset.css/reset.css'
import './index.css';

ReactDOM.render(<App />, document.getElementById('root'));

// HMR enabled
if(module.hot) {
  module.hot.accept("./App", () => {
    const App = require("./App").default;
    ReactDOM.render(
      <App />,
      document.getElementById('root')
    );
  });
}
