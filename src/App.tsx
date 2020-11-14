import React from 'react';
import { Provider } from 'react-redux';
import Home from './components/Home';
import UserSettingsContext, { createInitialContext } from './contexts/user-settings';
import { loadUserSettings } from '../lib'; import userSettings from './contexts/user-settings';
;

// import Counter from './containers/Counter';
// import store from './store';

export default function App() {
  return (
    // <Provider store={store}>
    //   <Counter />
    // </Provider>
    <UserSettingsContext.Provider value={userSettings}>
      <Home />
    </UserSettingsContext.Provider>
  );
}
