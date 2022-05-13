import {DefaultTheme, DarkTheme} from '@react-navigation/native';
import 'react-native-gesture-handler';
import React, {useState} from 'react';
import {Appearance} from 'react-native';
import Router from './config/Navigation/Router';
import themeContext from './config/themes/themeContext';
import theme from './config/themes/theme';
import './config/constants/IMLocalize';

const App = () => {
  const [mode, setMode] = useState(Appearance.getColorScheme());

  Appearance.addChangeListener(scheme => {
    setMode(scheme.colorScheme);
  });
  return (
    <themeContext.Provider value={mode === 'dark' ? theme.dark : theme.light}>
      <Router mode={mode === 'dark' ? DarkTheme : DefaultTheme} />
    </themeContext.Provider>
  );
};
export default App;
