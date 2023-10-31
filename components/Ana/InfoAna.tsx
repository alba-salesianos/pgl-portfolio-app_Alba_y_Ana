import React from "react";
import { View, Image, Text, ScrollView, StyleSheet } from "react-native";
import { hobbiesData, hobbiesListAna } from "../data/HobbiesAna";
import CardAna from "./CardAna";
import { coloursLight, coloursDark } from "../../assets/styles/colours";

interface DarkThemeProps {
  isDarkTheme: boolean;
}

let darkTheme;

function InfoAna(props: DarkThemeProps) {
  const { isDarkTheme } = props;

  darkTheme = isDarkTheme;

  return (
    <View
      style={
        isDarkTheme === false ? styles.containerLight : styles.containerDark
      }
    >
      <View>
        <View style={styles.infoContainer}>
          <Image
            style={styles.avatar}
            source={require("../../assets/img_5266.jpg")}
          ></Image>
          <View
            style={
              isDarkTheme === false
                ? styles.infoBackgroundLight
                : styles.infoBackgroundDark
            }
          >
            <Text
              style={
                isDarkTheme === false
                  ? styles.descriptionLight
                  : styles.descriptionDark
              }
            >
              Descripción sobre mí!
            </Text>
            <Text
              style={
                isDarkTheme === false
                  ? styles.descriptionBodyLight
                  : styles.descriptionBodyDark
              }
            >
              Soy Ana Isabel, administrativa y estudiante de DAM, con iniciativa
              emprendedora.
            </Text>
          </View>
        </View>
        <Text
          style={
            isDarkTheme === false ? styles.subtitleLight : styles.subtitleDark
          }
        >
          cosas que me gustan mucho:
        </Text>
        <ScrollView nestedScrollEnabled={true}>
          {hobbiesListAna.map((hobby: hobbiesData, id: number) => {
            return <CardAna hobby={hobby.hobby} isDarkTheme={isDarkTheme} />;
          })}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerLight: {
    color: coloursLight.font,
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    height: "85%",
    backgroundColor: coloursLight.background,
  },

  containerDark: {
    color: coloursDark.font,
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    height: "85%",
    backgroundColor: coloursDark.background,
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
  infoBackgroundDark: {
    color: coloursDark.font,
    margin: 10,
    backgroundColor: coloursDark.backgroundCards,
    padding: 10,
    borderRadius: 10,
    width: "70%",
  },
  infoBackgroundLight: {
    color: coloursLight.font,
    margin: 10,
    backgroundColor: coloursLight.backgroundCards,
    padding: 10,
    borderRadius: 10,
    width: "70%",
  },
  descriptionDark: {
    color: coloursDark.font,
    textAlign: "center",
    fontWeight: "700",
    fontSize: 20,
  },
  descriptionLight: {
    color: coloursLight.font,
    textAlign: "center",
    fontWeight: "700",
    fontSize: 20,
  },
  descriptionBodyDark: {
    color: coloursDark.font,
  },
  descriptionBodyLight: {
    color: coloursLight.font,
  },
  subtitleDark: {
    color: coloursDark.font,
    fontWeight: "900",
    textTransform: "capitalize",
    fontSize: 20,
    textAlign: "center",
  },
  subtitleLight: {
    color: coloursLight.font,
    fontWeight: "900",
    textTransform: "capitalize",
    fontSize: 20,
    textAlign: "center",
  },
});

export default InfoAna;
