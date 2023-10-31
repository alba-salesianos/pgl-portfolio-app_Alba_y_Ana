import React from "react";
import { View, Image, Text, ScrollView, StyleSheet } from "react-native";
import { hobbiesData, hobbiesListAlba } from "../data/HobbiesAlba";
import Card from "../Card";
import { coloursLight, coloursDark } from "../../assets/styles/colours";

interface DarkThemeProps {
  isDarkTheme: boolean;
}

function InfoAlba(props: DarkThemeProps) {
  const { isDarkTheme } = props;

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
            source={require("../../assets/haechan.webp")}
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
              Descripción
            </Text>
            <Text
              style={
                isDarkTheme === false
                  ? styles.descriptionBodyLight
                  : styles.descriptionBodyDark
              }
            >
              Programadora y traductora. Y en mis ratos libres me gusta
              conquistar el mundo.
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
          {hobbiesListAlba.map((hobby: hobbiesData, id: number) => {
            return (
              <Card
                hobby={hobby.hobby}
                isDarkTheme={isDarkTheme}
                key={hobby.id}
              />
            );
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

export default InfoAlba;
