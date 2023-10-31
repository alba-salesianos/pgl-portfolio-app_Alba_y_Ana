import { useState } from "react";
import { StyleSheet, View } from "react-native";
import Header from "./components/Header";
import { coloursLight, coloursDark } from "./assets/styles/colours";
import Portfolio from "./components/Portfolio";
import QRCode from "react-native-qrcode-svg";

export default function App() {
  const [displayPortfolio, setDisplayPortfolio] = useState(true);
  const [displayQR, setDisplayQR] = useState(true);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  return (
    <View
      style={
        isDarkTheme === false ? styles.containerLight : styles.containerDark
      }
    >
      <Header
        setDisplayPortfolio={setDisplayPortfolio}
        setDisplayQR={setDisplayQR}
        setIsDarkTheme={setIsDarkTheme}
        isDarkTheme={isDarkTheme}
      />
      {displayQR ? (
        <Portfolio
          displayPortfolio={displayPortfolio}
          isDarkTheme={isDarkTheme}
        />
      ) : (
        <View style={styles.QR}>
          <QRCode value="https://github.com/alba-salesianos/pgl-portfolio-app_Alba_y_Ana" />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  containerLight: {
    flex: 1,
    backgroundColor: coloursLight.background,
    alignItems: "center",
    justifyContent: "center",
  },

  containerDark: {
    flex: 1,
    backgroundColor: coloursDark.background,
    alignItems: "center",
    justifyContent: "center",
  },
  QR: {
    height: "85%",
    justifyContent: "center",
    alignItems: "center",
  },
});
