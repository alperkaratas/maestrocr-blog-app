import React, {useContext} from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import Context from '../ContextAPI/store';

const Detail = (props) => {
  const {state, dispatch} = useContext(Context);

  return (
    <SafeAreaView>
      <View>
        <Text>Second Page: {state.data.counter}</Text>
      </View>
    </SafeAreaView>
  );
};

export {Detail};
