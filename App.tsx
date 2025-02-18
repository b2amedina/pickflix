import React from 'react';
import { Provider } from 'react-redux';
import Home from './src/home/Home';
import store from './src/store/store';

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}

export default App;
