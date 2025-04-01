import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function Products({ data, addToCart }) {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>{data.name}</Text>
        <Text>{data.price}</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={() => addToCart()}>
        <Text style={{ color: "#fff" }}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: "#dfdfdf",
    borderRadius: 2,
    marginBottom: 14,
    padding: 8,
    paddingBottom: 14,
    paddingTop: 14,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "#168fff",
    paddingStart: 12,
    paddingEnd: 12,
    paddingTop: 6,
    paddingBottom: 6,
    borderRadius: 5,
  },
});
