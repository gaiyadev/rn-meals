import "react-native-gesture-handler";
import * as React from "react";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import MealNavigation from "./navigation/router";

export default function App() {
  const [loaded] = useFonts({
    OpenSansBold: require("./assets/fonts/OpenSans-Bold.ttf"),
    OpenSansRegular: require("./assets/fonts/OpenSans-Regular.ttf"),
  });

  if (!loaded) {
    return <AppLoading />;
  }

  return <MealNavigation />;
}
