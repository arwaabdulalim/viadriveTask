import {StyleSheet, View} from 'react-native';
import React from 'react';

const Separator = () => {
  return <View style={styles.separator} />;
};

const styles = StyleSheet.create({
  separator: {
    width: '100%',
    height: 1,
    backgroundColor: '#f2f2f2',
  },
});

export default Separator;
