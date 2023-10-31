import React from "react";
import { View, Image, Text, ScrollView, StyleSheet } from "react-native";
import { hobbiesData, hobbiesList } from "./data/Hobbies";
import Card from "./Card";

function Info() {
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.infoContainer}>
          <Image
            style={styles.avatar}
            source={require("../assets/SofyanAmrabat.jpg")}
          ></Image>
          <View style={styles.infoBackground}>
            <Text style={styles.description}>Descripción sobre mí!</Text>
            <Text>
              Soy profe y me gusta mi trabajo aunque a veces me de por enrevesar
              prácticas para mis queridos alumnos
            </Text>
          </View>
        </View>
        <Text style={styles.subtitle}>cosas que me gustan mucho:</Text>
        <ScrollView nestedScrollEnabled={true}>
          {hobbiesList.map((hobby: hobbiesData, id: number) => {
            return <Card hobby={hobby.hobby} id={hobby.id} key={id} />;
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
  },
  avatar: {
    height: 90,
    width: 90,
    borderRadius: 100,
  },
  infoContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  infoBackground: {
    margin: 10,
    backgroundColor: "lightgray",
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
    color: "black",
    fontWeight: "900",
    textTransform: "capitalize",
    fontSize: 20,
    textAlign: "center",
  },
});

export default Info;
