/* eslint-disable no-lone-blocks */
/* eslint-disable react-hooks/exhaustive-deps */
import React, {useContext, useState, useEffect} from 'react';
import {
  SafeAreaView,
  View,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Text,
  ActivityIndicator,
} from 'react-native';
import {SearchBar, Card} from '../components';
import Context from '../ContextAPI/store';

const Home = (props) => {
  const [searchData, setSearched] = useState([]);
  const [passingData, setPassingData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  // const [page, setPage] = useState(1); - infinite scrol state
  const {state, dispatch} = useContext(Context);

  useEffect(() => {
    getBlogPosts();
  }, [getBlogPosts]);

  const getBlogPosts = async () => {
    setIsLoading(true);
    const fetchAPI = 'https://www.lenasoftware.com/api/v1/en/maestro/1';
    await fetch(fetchAPI)
      .then((response) => response.json())
      .then((response) => {
        setPassingData(response.result);
        dispatch({
          type: 'SAVE_RESPONSE',
          data: [...passingData, ...response.result],
        });
        setSearched(response.result); // - searchData's useState is used for searchbar only. -
      })
      .catch((error) => {
        console.error(error);
      });
    setIsLoading(false);
  };

  {
    // infinite scroll func.
    /*const getMorePost = () => {
    setPage(page + 1);
    getBlogPosts();
    console.log(page);
  };*/
  }

  const searchPost = (text) => {
    let searchedData = searchData.filter((item) => {
      const itemData = item.title.toUpperCase();
      const textData = text.toUpperCase();

      return itemData.indexOf(textData) > -1;
    });
    dispatch({type: 'SEARCH_DATA', data: searchedData});
  };

  const postSelect = (item) => {
    props.navigation.navigate('Detail', {
      postId: item.postId,
      image: item.image,
      content: item.content,
      createdAt: item.createdAt,
      totalReadingTime: item.totalReadingTime,
    });
  };

  const renderCard = ({item}) => (
    <Card data={item} onRestSelect={() => postSelect(item)} />
  );

  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.mainLogoView}>
        <Image style={styles.mainLogo} source={require('../icon/logo.png')} />
      </View>

      <View style={styles.searchBarView}>
        <SearchBar
          onSearch={searchPost}
          placeHolder={'Search blog post by title...'}
        />
        <Image
          style={styles.searchIcon}
          source={require('../icon/search.png')}
        />
      </View>
      {isLoading ? (
        <View style={styles.loader}>
          <ActivityIndicator size="large" color="#4643f6" />
        </View>
      ) : (
        <View style={styles.allPostsCardView}>
          <FlatList
            data={state.data}
            renderItem={renderCard}
            keyExtractor={(_, index) => index.toString()}
            // infinite scroll parameter
            //onEndReached={}
            //onEndReachedThreshold={0.1}
            //onRefresh={}
            //refreshing={}
          />
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  mainLogoView: {
    marginTop: 5,
  },
  mainLogo: {
    alignSelf: 'center',
    width: 50,
    height: 50,
  },
  searchBarView: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  searchIcon: {
    alignSelf: 'center',
    width: 32,
    height: 32,
  },
  allPostsCardView: {
    flex: 1,
    alignItems: 'center',
    marginBottom: 30,
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export {Home};
