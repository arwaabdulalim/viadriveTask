import {StyleSheet, View} from 'react-native';
import React from 'react';
import LanguageSelector from '../components/LanguageSelector';

const Settings = () => {
  return (
    <View style={styles.container}>
      <LanguageSelector />
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({
  container: {flex: 1},
});
