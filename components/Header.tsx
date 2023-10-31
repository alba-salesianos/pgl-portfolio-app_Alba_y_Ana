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

  const toggleSwitch = () => setIsDarkTheme(!isDarkTheme);

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
        <Switch onValueChange={() => toggleSwitch()} value={isDarkTheme} />
        <View style={styles.buttons}>
          <Button
            onPress={() => handleButtonAlba()}
            title="Alba"
            color={
              isDarkTheme === false ? coloursLight.buttons : coloursDark.buttons
            }
            accessibilityLabel="Un botón pa la info"
          />
          <Button
            onPress={() => handleButtonAna()}
            title="Ana"
            color={
              isDarkTheme === false ? coloursLight.buttons : coloursDark.buttons
            }
            accessibilityLabel="Un botón pal QR"
          />
          <Button
            onPress={() => setDisplayQR(false)}
            title="QR"
            color={
              isDarkTheme === false ? coloursLight.buttons : coloursDark.buttons
            }
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
    width: "50%",
    fontWeight: "bold",
    textTransform: "uppercase",
    justifyContent: "space-between",
  },
});

export default Header;
