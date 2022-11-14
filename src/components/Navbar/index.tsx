import { View, TouchableOpacity, Text } from "react-native";
import React from "react";
import { Foundation } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import dayjs from "dayjs";

// Constants
import { ICON_WIDTH, BLACK } from "../../utils/constants";
import { GREETINGTEXT } from "../../utils/constantText";
// styles
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";

const Navbar = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={[styles.navbarContainer, styles.flexRow]}>
        <Text style={styles.day}>{dayjs(new Date()).format("dddd")}</Text>
        <View style={[styles.flexRow, styles.iconRow]}>
          <TouchableOpacity
            onPress={() => navigation.navigate("SearchScreen" as never)}
          >
            <View style={[styles.iconContainer, styles.mr10]}>
              <Foundation
                name="clipboard-pencil"
                size={ICON_WIDTH}
                color={BLACK}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.iconContainer}>
              <AntDesign name="user" size={ICON_WIDTH} color={BLACK} />
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <Text style={styles.greetingText}>{GREETINGTEXT}</Text>
    </View>
  );
};

export default Navbar;
