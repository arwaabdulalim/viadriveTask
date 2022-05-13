import {StyleSheet, Text, View, Image} from 'react-native';
import React, {useContext} from 'react';
import themeContext from '../config/themes/themeContext';

const NewsDetails = props => {
  const {title, description, urlToImage} = props.route?.params?.item;
  const theme = useContext(themeContext);
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: urlToImage,
        }}
      />
      <View>
        <Text style={[styles.title, {color: theme.color}]}>{title}</Text>
        <Text style={[styles.desc, {color: theme.color}]}>{description}</Text>
      </View>
    </View>
  );
};

export default NewsDetails;

const styles = StyleSheet.create({
  container: {justifyContent: 'center', alignItems: 'center', margin: 10},
  image: {width: '70%', height: 150, margin: 10},
  title: {color: 'black', fontWeight: 'bold'},
  desc: {paddingTop: 15},
});
