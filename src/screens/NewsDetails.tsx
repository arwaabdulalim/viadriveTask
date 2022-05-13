import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const NewsDetails = props => {
  const {title, description, urlToImage} = props.route?.params?.item;
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: urlToImage,
        }}
      />
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.desc}>{description}</Text>
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
