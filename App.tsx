import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { persistStore } from "redux-persist";
import Routes from "./src/navigation/routes";
import store from "./src/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

let persistor = persistStore(store);

export default function App() {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <StatusBar style="auto" />
          <SafeAreaView style={{ flex: 1 }}>
            <NavigationContainer>
              <Routes />
            </NavigationContainer>
          </SafeAreaView>
        </PersistGate>
      </Provider>
    </>
  );
}
