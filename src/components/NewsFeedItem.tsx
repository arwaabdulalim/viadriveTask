import {Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import React from 'react';

const NewsFeedItem = ({...props}: {props: any}) => {
  return (
    <TouchableOpacity style={styles.itemContainer} onPress={() => {}}>
      <Image
        style={styles.image}
        source={{
          uri: props.item.urlToImage,
        }}
      />
      <Text style={styles.text}>{props.item.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  itemContainer: {flexDirection: 'row'},
  image: {width: '20%', height: 80},
  text: {width: '80%', marginLeft: 5},
});
export default NewsFeedItem;
