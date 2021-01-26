import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  Image,
  Platform,
  TouchableOpacity,
} from 'react-native';

const Card = (props) => {
  return (
    <TouchableOpacity
      style={styles.generalCardView}
      onPress={() => props.navigation.navigate('Detail')}>
      <View style={styles.bannerView}>
        <Image
          style={styles.bannerImage}
          source={{
            uri: props.data.banner,
          }}
        />
      </View>
      <View style={styles.titleView}>
        <Text style={styles.titleText}>{props.data.title}</Text>
      </View>
      <View style={styles.dividerView} />
      <View style={styles.summaryView}>
        <Text numberOfLines={3} ellipsizeMode="tail">
          {props.data.summary}
        </Text>
      </View>
      <View style={styles.totalReadingView}>
        <Text>Total Reading Time : {props.data.totalReadingTime} minute</Text>
        <Image
          style={styles.arrowRight}
          source={require('../icon/arrow_right.png')}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  generalCardView: {
    marginVertical: 10,
    backgroundColor: '#f1f1f1',
    alignItems: 'center',
    width: Dimensions.get('window').width / 1.2,
    height:
      Platform.OS === 'ios'
        ? Dimensions.get('window').height / 3
        : Dimensions.get('window').height / 2.5,
    borderRadius: 20,
    shadowColor: '#222323',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.1,
    shadowRadius: 1,
    elevation: 5,
  },
  bannerView: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignItems: 'center',
  },
  bannerImage: {
    resizeMode: 'stretch',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginBottom: 16,
    width: Dimensions.get('window').width / 1.2,
    height:
      Platform.OS === 'ios'
        ? Dimensions.get('window').height / 6
        : Dimensions.get('window').height / 5.2,
  },
  titleView: {
    marginVertical: 3,
  },
  titleText: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  summaryView: {
    marginVertical: 3,
    marginHorizontal: 10,
  },
  totalReadingView: {
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: 3,
    marginLeft: 10,
    marginBottom: Platform.OS === 'ios' ? null : 5,
  },
  arrowRight: {
    width: 30,
    height: 30,
    marginLeft: 40,
  },
});

export {Card};
