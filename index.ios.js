// Import a library to help create component
import React from 'react';
import { AppRegistry } from 'react-native';
import Header from './src/components/header';

// Create component
const App = () => (
    <Header />
  );

// Render it to device

AppRegistry.registerComponent('albums', () => App);
