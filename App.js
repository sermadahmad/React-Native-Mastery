import React from "react";
import ProductCard from "./productCard";
import { FlatList } from "react-native";
import cards from "./products";
import { View } from "react-native";

export default function App() {
  return (
    <View style={{alignItems:'center'}}>
      <FlatList
        data={cards}
        renderItem={({ item }) => <ProductCard card={item} />}
        keyExtractor={(item) => item.id}
        numColumns={2}
      />
    </View>
  );
}
