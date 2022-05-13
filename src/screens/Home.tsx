import {FlatList, SafeAreaView} from 'react-native';
import React, {useState, useEffect} from 'react';
import Separator from '../components/Separator';
import NewsFeedItem from '../components/NewsFeedItem';

const Home = () => {
  const [newsList, setNewsList] = useState([]);

  useEffect(() => {
    fetchNewsList();
  }, []);
  const fetchNewsList = async () => {
    const response = await fetch(
      'https://newsapi.org/v2/top-headlines?country=us&apiKey=aafd74d2a88645f3bfe8b4e35ce2a757',
    );
    const respJson = await response.json();
    setNewsList(respJson.articles);
  };

  return (
    <SafeAreaView>
      <FlatList
        data={newsList}
        keyExtractor={news => news.title}
        renderItem={({item, index}) => <NewsFeedItem item={item} />}
        ItemSeparatorComponent={Separator}
      />
    </SafeAreaView>
  );
};

export default Home;
