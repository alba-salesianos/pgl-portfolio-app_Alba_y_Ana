import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { coloursLight, coloursDark } from "../assets/styles/colours";

interface componentProps {
  setDisplayPortfolio: (param: boolean) => void;
  setDisplayQR: (param: boolean) => void;
  setIsDarkTheme: (param: boolean) => void;
}

function Header(props: componentProps) {
  const { setDisplayPortfolio, setDisplayQR, setIsDarkTheme } = props;

  const changeButton = () => {
    setDisplayPortfolio(!setDisplayPortfolio);
    setDisplayQR(true);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Portfolio App</Text>
      <View style={styles.menu}>
        <Button onPress={() => setIsDarkTheme(!setIsDarkTheme)} title="tema" />
        <View style={styles.buttons}>
          <Button
            onPress={() => changeButton()}
            title="Alba"
            color={coloursLight.buttons}
            accessibilityLabel="Un botón pa la info"
          />
          <Button
            onPress={() => changeButton()}
            title="Ana"
            color={coloursLight.buttons}
            accessibilityLabel="Un botón pal QR"
          />
          <Button
            onPress={() => setDisplayQR(false)}
            title="QR"
            color={coloursLight.buttons}
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
    backgroundColor: coloursLight.title,
    textAlign: "center",
    fontWeight: "bold",
    textAlignVertical: "center",
    fontSize: 30,
  },
  menu: {
    flexDirection: "row",
    backgroundColor: coloursLight.subtitle,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  buttons: {
    flexDirection: "row",
    borderRadius: 10,
    width: "50%",
    fontWeight: "bold",
    textTransform: "uppercase",
    justifyContent: "space-between",
  },
});

export default Header;
