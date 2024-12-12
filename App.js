// import { StyleSheet, View, Image, ScrollView, Dimensions } from "react-native";
// import React from "react";
// import Buttons from "./btnsBox";

// const images = [
//   {
//     uri: "https://gratisography.com/wp-content/uploads/2024/10/gratisography-cool-cat-800x525.jpg",
//     title: "Cool Cat",
//   },
//   {
//     uri: "https://gratisography.com/wp-content/uploads/2024/10/gratisography-cool-cat-800x525.jpg",
//     title: "Cool Cat",
//   },
//   {
//     uri: "https://gratisography.com/wp-content/uploads/2024/10/gratisography-cool-cat-800x525.jpg",
//     title: "Cool Cat",
//   },
//   {
//     uri: "https://gratisography.com/wp-content/uploads/2024/10/gratisography-cool-cat-800x525.jpg",
//     title: "Cool Cat",
//   },
// ];

// const { width } = Dimensions.get("window");

// export default function App() {
//   return (
//     <ScrollView 
      
//       pagingEnabled 
//       horizontal
//       showsHorizontalScrollIndicator={true}

//     >
//       {images.map((image, index) => (
//         <View key={index}>
//           <Image source={{ uri: image.uri }} style={styles.img} />
//         </View>
//       ))}
//     </ScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   img: {
//     width: width,
//     height: 200,
//   },
  
// });
import React, { useRef, useEffect, useState } from "react";
import { ScrollView, View, Text, StyleSheet, Dimensions } from "react-native";

// Get the width of the device's screen
const { width } = Dimensions.get("window");

export default function App() {
  const scrollViewRef = useRef(null); // Reference to the ScrollView
  const [currentPage, setCurrentPage] = useState(0); // Track the current page
  const pages = ["Page 1", "Page 2", "Page 3"]; // Array of pages

  useEffect(() => {
    // Automatically swap pages every 3 seconds
    const interval = setInterval(() => {
      setCurrentPage((prevPage) => (prevPage + 1) % pages.length); // Increment page index
    }, 5000);

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [pages.length]);

  useEffect(() => {
    // Scroll to the new page
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo({
        x: currentPage * width, // Scroll horizontally
        animated: true, // Smooth scrolling
      });
    }
  }, [currentPage]);

  return (
    <ScrollView
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      ref={scrollViewRef} // Assign the reference
    >
      {pages.map((page, index) => (
        <View key={index} style={styles.page}>
          <Text style={styles.text}>{page}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  page: {
    width, // Match the screen width
    height: 200, // Fixed height for pages
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    marginVertical: 10,
    borderRadius: 10,
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
  },
});
