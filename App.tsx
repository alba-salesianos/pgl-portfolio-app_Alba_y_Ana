import { useState } from "react";
import { StyleSheet, View } from "react-native";
import Header from "./components/Header";
import InfoAlba from "./components/Alba/InfoAlba";
import InfoAna from "./components/Ana/InfoAna";

export default function App() {
  const [displayPortfolio, setDisplayPorfolio] = useState(true);
  return (
    <View style={styles.container}>
      <Header setDisplayPorfolio={setDisplayPorfolio} />
      {displayPortfolio ? <InfoAlba /> : <InfoAna />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fce8e6",
    alignItems: "center",
    justifyContent: "center",
  },
});
