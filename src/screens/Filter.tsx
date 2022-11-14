import { View, Text, TouchableOpacity, FlatList, Animated } from "react-native";
import React from "react";
import Header from "../components/customHeader";
import CustomBtn from "../components/bottomBtn";
import { MAX_WIDTH } from "../utils/constants";

import { fakeData } from "../utils/data";
import { useRoute } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../store";
const Filter = () => {
  const [selectedData, setSelectedData] = React.useState<any>([]);
  const state = useTypedSelector((state) => state);
  const route = useRoute();

  return (
    <>
      {route?.params?.activeScene ? (
        <View
          style={{
            paddingHorizontal: 20,
            flex: 1,
            position: "relative",
          }}
        >
          <Header backIcon title="Recipe Filters" />

          <FlatList
            data={fakeData}
            showsVerticalScrollIndicator={false}
            style={{
              width: "100%",
              height: "100%",
            }}
            contentContainerStyle={{
              flexDirection: "row",
              flexWrap: "wrap",
            }}
            renderItem={({ item }) => {
              const isSelected = selectedData.findIndex(
                (i: any) => i.id === item.id
              );
              const animation = new Animated.Value(0);
              const inputRange = [0, 0.9];
              const outputRange = [1, 0.87];
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
                <TouchableOpacity
                  onPressIn={onPressIn}
                  activeOpacity={1}
                  onPressOut={onPressOut}
                  onPress={() => {
                    if (isSelected == -1) {
                      setSelectedData([...selectedData, item]);
                    } else {
                      const data = selectedData.filter(
                        (i: any) => i.id !== item.id
                      );
                      setSelectedData([...data]);
                    }
                  }}
                  style={[
                    {
                      backgroundColor: isSelected == -1 ? "#ccc" : "#2cd4d4",
                      marginBottom: 10,
                      padding: 10,
                      marginRight: 14,
                      borderRadius: 20,
                    },
                    { transform: [{ scale }] },
                  ]}
                >
                  <Text>{item.title}</Text>
                </TouchableOpacity>
              );
            }}
            keyExtractor={({ id }) => id.toString()}
            ListFooterComponent={() => {
              return (
                <View
                  style={{
                    marginBottom: 100,
                  }}
                />
              );
            }}
            ListHeaderComponent={() => {
              return (
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: "700",
                  }}
                >
                  Filters
                </Text>
              );
            }}
            ListHeaderComponentStyle={{
              width: MAX_WIDTH,
              marginBottom: 10,
            }}
          />

          <CustomBtn
            title="Show 2 recipes"
            onPress={() => {}}
            style={{
              backgroundColor: "#34bd34",
              display: selectedData.length ? "flex" : "none",
            }}
          />
        </View>
      ) : (
        <View
          style={{
            paddingHorizontal: 20,
          }}
        >
          <Header backIcon title="RECIPE FILTERS" />
          <Text>
            {state.searchHistory.data.map((item, index) => (
              <Text key={index}>{item}</Text>
            ))}
          </Text>
          <TouchableOpacity onPress={() => {}}>
            <Text>Add</Text>
          </TouchableOpacity>
        </View>
      )}
    </>
  );
};

export default Filter;
