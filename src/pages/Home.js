import React, {useContext} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Dimensions,
} from 'react-native';
import {SearchBar, Card} from '../components';
import Context from '../ContextAPI/store';

const Home = (props) => {
  const {state, dispatch} = useContext(Context);

  return (
    <SafeAreaView>
      <View>
        <View style={{marginTop: 5}}>
          <Image
            style={{alignSelf: 'center', width: 50, height: 50}}
            source={require('../icon/logo.png')}
          />
        </View>

        <View style={{flexDirection: 'row', alignSelf: 'center'}}>
          <SearchBar placeHolder={'Search blog post by title...'} />
          <Image
            style={{alignSelf: 'center', width: 32, height: 32}}
            source={require('../icon/search.png')}
          />
        </View>

        {/*<Text>{state.data.counter}</Text>
        <TouchableOpacity onPress={() => dispatch({type: 'INCREASE_COUNTER'})}>
          <Text style={{color: 'blue'}}>arttir</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => dispatch({type: 'DECREASE_COUNTER'})}>
          <Text style={{color: 'blue'}}>azalt</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => dispatch({type: 'REFRESH_COUNTER'})}>
          <Text style={{color: 'blue'}}>sifirla</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => props.navigation.navigate('Detail')}>
          <Text style={{color: 'blue'}}>go details</Text>
  </TouchableOpacity>*/}
      </View>
      <View style={styles.cardView}>
        <Card />
        <Card />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  cardView: {
    marginVertical: 10,
    marginHorizontal: 10,
    alignSelf: 'center',
  },
});

export {Home};
