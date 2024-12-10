import React from "react";
import { Button, Text } from "react-native";
import { View } from "react-native";

export default function DetailsScreen({navigation}) {
  return (
    <View style={{ alignItems: "center" }}>
      <Text>hd fhkj fkhdk </Text>
      <Button title='Go Back' onPress={() => navigation.goBack()} />
    </View>
  );
}
