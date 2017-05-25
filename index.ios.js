// Import a library to help create component
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

// Create component, flex: 1 style is to make the entire container fit whatever elements are in it including tall scrollables

const App = () => (
  <View style={{ flex: 1 }}>
    <Header headerText={'Albums'} />
    <AlbumList />
  </View>
);

// Render it to device

AppRegistry.registerComponent('albums', () => App);
