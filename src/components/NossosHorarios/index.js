import React from 'react';
import { View, Text, Image } from 'react-native';

export default props => {
  return (
    <View>
      <Image source={require('../../assets/icons/logo.png')} />
      <Text>Nossos Horários</Text>
    </View>
  );
};
