/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import { Provider } from 'react-redux';
import Routes from './src/Navigations/Routes';
import ScreenWrapper from './src/utils/ScreenWrapper';
import store from './src/store/store';

const App = () => {

  return (
    <Provider store={store}>
      <ScreenWrapper>
        <Routes />
      </ScreenWrapper>
    </Provider>
  );
};

export default App;
