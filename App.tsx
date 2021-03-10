import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Provider } from 'react-redux';
import store from './Redux/store';
import Navigation from './Routes/Navigation';

export default function App() {
  return (
    <Provider store={store}>
      <Navigation/>
    </Provider>
  );
}
