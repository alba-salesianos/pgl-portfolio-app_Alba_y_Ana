import React from "react";
import { View, Image, Text, ScrollView, StyleSheet } from "react-native";
import { hobbiesData, hobbiesListAlba } from "../data/HobbiesAlba";
import CardAlba from "./CardAlba";

function Info() {
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.infoContainer}>
          <Image
            style={styles.avatar}
            source={require("../../assets/haechan.webp")}
          ></Image>
          <View style={styles.infoBackground}>
            <Text style={styles.description}>Descripción</Text>
            <Text>
              Programadora y traductora. Y en mis ratos libres me gusta
              conquistar el mundo.
            </Text>
          </View>
        </View>
        <Text style={styles.subtitle}>cosas que me gustan mucho:</Text>
        <ScrollView nestedScrollEnabled={true}>
          {hobbiesListAlba.map((hobby: hobbiesData, id: number) => {
            return <CardAlba hobby={hobby.hobby} id={hobby.id} key={id} />;
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

export default Info;
