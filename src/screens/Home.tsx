import React, {useState, useEffect} from 'react';
import {FlatList, SafeAreaView, Linking} from 'react-native';
import Separator from '../components/Separator';
import NewsFeedItem from '../components/NewsFeedItem';
import SearchBar from '../components/SearchBar';
import {getQueryParams} from '../helpers/deeplink';
import {dummyNews} from '../helpers/dummyNews';

const Home = ({navigation}) => {
  const [newsList, setNewsList] = useState([]);
  const [fullData, setFullData] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    fetchNewsList();
    Linking.getInitialURL().then(url => {
      handleUrl(url);
    });
    Linking.addEventListener('url', ({url}) => {
      handleUrl(url);
    });
  }, []);

  const handleUrl = url => {
    if (url) {
      const articleId = getQueryParams(url)?.id;
      navigation.navigate('News Details', {item: dummyNews[articleId]});
    }
  };
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
        renderItem={({item, index}) => (
          <NewsFeedItem item={item} navigation={navigation} />
        )}
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
