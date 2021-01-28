import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  View,
  Dimensions,
  Platform,
} from 'react-native';
import {WebView} from 'react-native-webview';

const Detail = ({route, navigation}) => {
  const {image, content, createdAt, totalReadingTime} = route.params;

  let date = new Date(createdAt);

  let formattingDate =
    date.getDate() +
    ' / ' +
    parseInt(date.getMonth() + 1) +
    ' / ' +
    date.getFullYear();

  return (
    <SafeAreaView style={styles.main}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.arrowBackView}>
        <Image
          style={styles.arrowBack}
          source={require('../icon/arrow_back.png')}
        />
      </TouchableOpacity>
      <Image
        resizeMode="stretch"
        style={styles.imageStyle}
        source={{uri: image}}
      />

      <WebView
        source={{
          html:
            content +
            '<style>body{font-family: sans-serif; font-size: 40; margin-top: 40}<style>',
        }}
      />
      <View style={styles.footer}>
        <View style={styles.readingTimeView}>
          <Text style={styles.createdAtText}>{formattingDate}</Text>
          <Image
            style={styles.timeImage}
            source={require('../icon/calendar.png')}
          />
        </View>
        <View style={styles.readingTimeView}>
          <Text style={styles.readingTimeText}>
            Total reading time: {totalReadingTime}
          </Text>
          <Image
            style={styles.timeImage}
            source={require('../icon/time.png')}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'white',
  },
  imageStyle: {
    width: Dimensions.get('window').width,
    height: 250,
  },
  webViewContainer: {
    backgroundColor: 'white',
  },
  webViewText: {
    fontSize: 17,
  },
  arrowBackView: {
    margin: 10,
  },
  arrowBack: {
    width: 25,
    height: 25,
  },
  footer: {
    padding: Platform.OS === 'ios' ? 8 : 10,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  createdAtText: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  readingTimeView: {
    marginTop: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  readingTimeText: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  timeImage: {
    width: 20,
    height: 20,
    marginLeft: 10,
  },
});

export {Detail};
