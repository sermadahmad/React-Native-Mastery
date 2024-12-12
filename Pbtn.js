import {TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import styles from './btnsStyle';
import { Ionicons } from '@expo/vector-icons';



export default function Pbtn({btn:{icon, text}}) {
  return (
    <View style={styles.myButton}>
      <TouchableOpacity style={styles.button}>
        <Ionicons name={icon} size={24} color="red" />
        <Text style={styles.buttonText}>{text}</Text>
      </TouchableOpacity>
    </View>
    
  );
}
