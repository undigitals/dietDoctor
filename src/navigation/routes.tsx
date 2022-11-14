import { View, TouchableOpacity, Platform } from "react-native";
import React, { useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";

import { Routes } from "./routes.enum";
import { TAB_BAR_ICON_WIDTH } from "../utils/constants";
// Screens
import Home from "../screens/Home";
import Auth from "../screens/Auth";
import Search from "../screens/Search";
import Filter from "../screens/Filter";

// create Tab
const Tab = createBottomTabNavigator();

type Props = {
  state: any;
  descriptors: any;
  navigation: any;
};
const TabBarConfig: React.FC<Props> = ({ state, descriptors, navigation }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-around",
        paddingTop: 10,
        shadowRadius: 2,
        shadowOpacity: 1.0,
        shadowOffset: {
          width: 0,
          height: -0.2,
        },
        shadowColor: "#ccc",
        elevation: 2,
        borderTopColor: "#ece3e3",

        borderTopWidth: 0.5,
        backgroundColor: "white",
        height: 50,
        paddingBottom: Platform.OS == "web" ? 20 : 0,
      }}
    >
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate({ name: route.name, merge: true });
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            key={index}
            style={{
              alignItems: "center",
            }}
          >
            {options.tabBarIcon &&
              options.tabBarIcon({
                focused: isFocused,
                color: isFocused ? "#85e92c" : "#000",
              })}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const Route = () => {
  return (
    <Tab.Navigator tabBar={(props) => <TabBarConfig {...props} />}>
      <Tab.Screen
        name={Routes.Home}
        component={Home}
        options={() => ({
          headerShown: false,
          tabBarLabel: [Routes.Home],
          tabBarIcon: ({ color }) => (
            <AntDesign name="home" size={TAB_BAR_ICON_WIDTH} color={color} />
          ),
        })}
      />
      <Tab.Screen
        name={Routes.Search}
        component={Home}
        options={() => ({
          headerShown: false,
          tabBarLabel: [Routes.Home],
          tabBarIcon: ({ color }) => (
            <FontAwesome
              name="search"
              size={TAB_BAR_ICON_WIDTH}
              color={color}
            />
          ),
        })}
      />
      <Tab.Screen
        name={"ha"}
        component={Home}
        options={() => ({
          headerShown: false,
          tabBarLabel: [Routes.Home],
          tabBarIcon: ({ color }) => (
            <Ionicons
              name="stats-chart-sharp"
              size={TAB_BAR_ICON_WIDTH}
              color={color}
            />
          ),
        })}
      />
      <Tab.Screen
        name={Routes.Settings}
        component={Home}
        options={() => ({
          // ...TransitionPresets.SlideFromRightIOS,
          headerShown: false,
          tabBarLabel: [Routes.Home],
          tabBarIcon: ({ color }) => (
            <FontAwesome5
              name="users"
              size={TAB_BAR_ICON_WIDTH}
              color={color}
            />
          ),
        })}
      />
    </Tab.Navigator>
  );
};

// export default Route;

const Stack = createStackNavigator();

const RootStack = () => {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <Stack.Navigator>
      {!isLogin ? (
        <>
          <Stack.Screen
            name="App"
            component={Route}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="SearchScreen"
            component={Search}
            options={() => ({
              ...TransitionPresets.ModalFadeTransition,
              headerShown: false,
            })}
          />
          <Stack.Screen
            name="Filter"
            component={Filter}
            options={() => ({
              ...TransitionPresets.ModalFadeTransition,
              headerShown: false,
            })}
          />
        </>
      ) : (
        <>
          <Stack.Screen
            name="Auth"
            component={Auth}
            options={{ headerShown: false }}
          />
        </>
      )}
    </Stack.Navigator>
  );
};

export default RootStack;
