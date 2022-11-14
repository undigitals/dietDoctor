import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

import { Ionicons } from "@expo/vector-icons";
import { HeaderProps } from "../../utils/types";
import { useNavigation } from "@react-navigation/native";

const Header: React.FC<HeaderProps> = ({ backIcon, title }) => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingVertical: 20,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        {backIcon && (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back-outline" size={24} color="black" />
          </TouchableOpacity>
        )}
        <Text
          style={{
            color: "#767575",
            fontSize: 18,
            marginLeft: 20,
          }}
        >
          {title}
        </Text>
      </View>
    </View>
  );
};

export default Header;
