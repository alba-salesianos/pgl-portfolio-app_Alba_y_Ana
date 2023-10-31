import React from "react";
import { Button, StyleSheet, Switch, Text, View } from "react-native";
import { coloursLight, coloursDark } from "../assets/styles/colours";

interface componentProps {
  setDisplayPortfolio: (param: boolean) => void;
  setDisplayQR: (param: boolean) => void;
  setIsDarkTheme: (param: boolean) => void;
  isDarkTheme: boolean;
}

function Header(props: componentProps) {
  const { setDisplayPortfolio, setDisplayQR, setIsDarkTheme, isDarkTheme } =
    props;

  const handleButtonAlba = () => {
    setDisplayPortfolio(true);
    setDisplayQR(true);
  };

  const handleButtonAna = () => {
    setDisplayPortfolio(false);
    setDisplayQR(true);
  };

  return (
    <View style={styles.container}>
      <Text
        style={isDarkTheme === false ? styles.titleLight : styles.titleDark}
      >
        My Portfolio App
      </Text>
      <View
        style={
          isDarkTheme === false
            ? styles.buttonsPanelLight
            : styles.buttonsPanelDark
        }
      >
        <View style={styles.buttons}>
          <Switch
            onValueChange={() => setIsDarkTheme(!isDarkTheme)}
            value={isDarkTheme}
          />

          <Button
            onPress={() => handleButtonAlba()}
            title="Alba"
            color={
              isDarkTheme === false ? coloursLight.buttons : coloursDark.buttons
            }
            accessibilityLabel="Botón del portfolio de Alba"
          />
          <Button
            onPress={() => handleButtonAna()}
            title="Ana"
            color={
              isDarkTheme === false ? coloursLight.buttons : coloursDark.buttons
            }
            accessibilityLabel="Botón del portfolio de Ana"
          />
          <Button
            onPress={() => setDisplayQR(false)}
            title="QR"
            color={
              isDarkTheme === false ? coloursLight.buttons : coloursDark.buttons
            }
            accessibilityLabel="QR del repositorio"
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
  titleLight: {
    backgroundColor: coloursLight.title,
    color: coloursLight.font,
    textAlign: "center",
    fontWeight: "bold",
    textAlignVertical: "center",
    fontSize: 30,
  },
  titleDark: {
    backgroundColor: coloursDark.title,
    color: coloursDark.font,
    textAlign: "center",
    fontWeight: "bold",
    textAlignVertical: "center",
    fontSize: 30,
  },
  buttonsPanelLight: {
    flexDirection: "row",
    backgroundColor: coloursLight.subtitle,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonsPanelDark: {
    flexDirection: "row",
    backgroundColor: coloursDark.subtitle,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  buttons: {
    flexDirection: "row",
    borderRadius: 10,
    width: "70%",
    fontWeight: "bold",
    textTransform: "uppercase",
    justifyContent: "space-between",
  },
});

export default Header;
