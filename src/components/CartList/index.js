import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

import { useState } from "react";

export default function CartList({ data, removeAmount, addAmount }) {
  const [amount, setAmount] = useState(data?.amount);

  const handleDecrease = () => {
    removeAmount();

    if (amount === 0) {
      setAmount(0);
    }

    setAmount((item) => item - 1);
  };

  const handleIncrease = () => {
    addAmount();

    setAmount((item) => item + 1);
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>{data.name}</Text>
        <Text style={styles.price}>R$ {data?.total.toFixed(2)}</Text>
      </View>
      <View style={styles.amountContainer}>
        <TouchableOpacity style={styles.button} onPress={handleDecrease}>
          <Text style={{ color: "#fff" }}>-</Text>
        </TouchableOpacity>

        <Text style={styles.amount}>{amount}</Text>

        <TouchableOpacity style={styles.button} onPress={handleIncrease}>
          <Text style={{ color: "#fff" }}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: "#dfdfdf",
    borderRadius: 2,
    marginBottom: 24,
    padding: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  price: {
    fontSize: 16,
  },
  amountContainer: {
    marginTop: 14,
    marginBottom: 14,
    flexDirection: "row",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#168fff",
    padding: 6,
    paddingLeft: 14,
    paddingRight: 14,
    borderRadius: 5,
  },
  amount: {
    marginLeft: 14,
    marginRight: 14,
  },
});
