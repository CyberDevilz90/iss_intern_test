//entry//
import {
   View,
   Text,
   TextInput,
   TouchableOpacity,
   FlatList,
   Image,
   StyleSheet,
   ScrollView,
   ImageBackground,
} from "react-native";
import React from "react";

const Entry = () => {
   const products = [
      {
         id: "1",
         name: "HP 62 Black Ink Cartridge",
         price: "$9.49",
         image: require("./../../assets/hp62.jpg"),
      },
      {
         id: "2",
         name: "Canon MF-3110 Toner",
         price: "$36.45",
         image: require("./../../assets/canon3110.jpg"),
      },
      {
         id: "3",
         name: "HP 62 Black Ink Cartridge",
         price: "$5.99",
         image: require("./../../assets/hp62.jpg"),
      },
   ];
   return (
      <ScrollView style={styles.container}>
         {/* Header */}
         <View style={styles.header}>
            <View style={{ flexDirection: "row", gap: 30 }}>
               <View style={{ flexDirection: "row" }}>
                  <Text style={{ fontSize: 10 }}>Franchise Opportunities</Text>
                  <Text style={{ fontSize: 10 }}>Help</Text>
                  <Text style={{ fontSize: 10 }}>Feedback</Text>
               </View>
               <View style={{ flexDirection: "row" }}>
                  <Text style={{ fontSize: 10 }}>hello@email.com</Text>
                  <Text style={{ fontSize: 10 }}>0800 022 2 022</Text>
               </View>
            </View>
            <View style={{ flexDirection: "row", marginVertical: 10 }}>
               <Text style={styles.logo}>CARTRIDGE KINGS</Text>
               <TextInput style={styles.searchInput} placeholder="Search" />
               <TouchableOpacity style={styles.cartButton}>
                  <Text style={styles.cartText}>Cart (1)</Text>
               </TouchableOpacity>
            </View>
         </View>

         {/* Search Section */}
         <ImageBackground
            source={require("./../../assets/collor_pallete.jpeg")}
            style={styles.searchSection}
         >
            <Text style={styles.searchTitle}>
               Find the right cartridges for your printer
            </Text>
            <View style={styles.dropdownContainer}>
               <TextInput
                  style={styles.dropdown}
                  placeholder="1. Printer Brand"
               />
               <TextInput
                  style={styles.dropdown}
                  placeholder="2. Printer Series"
               />
               <TextInput
                  style={styles.dropdown}
                  placeholder="3. Printer Model"
               />
            </View>
            <TouchableOpacity style={styles.findButton}>
               <Text style={styles.findButtonText}>Find Cartridges</Text>
            </TouchableOpacity>
         </ImageBackground>

         {/* Featured Products */}
         <Text style={styles.featuredTitle}>Featured Products</Text>
         <FlatList
            data={products}
            horizontal
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
               <View style={styles.productCard}>
                  <Image source={item.image} style={styles.productImage} />
                  <Text style={styles.productName}>{item.name}</Text>
                  <Text style={styles.productPrice}>{item.price}</Text>
                  <TouchableOpacity style={styles.addButton}>
                     <Text style={styles.addButtonText}>Add to Cart</Text>
                  </TouchableOpacity>
               </View>
            )}
         />
      </ScrollView>
   );
};

export default Entry;

const styles = StyleSheet.create({
   container: { flex: 1, backgroundColor: "#fff" },
   header: {
      flexDirection: "column",
      justifyContent: "space-between",
      alignItems: "center",
      padding: 10,
      backgroundColor: "#f8f8f8",
   },
   logo: { fontSize: 18, fontWeight: "bold", marginRight: 50, marginTop: 5 },
   searchInput: {
      flex: 1,
      marginHorizontal: 10,
      borderWidth: 1,
      borderColor: "#ccc",
      borderRadius: 5,
      padding: 5,
   },
   cartButton: { padding: 5, backgroundColor: "#ffa500", borderRadius: 5 },
   cartText: { color: "#fff", fontWeight: "bold" },
   searchSection: {
      padding: 20,
      backgroundColor: "#e6e6e6",
      alignItems: "center",
   },
   searchTitle: {
      fontSize: 16,
      marginBottom: 10,
      color: "white",
      fontWeight: "bold",
      textTransform: "uppercase",
      textAlign: "center",
   },
   dropdownContainer: { width: "100%", backgroundColor: "white", padding: 15, flexDirection: 'row', gap: 15, marginBottom: 15 },
   dropdown: {
      backgroundColor: "lightgrey",
      borderWidth: 1,
      borderColor: "#ccc",
      borderRadius: 5,
      marginBottom: 10,
      width: '30%',
      height: 40,
      paddingHorizontal: 8
   },
   findButton: { backgroundColor: "#ffa500", padding: 10, borderRadius: 5 },
   findButtonText: { color: "#fff", fontWeight: "bold" },
   featuredTitle: {
      fontSize: 18,
      fontWeight: "bold",
      padding: 10,
      textAlign: "center",
   },
   productCard: {
      width: 150,
      padding: 10,
      margin: 10,
      backgroundColor: "#fff",
      borderRadius: 5,
      borderWidth: 1,
      borderColor: "#ccc",
      alignItems: "center",
   },
   productImage: { width: 100, height: 100, marginBottom: 10 },
   productName: { fontSize: 14, textAlign: "center", marginBottom: 5 },
   productPrice: { fontSize: 16, fontWeight: "bold", marginBottom: 10 },
   addButton: { backgroundColor: "#ffa500", padding: 5, borderRadius: 5 },
   addButtonText: { color: "#fff" },
});
