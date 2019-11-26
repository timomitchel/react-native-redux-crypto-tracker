import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Header } from './src/components';
export default function App() {
  return (
    <View style={styles.container}>
      <Header/>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
