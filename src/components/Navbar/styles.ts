import { StyleSheet } from "react-native";
import { WHITE } from "../../utils/constants";

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginBottom: 15,
    flex: 1,
  },
  navbarContainer: {
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
  flexRow: {
    flexDirection: "row",
  },
  iconRow: {
    width: "40%",
    justifyContent: "flex-end",
  },
  iconContainer: {
    backgroundColor: WHITE,
    padding: 5,
    width: 35,
    height: 35,
    borderRadius: 35 / 2,
    justifyContent: "center",
    alignItems: "center",
  },
  day: {
    fontSize: 20,
    color: WHITE,
    textAlign: "right",
    width: "60%",
  },
  mr10: {
    marginRight: 10,
  },
  greetingText: {
    fontSize: 40,
    color: WHITE,
  },
});

export default styles;
