import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import React, {useContext} from 'react';
import themeContext from '../config/themes/themeContext';
import colors from '../config/themes/colors';

interface newsI {
  title: string;
  urlToImage: string;
  author: string;
  publishedAt: string;
  content: string;
}

const NewsDetails = (props: any) => {
  const {title, urlToImage, author, publishedAt, content}: newsI =
    props.route?.params?.item;
  const theme = useContext(themeContext);
  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{
            uri: urlToImage,
          }}
        />
        <View>
          <Text style={[styles.title, {color: theme.color}]}>{title}</Text>
          <Text style={[styles.desc, {color: theme.color}]}>
            Author: {author}
          </Text>
          <Text style={[styles.desc, {color: theme.color}]}>
            Published at: {publishedAt}
          </Text>
          <Text style={[styles.desc, {color: theme.color}]}>{content}</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default NewsDetails;

const styles = StyleSheet.create({
  container: {justifyContent: 'center', alignItems: 'center', margin: 10},
  image: {width: '90%', height: '60%', marginBottom: 10},
  title: {color: colors.black, fontWeight: 'bold', fontSize: 18},
  desc: {paddingTop: 15, fontSize: 15},
});
