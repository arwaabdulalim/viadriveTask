import {StyleSheet, View, TextInput} from 'react-native';
import React, {useState} from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import colors from '../config/themes/colors';

const SearchBar = props => {
  const [search, setSearch] = useState('');
  const searchFilter = text => {
    if (text) {
      const filteredNews = props.data.filter(item => {
        const itemData = item.title
          ? item.title.toUpperCase()
          : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.includes(textData);
      });
      setSearch(text);
      props.setData(filteredNews);
    } else {
      setSearch(text);
    }
  };
  return (
    <View style={styles.container}>
      <MaterialIcons
        name="search"
        size={25}
        color={colors.medium}
        style={styles.icon}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Search"
        value={search}
        onChangeText={text => {
          searchFilter(text);
        }}
      />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {justifyContent: 'center', alignItems: 'center'},
  icon: {position: 'absolute', top: 20, right: 50},
  textInput: {
    borderWidth: 1,
    width: '80%',
    height: 40,
    borderColor: colors.medium,
    borderRadius: 10,
    margin: 10,
    padding: 10,
    fontSize: 15,
  },
});
