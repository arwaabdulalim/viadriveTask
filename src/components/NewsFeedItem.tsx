import {Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import React from 'react';
interface itemI {
  urlToImage: string;
  title: string;
}

const NewsFeedItem = ({navigation, item}: {item: itemI; navigation: any}) => {
  return (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={() => navigation.navigate('News Details', {item})}>
      <Image
        style={styles.image}
        source={{
          uri: item.urlToImage,
        }}
      />
      <Text style={styles.text}>{item.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  itemContainer: {flexDirection: 'row'},
  image: {width: '20%', height: 80},
  text: {width: '80%', marginLeft: 5},
});
export default NewsFeedItem;
