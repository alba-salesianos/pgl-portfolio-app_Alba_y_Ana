import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { coloursLight, coloursDark } from "../../assets/styles/colours";

interface Props {
  isDarkTheme: boolean;
  hobby: string;
}

function CardAna(props: Props) {
  const { isDarkTheme, hobby } = props;

  return (
    <View style={isDarkTheme === false ? styles.cardLight : styles.cardDark}>
      <Text style={isDarkTheme === false ? styles.fontLight : styles.fontDark}>
        {hobby}
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  cardLight: {
    borderRadius: 10,
    padding: 20,

    textAlign: "center",
    fontWeight: "bold",
    fontStyle: "italic",
    fontSize: 16,
    backgroundColor: coloursLight.backgroundCards,
    margin: 10,
  },
  fontLight: {
    color: coloursLight.font,
  },
  fontDark: {
    color: coloursDark.font,
  },
  cardDark: {
    borderRadius: 10,
    padding: 20,
    textAlign: "center",
    fontWeight: "bold",
    fontStyle: "italic",
    fontSize: 16,
    backgroundColor: coloursDark.backgroundCards,
    margin: 10,
  },
});
export default CardAna;
