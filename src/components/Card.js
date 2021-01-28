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
      onPress={props.onRestSelect}>
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
        <Text style={styles.totalReadingText}>
          Total Reading Time : {props.data.totalReadingTime} minute
        </Text>
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
    borderWidth: 2,
    borderColor: 'white',
    borderTopColor: 'white',
    borderBottomColor: '#4643f6',
    marginVertical: 10,
    backgroundColor: 'white',
    alignItems: 'center',
    width: Dimensions.get('window').width / 1.2,
    height:
      Platform.OS === 'ios'
        ? Dimensions.get('window').height / 2.6
        : Dimensions.get('window').height / 2.3,
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
    marginHorizontal: 9,
    padding: 2,
  },
  titleText: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#0f1016',
  },
  summaryView: {
    marginHorizontal: 9,
    marginTop: 5,
  },
  totalReadingView: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: 3,
    marginLeft: 10,
    marginBottom: Platform.OS === 'ios' ? -8 : -5,
  },
  totalReadingText: {
    fontSize: 13,
    fontWeight: 'bold',
  },
  arrowRight: {
    width: 30,
    height: 30,
    marginLeft: 40,
  },
});

export {Card};
