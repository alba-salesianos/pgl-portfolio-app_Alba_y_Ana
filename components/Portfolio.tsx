import React from "react";
import { View } from "react-native";
import InfoAlba from "./Alba/InfoAlba";
import InfoAna from "./Ana/InfoAna";

interface PortfolioProps {
  displayPortfolio: boolean;
}

function Portfolio(props: PortfolioProps) {
  const { displayPortfolio } = props;

  return <View>{displayPortfolio ? <InfoAlba /> : <InfoAna />}</View>;
}

export default Portfolio;
