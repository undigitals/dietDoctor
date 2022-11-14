import { View, Text } from "react-native";
import React from "react";
import Menu from "./Menu";

import data from "../utils/data";

const HomeContainer = () => {
  return (
    <View
      style={{
        backgroundColor: "#fff",
        borderTopLeftRadius: 20,
        paddingBottom: 20,
      }}
    >
      <Menu data={data} menuTitle={"Breakfast"} />
      <Menu data={data} menuTitle={"Lunch"} />
      <Menu data={data} menuTitle={"Dinner"} />
      <Menu data={data} menuTitle={"Snack"} />
    </View>
  );
};

export default HomeContainer;
