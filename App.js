import { useCallback } from "react";
import { useFonts } from "expo-font";
import { SplashScreen } from "expo-router";
import { NavigationContainer } from "@react-navigation/native";

import { StyleSheet } from "react-native";

import StackNavigation from "./app/router/StackNavigation";

export default function App() {
  const [fontsLoaded] = useFonts({
    DMBold: require("./assets/fonts/DMSans-Bold.ttf"),
    DMMedium: require("./assets/fonts/DMSans-Medium.ttf"),
    DMRegular: require("./assets/fonts/DMSans-Regular.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return <SplashScreen />; // load splash screen <SplashScreen />
  }

  return (
    // <Navigation onLayout={onLayoutRootView} />
    <NavigationContainer>
      <StackNavigation onLayout={onLayoutRootView} />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    margin: 30,
  },
  regular: {
    fontFamily: "DMRegular",
    fontSize: 18,
  },
});
