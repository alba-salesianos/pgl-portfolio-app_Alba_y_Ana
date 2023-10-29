import React from "react";
import { View, StyleSheet, Text } from "react-native";

type CardProps = { id: number; hobby: string };
function CardAlba(props: CardProps) {
  return (
    <View style={styles.card}>
      <Text> {props.hobby}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    padding: 20,
    color: "darkred",
    textAlign: "center",
    fontWeight: "bold",
    fontStyle: "italic",
    fontSize: 16,
    backgroundColor: "white",
    margin: 10,
  },
});
export default CardAlba;
