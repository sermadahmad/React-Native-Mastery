import {StyleSheet, View } from 'react-native';
import React from 'react';
import Dbtn from './Dbtn';
import Pbtn from './Pbtn';



const dbtn = {
  icon: 'truck-delivery',
  text: 'Delivery'
};
const pbtn = {
  icon: 'bag-check',
  text: 'Pickup'
};


export default function Buttons() {
  return (
    <View style={styles.topRow} >
      <Dbtn btn={dbtn}/>
      <Pbtn btn={pbtn}/>
    </View>
  );
}

const styles = StyleSheet.create({
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  
});