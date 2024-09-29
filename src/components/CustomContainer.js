import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import React from 'react';

const CustomContainer = ({children}) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#fff" barStyle={'dark-content'} />
      {children}
    </SafeAreaView>
  );
};

export default CustomContainer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
});
