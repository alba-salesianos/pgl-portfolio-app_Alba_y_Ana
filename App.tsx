import { useState } from "react";
import { StyleSheet, View } from "react-native";
import QRCode from "react-native-qrcode-svg";
import Header from "./components/Header";
import Info from "./components/Info";

export default function App() {
  const [displayMyQR, setDisplayMyQR] = useState(true);
  return (
    <View style={styles.container}>
      <Header setDisplayMyQR={setDisplayMyQR} />
      <View style={styles.topContainer}>
        <View style={styles.rowTopSecondContainer}></View>
      </View>
      {displayMyQR ? (
        <Info setDisplayMyQR={setDisplayMyQR} />
      ) : (
        <View style={styles.bodystails}>
          <View style={styles.CentrarcodigoQR}>
            <QRCode value="https://github.com/adhernea" />
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  topContainer: {
    height: "15%",
    paddingTop: 50,
    width: "100%",
  },
  firsttoprowContainer: {
    backgroundColor: "gray",
    textAlign: "center",
    fontWeight: "bold",
    textAlignVertical: "center",
    fontSize: 30,
  },
  rowTopSecondContainer: {
    flexDirection: "row",
    backgroundColor: "darkgray",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonruta: {
    width: "50%",
  },
  bodystails: {
    width: "100%",
    borderWidth: 2,
    borderColor: "black",
    alignItems: "center",
    justifyContent: "space-between",
    height: "85%",
  },
  avatar: {
    height: 90,
    width: 90,
    borderRadius: 100,
  },
  cosasQmeGustanMuxoEstails: {
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
  CentrarcodigoQR: {
    justifyContent: "center",
    borderWidth: 1,
    width: "100%",
    height: "100%",
    alignItems: "center",
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
