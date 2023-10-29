import React from "react";
import { View, Image, Text, ScrollView, StyleSheet } from "react-native";
import { hobbiesData, hobbiesListAna } from "../data/HobbiesAna";
import CardAna from "./CardAna";

function InfoAna() {
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.infoContainer}>
          <Image
            style={styles.avatar}
            source={require("../../assets/img_5266.jpg")}
          ></Image>
          <View style={styles.infoBackground}>
            <Text style={styles.description}>Descripción sobre mí!</Text>
            <Text>
              Soy Ana Isabel, administrativa y estudiante de DAM, con iniciativa
              emprendedora.
            </Text>
          </View>
        </View>
        <Text style={styles.subtitle}>cosas que me gustan mucho:</Text>
        <ScrollView nestedScrollEnabled={true}>
          {hobbiesListAna.map((hobby: hobbiesData, id: number) => {
            return <CardAna hobby={hobby.hobby} id={hobby.id} key={id} />;
          })}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    height: "85%",
    backgroundColor: "#fce8e6",
  },
  avatar: {
    height: 90,
    width: 90,
    borderRadius: 100,
  },
  infoContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  infoBackground: {
    margin: 10,
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
    width: "70%",
  },
  description: {
    textAlign: "center",
    fontWeight: "700",
    fontSize: 20,
  },
  subtitle: {
    color: "beriblak",
    fontWeight: "900",
    textTransform: "capitalize",
    fontSize: 20,
    textAlign: "center",
  },
});

export default InfoAna;
