import {StyleSheet, Text, View, Image} from 'react-native';
import React, {useContext} from 'react';
import themeContext from '../config/themes/themeContext';
import colors from '../config/themes/colors';

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
  image: {width: '90%', height: '60%', marginBottom: 10},
  title: {color: colors.black, fontWeight: 'bold', fontSize: 18},
  desc: {paddingTop: 15, fontSize: 15},
});
