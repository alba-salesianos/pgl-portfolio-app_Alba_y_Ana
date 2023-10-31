import React from "react";
import { View } from "react-native";
import InfoAlba from "./Alba/InfoAlba";
import InfoAna from "./Ana/InfoAna";

interface PortfolioProps {
  displayPortfolio: boolean;
  isDarkTheme: boolean;
}

function Portfolio(props: PortfolioProps) {
  const { displayPortfolio, isDarkTheme } = props;

  return (
    <View>
      {displayPortfolio ? (
        <InfoAlba isDarkTheme={isDarkTheme} />
      ) : (
        <InfoAna isDarkTheme={isDarkTheme} />
      )}
    </View>
  );
}

export default Portfolio;
