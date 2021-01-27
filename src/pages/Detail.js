import React from 'react';
import {SafeAreaView, ScrollView, Text, Image, Dimensions} from 'react-native';

const Detail = ({route, navigation}) => {
  const {image, title, content, createdAt, totalReadingTime} = route.params;

  return (
    <SafeAreaView style={{flex: 1}}>
      <Image
        resizeMode="stretch"
        style={{width: Dimensions.get('window').width, height: 250}}
        source={{uri: image}}
      />
      <Text>{title}</Text>
      <ScrollView style={{flex: 1}}>
        <Text>{content}</Text>
      </ScrollView>
      <Text>{createdAt}</Text>
      <Text>{totalReadingTime}</Text>
    </SafeAreaView>
  );
};

export {Detail};
