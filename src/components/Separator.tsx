import {StyleSheet, View} from 'react-native';
import React from 'react';
import colors from '../config/themes/colors';

const Separator = () => {
  return <View style={styles.separator} />;
};

const styles = StyleSheet.create({
  separator: {
    width: '100%',
    height: 1,
    backgroundColor: colors.medium,
  },
});

export default Separator;
