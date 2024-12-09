import React from "react";
import ProductCard from "./productCard";
import { FlatList } from "react-native";
import card from './products';

export default function App() {
  return (
    
    <ProductCard data = {card} />
    
    
    
  );
}
