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
    <View style={styles.container}>
      <Header
        setDisplayPortfolio={setDisplayPortfolio}
        setDisplayQR={setDisplayQR}
        setIsDarkTheme={setIsDarkTheme}
      />
      {displayQR ? (
        <Portfolio displayPortfolio={displayPortfolio} />
      ) : (
        <View style={styles.QR}>
          <QRCode value="https://github.com/alba-salesianos/pgl-portfolio-app_Alba_y_Ana" />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:
      isDarkTheme === false ? coloursLight.background : coloursDark.background,
    alignItems: "center",
    justifyContent: "center",
  },
  QR: {
    height: "85%",
    justifyContent: "center",
    alignItems: "center",
  },
});
