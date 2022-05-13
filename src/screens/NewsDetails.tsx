import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const NewsDetails = () => {
  const {title, description, urlToImage} = {
    title: 'Title 1',
    description: 'dummy desc',
    urlToImage: 'https://reactnative.dev/img/tiny_logo.png',
  };
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: urlToImage,
        }}
      />
      <Text>{title}</Text>
      <Text>{description}</Text>
    </View>
  );
};

export default NewsDetails;

const styles = StyleSheet.create({
  container: {justifyContent: 'center', alignItems: 'center', margin: 10},
  image: {width: '70%', height: 150, margin: 10},
});
