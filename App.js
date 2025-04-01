import { CartNavigator } from "./src/routes";

import { SafeAreaProvider } from "react-native-safe-area-context";

import { NavigationContainer } from "@react-navigation/native";

import { CartContextProvider } from "./src/context/CartContext";

export default function App() {
  return (
    <SafeAreaProvider>
      <CartContextProvider>
        <NavigationContainer>
          <CartNavigator />
        </NavigationContainer>
      </CartContextProvider>
    </SafeAreaProvider>
  );
}
