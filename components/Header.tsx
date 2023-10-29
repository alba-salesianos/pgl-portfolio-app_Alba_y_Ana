import React from "react";
import { Button, Pressable, StyleSheet, Text, View } from "react-native";

type SetDisplay = { setDisplayPorfolio: (param: boolean) => void };

function Header(props: SetDisplay) {
  const { setDisplayPorfolio } = props;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Portfolio App</Text>
      <View style={styles.menu}>
        <View style={styles.buttons}>
          <Button
            onPress={() => setDisplayPorfolio(true)}
            title="Alba"
            color="#eb9797"
            accessibilityLabel="Un botón pa la info"
          />
          <Button
            onPress={() => setDisplayPorfolio(false)}
            title="Ana"
            color="#eb9797"
            accessibilityLabel="Un botón pal QR"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "15%",
    paddingTop: 25,
    width: "100%",
  },
  title: {
    backgroundColor: "#c75f5f",
    textAlign: "center",
    fontWeight: "bold",
    textAlignVertical: "center",
    fontSize: 30,
  },
  menu: {
    flexDirection: "row",
    backgroundColor: "#e88484",
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  buttons: {
    flexDirection: "row",
    borderRadius: 10,
    width: "35%",
    color: "white",
    fontWeight: "bold",
    textTransform: "uppercase",
    justifyContent: "space-between",
  },
});

export default Header;
