import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/home";
import DetailsScreen from "./screens/detail";
import { View, Text, Image } from "react-native";
import productCard from "./productCard";
import cards from "./products";
import ProductCard from "./productCard";



// export default function App() {
//   return (
//     <View>
//       {/* <Image
//         style={{ width: "100%", height: "75%" }}
//         source={{
//           uri: "https://gratisography.com/wp-content/uploads/2024/10/gratisography-cool-cat-800x525.jpg",
//         }}
//       /> */}
//       <ProductCard card={cards[2]} />
//     </View>
//   );
// }



const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Detail" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


