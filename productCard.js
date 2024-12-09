import React from "react";
import { View, Text, Button, StyleSheet, ImageBackground } from "react-native";
import {
  FontAwesome,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";

export default function ProductCard({ card }) {
  return (
    <View style={styles.card}>
      <View style={styles.imgBox}>
        <ImageBackground source={{ uri: card.imgsrc }} style={styles.img}>
          <View style={styles.labelsBox}>
            <View style={styles.deliveryBox}>
              {card.freeDelivery && (
                <>
                  <MaterialCommunityIcons
                    name="bus"
                    size={10}
                    color="white"
                    style={{ paddingLeft: 4 }}
                  />
                  <Text style={styles.delivery}>FREE DELIVERY</Text>
                </>
              )}
            </View>

            <View style={styles.coinsBox}>
              {card.coins && (
                <>
                  <MaterialCommunityIcons
                    name="bitcoin"
                    size={10}
                    color="white"
                    style={{ paddingLeft: 4 }}
                  />
                  <Text style={styles.coins}>COINS</Text>
                </>
              )}
            </View>
          </View>
        </ImageBackground>
        <View style={styles.contentBox}>
          <View>
            <Text numberOfLines={1} ellipsizeMode="tail" style={styles.title}>
              {card.title}
            </Text>
          </View>
          <View style={styles.priceDiscountBox}>
            <View>
              <Text style={styles.price}>Rs.{card.price}</Text>
            </View>
            <View>
              <Text style={styles.discount}>-{card.discount}%</Text>
            </View>
          </View>
          <View>
            <Text style={styles.coinsSave}>Coins Save Rs.{card.coinsSave}</Text>
          </View>
          <View>
            <View style={styles.ratingBox}>
              <FontAwesome name="star" size={10} color="orange" />
              <Text style={styles.rating}>
                {card.rating} ({card.reviewCount}) | {card.sold} sold{" "}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  coinsBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F39609",
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
  deliveryBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#007C64",
  },
  ratingBox: {
    flexDirection: "row",
    alignItems: "center",
    padding: 6,
  },
  rating: {
    color: "gray",
    fontSize: 12,
    padding: 5,
  },
  coinsSave: {
    color: "orange",
    backgroundColor: "#FFE7B2",
    padding: 4,
    marginLeft: 5,
    alignSelf: "flex-start",
    borderRadius: 5,
    fontSize: 12,
  },
  price: {
    color: "#F96218",
    fontSize: 16,
    fontWeight: "bold",
    padding: 6,
  },
  discount: {
    color: "#F96218",
    backgroundColor: "#FDECEF",
    padding: 4,
    borderRadius: 10,
    fontSize: 11,
    fontWeight: "bold",
  },
  priceDiscountBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  contentBox: {
    padding: 5,
  },
  title: {
    fontWeight: "bold",
    padding: 5,
  },
  delivery: {
    color: "white",
    fontSize: 8,
    fontWeight: "bold",
    padding: 5,
  },
  coins: {
    color: "white",
    fontSize: 8,
    fontWeight: "bold",
    padding: 5,
  },
  card: {
    width: 150,
    backgroundColor: "white",
    borderRadius: 10,
    elevation: 5,
    margin: 10,
  },
  img: {
    width: 150,
    height: 150,
  },
  imgBox: {
    overflow: "hidden",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  labelsBox: {
    position: "absolute",
    bottom: 0,
    left: 0,
    flexDirection: "row",
  },
});
