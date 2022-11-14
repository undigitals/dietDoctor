import React from "react";
import {
  Text,
  TouchableOpacity,
  Image,
  Animated,
  StyleSheet,
} from "react-native";

import { useNavigation } from "@react-navigation/native";

// Type
import { MenuBoxPropsType } from "../utils/types";

// constants
import {
  MENU_BOX_HEIGHT,
  MENU_BOX_WIDTH,
  MAX_WIDTH,
  WHITE,
} from "../utils/constants";

const MenuBox: React.FC<MenuBoxPropsType> = ({ image, navigateUrl, desc }) => {
  const navigate = useNavigation();
  const animation = new Animated.Value(0);
  const inputRange = [0, 0.8];
  const outputRange = [1, 0.97];
  const scale = animation.interpolate({ inputRange, outputRange });

  const onPressIn = () => {
    Animated.spring(animation, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };
  const onPressOut = () => {
    Animated.spring(animation, {
      toValue: 0,
      useNativeDriver: true,
    }).start();
  };

  return (
    <>
      <TouchableOpacity
        activeOpacity={1}
        onPressIn={onPressIn}
        onPressOut={onPressOut}
        onPress={() => navigate.navigate(navigateUrl as never)}
        style={[
          styles.button,
          { transform: [{ scale }], width: MAX_WIDTH / 2 },
        ]}
      >
        <Image
          source={{ uri: image }}
          style={{
            width: MAX_WIDTH / 2.5,
            height: MAX_WIDTH / 2.5,
            borderRadius: 25,
            marginBottom: 5,
          }}
        />
      </TouchableOpacity>
      <Text style={{ textAlign: "left" }}>
        {desc.length > 40 ? `${desc.slice(0, 40)}...` : desc}
      </Text>
    </>
  );
};

export default MenuBox;

const styles = StyleSheet.create({
  button: {
    height: MENU_BOX_HEIGHT,
    width: MENU_BOX_WIDTH,
  },
  btn: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  btnText: {
    color: WHITE,
    fontSize: 25,
  },
});
