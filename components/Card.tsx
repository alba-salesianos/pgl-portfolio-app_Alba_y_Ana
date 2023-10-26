import React from "react";
import { View, StyleSheet } from "react-native";

type CardProps = { id: number; hobby: string };
function Card(props: CardProps) {
  return <View style={styles.card}>{props.hobby}</View>;
}
const styles = StyleSheet.create({
  card: {
    borderColor: "black",
    borderWidth: 1,
    borderStyle: "dashed",
    padding: 20,
    color: "darkred",
    textAlign: "center",
    fontWeight: "bold",
    fontStyle: "italic",
    fontSize: 16,
    backgroundColor: "silver",
  },
});
export default Card;
