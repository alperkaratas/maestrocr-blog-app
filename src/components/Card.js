import React from 'react';
import {StyleSheet, View, Text, Dimensions, Image} from 'react-native';

const Card = (props) => {
  return (
    <View style={styles.generalCardView}>
      <View style={styles.bannerView}>
        <Image
          style={styles.bannerImage}
          source={{
            uri:
              'https://www.lenasoftware.com/uploads/post/what-is-cr-blog_maestropng-w3ylweyx-.png',
          }}
        />
      </View>
      <View style={styles.titleView}>
        <Text style={styles.titleText}>What is Change Request Management</Text>
      </View>
      <View style={styles.dividerView} />
      <View style={styles.summaryView}>
        <Text numberOfLines={3} ellipsizeMode="tail">
          A change request is where someone within a business proposes a change
          to a project, usually a change to a product or system. Even the
          best-planned projects might require changes, which could be something
          very minimal, or could be a significant change.
        </Text>
      </View>
      <View style={styles.totalReadingView}>
        <Text>Total Reading Time : 5 minute</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  generalCardView: {
    marginVertical: 10,
    backgroundColor: '#f1f1f1',
    alignItems: 'center',
    width: Dimensions.get('window').width / 1.2,
    height: Dimensions.get('window').height / 3.2,
    borderRadius: 20,
    shadowColor: '#222323',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.2,
    shadowRadius: 6,
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
    height: Dimensions.get('window').height / 6.6,
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
    marginVertical: 3,
    marginLeft: 10,
  },
});

export {Card};
