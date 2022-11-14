import { Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { MAX_WIDTH } from "../../utils/constants";

type Props = {
  title: string;
  onPress: () => void;
  disabled?: boolean;
  bottom?: number;
  style?: object;
};

const CustomBtn: React.FC<Props> = ({
  onPress,
  title,
  disabled,
  bottom,
  style = {},
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.attendButton,
        {
          bottom: bottom ? bottom : 16,
        },
        { ...style },
      ]}
      disabled={disabled}
      onPress={onPress}
    >
      <Text style={styles.textWhite}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomBtn;

const styles = StyleSheet.create({
  textWhite: {
    color: "#fff",
    textAlign: "center",
  },
  attendButton: {
    width: MAX_WIDTH - 40,
    position: "absolute",
    paddingVertical: 10,
    marginLeft: (MAX_WIDTH - (MAX_WIDTH - 40)) / 2,
    borderRadius: 20,
  },
});
