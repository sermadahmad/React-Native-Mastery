import React, {memo} from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Pressable,
} from "react-native";
import {
  FontAwesome,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

function formatNumberToText(number) {
  if (number >= 1e9) {
    return (number / 1e9).toFixed(1).replace(/\.0$/, "") + "B"; // Billion
  } else if (number >= 1e6) {
    return (number / 1e6).toFixed(1).replace(/\.0$/, "") + "M"; // Million
  } else if (number >= 1e3) {
    return (number / 1e3).toFixed(1).replace(/\.0$/, "") + "k"; // Thousand
  } else {
    return number.toString(); // Less than 1k
  }
}

function ProductCard({ card, navigation }) {
  return (
    <Pressable
      style={({ pressed }) => [styles.card, pressed && styles.pressedCard]}
      onPress={() => navigation.navigate("Detail", { card })}
    >
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
                {card.rating} ({card.reviewCount}) | {formatNumberToText(card.sold)} sold
              </Text>
            </View>
          </View>
        </View>
      </View>
    </Pressable>
  );
}

export default memo(ProductCard);

const styles = StyleSheet.create({
  pressedCard: {
    backgroundColor: "#d0d0d0",
  },
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
    padding: 5,
    fontWeight: "bold",
    alignSelf: "flex-start",
  },
  discount: {
    color: "#F96218",
    backgroundColor: "#FDECEF",
    padding: 3,
    borderRadius: 5,
    fontSize: 11,
    fontWeight: "bold",
    marginLeft: 1,
    alignSelf: "flex-start",
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
