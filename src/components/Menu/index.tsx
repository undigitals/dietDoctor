import { View, Text } from "react-native";
import React from "react";
import MenuBox from "../MenuBox";
import Carousel from "react-native-snap-carousel-v4";
import { MAX_WIDTH, MENU_BOX_WIDTH } from "../../utils/constants";

// PropTypes
import { MenuPropsType, CarouselRenderItemProps } from "../../utils/types";

import styles from "./styles";

const renderItem: React.FC<CarouselRenderItemProps> = ({ item }) => {
  return (
    <MenuBox
      image={item.imageUrl}
      navigateUrl={item.navigateUrl}
      desc={item.description}
    />
  );
};

const Menu: React.FC<MenuPropsType> = ({ menuTitle, data }) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.pl10, styles.title]}>{menuTitle}</Text>
      <Carousel
        layout={"default"}
        vertical={false}
        containerCustomStyle={styles.pl10}
        data={data}
        sliderWidth={MAX_WIDTH}
        itemWidth={MENU_BOX_WIDTH}
        renderItem={renderItem}
        inactiveSlideScale={1}
        inactiveSlideOpacity={1}
        activeSlideAlignment="start"
        useExperimentalSnap={true}
      />
    </View>
  );
};

export default Menu;
