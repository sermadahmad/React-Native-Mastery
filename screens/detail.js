import React from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";

const DetailScreen = ({ route }) => {
  // Destructure card data from route.params
  const {
    imgsrc,
    title,
    price,
    discount,
    coinsSave,
    rating,
    reviewCount,
    sold,
    freeDelivery,
    coins,
  } = route.params.card; // Destructuring the card object passed from the previous screen

  return (
    <ScrollView style={styles.container}>
      {/* Image Section */}
      <Image source={{ uri: imgsrc }} style={styles.image} />

      {/* Product Title */}
      <Text style={styles.title}>{title}</Text>

      {/* Price and Discount */}
      <View style={styles.priceContainer}>
        <Text style={styles.price}>${price}</Text>
        {discount > 0 && <Text style={styles.discount}>-{discount}%</Text>}
      </View>

      {/* Coins Saving */}
      {coinsSave > 0 && (
        <Text style={styles.coins}>Save ${coinsSave} with coins</Text>
      )}

      {/* Rating and Reviews */}
      <View style={styles.ratingContainer}>
        <Text style={styles.rating}>
          Rating: {rating} ({reviewCount} reviews)
        </Text>
      </View>

      {/* Sold Count */}
      <Text style={styles.sold}>Sold: {sold}</Text>

      {/* Delivery and Coins */}
      <View style={styles.deliveryContainer}>
        {freeDelivery && <Text style={styles.freeDelivery}>Free Delivery</Text>}
        {coins && (
          <Text style={styles.coinsText}>Earn coins with this purchase</Text>
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  image: {
    width: "100%",
    height: 300,
    resizeMode: "cover",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginVertical: 10,
    marginHorizontal: 15,
  },
  priceContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 15,
    marginBottom: 10,
  },
  price: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
  },
  discount: {
    fontSize: 18,
    color: "#ff4d4d",
    marginLeft: 10,
  },
  coins: {
    fontSize: 16,
    color: "#000",
    marginLeft: 15,
  },
  ratingContainer: {
    marginHorizontal: 15,
    marginBottom: 10,
  },
  rating: {
    fontSize: 16,
    color: "#666",
  },
  sold: {
    fontSize: 16,
    color: "#000",
    marginHorizontal: 15,
    marginBottom: 10,
  },
  deliveryContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 15,
    marginTop: 10,
  },
  freeDelivery: {
    fontSize: 16,
    color: "#28a745",
  },
  coinsText: {
    fontSize: 16,
    color: "#007bff",
  },
});

export default DetailScreen;
