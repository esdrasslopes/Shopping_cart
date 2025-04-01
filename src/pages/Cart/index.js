import { View, Text, StyleSheet, FlatList } from "react-native";

import { CartContext } from "../../context/CartContext";

import { useContext } from "react";

import CartList from "../../components/CartList";

export default function Cart() {
  const { cart, removeItemCart, handleAddItem, total } =
    useContext(CartContext);

  return (
    <View style={styles.container}>
      <FlatList
        data={cart}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={() => <Text>Nenhum item no carrinho</Text>}
        renderItem={({ item }) => (
          <CartList
            data={item}
            addAmount={() => handleAddItem(item)}
            removeAmount={() => removeItemCart(item)}
          />
        )}
        ListFooterComponent={() => (
          <Text style={styles.total}>Total: R$ {total}</Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fafafa",
    flex: 1,
    paddingStart: 14,
    paddingEnd: 14,
    paddingTop: 14,
  },
  total: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 24,
  },
});
