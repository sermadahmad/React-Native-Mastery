import React from "react";
import { FlatList } from "react-native";
import { View } from "react-native";
import cards from "../products";
import ProductCard from "../productCard";



export default function HomeScreen({navigation}) {
  const renderItem = ({ item }) => <ProductCard navigation={navigation} card={item} />;
  return (
    <View style={{ alignItems: "center" }}>
      <FlatList
        data={cards}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
      />
    </View>
  );
}
