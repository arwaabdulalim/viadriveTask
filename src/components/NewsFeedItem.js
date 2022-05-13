import {Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';

const NewsFeedItem = ({...props}: {props: any}) => {
  return (
    <TouchableOpacity style={{flexDirection: 'row'}} onPress={() => {}}>
      <Image
        style={{width: '20%', height: 80}}
        source={{
          uri: props.item.urlToImage,
        }}
      />
      <Text style={{width: '80%', marginLeft: 5}}>{props.item.title}</Text>
    </TouchableOpacity>
  );
};

export default NewsFeedItem;
