import {
  View,
  Text,
  useWindowDimensions,
  TextInput,
  Platform,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import Constants from "expo-constants";
import { add } from "../store/features/searchHistory";
import { useDispatch } from "react-redux";
const FirstRoute = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#fff",
      }}
    />
  );
};

const Search = () => {
  const layout = useWindowDimensions();
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [index, setIndex] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const statusBarHeight = Constants.statusBarHeight;
  const [routes] = useState([
    {
      key: "first",
      title: "Recipes",
    },
    {
      key: "second",
      title: "Meal plans",
    },
  ]);

  return (
    <>
      {Platform.OS === "android" && (
        <StatusBar style="auto" backgroundColor="#b8d6ae" />
      )}
      <View
        style={{
          backgroundColor: "#b8d6ae",
          flex: 1,
          marginTop: Platform.OS == "android" ? statusBarHeight : 0,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            width: layout.width - 50,
            paddingHorizontal: 15,
            marginLeft: (layout.width - (layout.width - 50)) / 2,
            marginTop: 10,
            height: 50,
            backgroundColor: "#fff",
            borderRadius: 10,
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 3,
            },
            shadowOpacity: 0.36,
            shadowRadius: 6.68,
            elevation: 11,
            marginBottom: 10,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <AntDesign name="left" size={24} color="black" />
            </TouchableOpacity>
            <TextInput
              value={inputValue}
              onChangeText={(text) => setInputValue(text)}
              style={{
                height: 50,
                paddingLeft: 15,
                width: "70%",
              }}
              placeholder="Search"
              keyboardType="web-search"
              onEndEditing={() => {
                dispatch(add(inputValue));
              }}
            />
          </View>
          <TouchableOpacity
            onPress={() => setInputValue("")}
            style={{
              width: "10%",
            }}
          >
            {inputValue && (
              <MaterialIcons name="cancel" size={18} color="black" />
            )}
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate(
                "Filter" as never,
                {
                  activeScene: index,
                } as never
              )
            }
            style={{
              width: 35,
              height: 35,
              borderColor: "green",
              borderWidth: 1,
              borderRadius: 35 / 2,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Ionicons name="filter-outline" size={20} color="black" />
          </TouchableOpacity>
        </View>
        <TabView
          navigationState={{ index, routes }}
          renderScene={SceneMap({
            first: FirstRoute,
            second: FirstRoute,
          })}
          onIndexChange={setIndex}
          initialLayout={{ width: layout.width }}
          sceneContainerStyle={{}}
          renderTabBar={(props) => (
            <TabBar
              {...props}
              activeColor="#000"
              inactiveColor={"#000"}
              indicatorStyle={{ backgroundColor: "#000" }}
              indicatorContainerStyle={{
                marginHorizontal: 40,
                paddingHorizontal: 80,
              }}
              labelStyle={[{ textTransform: "capitalize", color: "#ccc" }]}
              style={{
                backgroundColor: "transparent",
                elevation: 0,
              }}
            />
          )}
        />
      </View>
    </>
  );
};

export default Search;
