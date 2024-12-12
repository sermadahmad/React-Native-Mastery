import {TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import styles from './btnsStyle';


export default function Dbtn({btn:{icon, text}}) {
  return (
    <View style={styles.myButton}>
      <TouchableOpacity style={styles.button}>
        <MaterialCommunityIcons name={icon} size={24} color="red" />
        <Text style={styles.buttonText}>{text}</Text>
      </TouchableOpacity>
    </View>
    
  );
}
