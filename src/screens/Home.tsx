import {FlatList, SafeAreaView} from 'react-native';
import React, {useState, useEffect} from 'react';
import Separator from '../components/Separator';
import NewsFeedItem from '../components/NewsFeedItem';
import SearchBar from '../components/SearchBar';

const Home = () => {
  const [newsList, setNewsList] = useState([]);
  const [fullData, setFullData] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    fetchNewsList();
  }, []);
  const fetchNewsList = async () => {
    const response = await fetch(
      'https://newsapi.org/v2/top-headlines?country=us&apiKey=aafd74d2a88645f3bfe8b4e35ce2a757',
    );
    const respJson = await response.json();
    setNewsList(respJson.articles);
    setFullData(respJson.articles);
    setRefreshing(false);
  };

  return (
    <SafeAreaView>
      <SearchBar data={fullData} setData={setNewsList} />
      <FlatList
        data={newsList}
        keyExtractor={news => news.title}
        renderItem={({item, index}) => <NewsFeedItem item={item} />}
        refreshing={refreshing}
        onRefresh={() => {
          setRefreshing(true);
          fetchNewsList();
        }}
        ItemSeparatorComponent={Separator}
      />
    </SafeAreaView>
  );
};

export default Home;