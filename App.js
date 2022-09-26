import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { PokeapiComponent } from "./src/components/PokeapiComponent";

export default function App() {
  const urlPokeapi = "https://pokeapi.co/api/v2/pokemon";
  const loader = <Text>loader</Text>;
  return (
    <View style={styles.container}>
      <PokeapiComponent apiUrl={urlPokeapi} loader={loader} />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
