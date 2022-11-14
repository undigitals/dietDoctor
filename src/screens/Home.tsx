import { Animated, View, StyleSheet } from "react-native";
import React, { useRef } from "react";
import Navbar from "../components/Navbar";
import HomeContainer from "../components/HomeContainer";

import { STATUSBAR_HEIGHT } from "../utils/constants";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
  const scrollA = useRef(new Animated.Value(0)).current;

  return (
    <Animated.ScrollView
      style={{
        marginTop: STATUSBAR_HEIGHT,
        backgroundColor: "#192242",
      }}
      scrollEventThrottle={16}
      onScroll={Animated.event(
        [{ nativeEvent: { contentOffset: { y: scrollA } } }],
        {
          useNativeDriver: true,
        }
      )}
    >
      <View style={styles.container}>
        <Animated.View style={[styles.banner(scrollA), styles.banner]}>
          <Navbar />
        </Animated.View>
      </View>
      <HomeContainer />
    </Animated.ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    marginTop: -1000,
    paddingTop: 1000,
    alignItems: "center",
    overflow: "hidden",
  },

  banner: (scrollA: number) => ({
    height: 120,
    width: "100%",
    transform: [
      {
        translateY: scrollA?.interpolate({
          inputRange: [-150, 0, 150, 150 + 1],
          outputRange: [-150 / 2, 0, 150 * 0.75, 150 * 0.75],
        }),
      },
    ],
  }),
});
