import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

import { useNavigation } from "@react-navigation/native";

import { SafeAreaView } from "react-native-safe-area-context";

import { Feather } from "@expo/vector-icons";

import { useState, useContext } from "react";

import Products from "../../components/Products";

import { CartContext } from "../../context/CartContext";

export default function Home() {
  const navigation = useNavigation();

  const { cart, handleAddItem } = useContext(CartContext);

  const [products, setProducts] = useState([
    {
      id: "1",
      name: "Coca cola",
      price: 19.9,
    },
    {
      id: "2",
      name: "Chocolate",
      price: 6.5,
    },
    {
      id: "4",
      name: "Queijo 500g",
      price: 15,
    },
    {
      id: "5",
      name: "Batata frita",
      price: 23.9,
    },
    {
      id: "6",
      name: "Guarana lata",
      price: 6.0,
    },
  ]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.cartContent}>
        <Text style={styles.title}>Lista de produtos</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Cart")}>
          {cart.length >= 1 && (
            <View style={styles.dot}>
              <Text style={styles.dotText}>{cart?.length}</Text>
            </View>
          )}
          <Feather name="shopping-cart" size={30} color={"#000"} />
        </TouchableOpacity>
      </View>

      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Products data={item} addToCart={() => handleAddItem(item)} />
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa",
    paddingStart: 14,
    paddingEnd: 14,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  cartContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 24,
    marginBottom: 24,
  },
  dot: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ff0000",
    width: 20,
    height: 20,
    position: "absolute",
    zIndex: 99,
    left: -4,
    bottom: -2,
    borderRadius: 10,
  },
  dotText: {
    color: "#fff",
    fontSize: 12,
  },
});
