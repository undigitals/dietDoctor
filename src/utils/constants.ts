import { Dimensions, StatusBar } from "react-native";

// width & height
const MENU_BOX_HEIGHT = 200;
const MENU_BOX_WIDTH = 200;
const MAX_WIDTH = Dimensions.get("window").width;
const ICON_WIDTH = 15;
const TAB_BAR_ICON_WIDTH = 24;
const STATUSBAR_HEIGHT = StatusBar.currentHeight;
export {
  MENU_BOX_HEIGHT,
  MENU_BOX_WIDTH,
  MAX_WIDTH,
  ICON_WIDTH,
  STATUSBAR_HEIGHT,
  TAB_BAR_ICON_WIDTH,
};

// color & backgroundColor
const WHITE = "#fff";
const BLACK = "#000";

export { WHITE, BLACK };
