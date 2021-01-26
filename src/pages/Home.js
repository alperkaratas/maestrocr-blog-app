import React, {useContext, useState, useEffect} from 'react';
import {
  SafeAreaView,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  Text,
  FlatList,
} from 'react-native';
import {SearchBar, Card} from '../components';
import Context from '../ContextAPI/store';

const Home = (props) => {
  const [searchData, setSearched] = useState([]);
  const {state, dispatch} = useContext(Context);

  useEffect(() => {
    getBlogPosts();
  });

  const getBlogPosts = async () => {
    await fetch('https://www.lenasoftware.com/api/v1/en/maestro/1')
      .then((response) => response.json())
      .then((response) => {
        dispatch({type: 'SAVE_RESPONSE', data: response.result});
        setSearched(response.result); // - searchData useState is used for searchbar only. -
        console.log(searchData);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const searchPost = (text) => {
    let searchedData = searchData.filter((item) => {
      const itemData = item.title.toUpperCase();
      const textData = text.toUpperCase();

      return itemData.indexOf(textData) > -1;
    });
    dispatch({type: 'SEARCH_DATA', data: searchedData});
  };

  function postSelect(item) {
    props.navigation.navigate('RestaurantDetails', {postId: item.postId});
  }

  const renderCard = ({item}) => {
    return <Card data={item} onRestSelect={() => postSelect(item)} />;
  };

  return (
    <SafeAreaView style={styles.main}>
      <View>
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

        {/*<TouchableOpacity onPress={() => getBlogPosts()}>
          <Text style={{color: 'blue'}}>get blog</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => props.navigation.navigate('Detail')}>
          <Text style={{color: 'blue'}}>go details</Text>
  </TouchableOpacity>*/}
      </View>
      <View style={styles.postCardView}>
        <FlatList
          data={state.data}
          renderItem={renderCard}
          keyExtractor={(_, index) => index.toString()}
        />
      </View>
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
  postCardView: {
    flex: 1,
    alignItems: 'center',
  },
});

export {Home};
