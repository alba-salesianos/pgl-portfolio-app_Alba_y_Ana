import React from "react";
import { Button, Pressable, StyleSheet, Text, View } from "react-native";

type SetDisplay = { setDisplayMyQR: (param: boolean) => void };

function Header(props: SetDisplay) {
  const { setDisplayMyQR } = props;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Portfolio App</Text>
      <View style={styles.menu}>
        <View style={styles.buttons}>
          <Button
            onPress={() => setDisplayMyQR(true)}
            title="Mi info"
            color="gray"
            accessibilityLabel="Un botón pa la info"
          />
          <Button
            onPress={() => setDisplayMyQR(false)}
            title="Mi Repo"
            color="gray"
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
    paddingTop: 50,
    width: "100%",
  },
  title: {
    backgroundColor: "gray",
    textAlign: "center",
    fontWeight: "bold",
    textAlignVertical: "center",
    fontSize: 30,
  },
  menu: {
    flexDirection: "row",
    backgroundColor: "darkgray",
    justifyContent: "center",
    alignItems: "center",
  },
  buttons: {
    flexDirection: "row",
    width: "50%",
    color: "white",
    fontWeight: "bold",
    textTransform: "uppercase",
    justifyContent: "space-between",
  },
  shadoxboxing: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,

    elevation: 15,
  },
});

export default Header;
