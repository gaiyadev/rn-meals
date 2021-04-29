import "react-native-gesture-handler";
import * as React from "react";
import { enableScreens } from "react-native-screens";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import MealNavigation from "./navigation/router";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import mealsReducer from "./redux/reducers/mealReducer";
enableScreens(true);

const rootReducer = combineReducers({
  meals: mealsReducer,
});

const store = createStore(rootReducer);

export default function App() {
  const [loaded] = useFonts({
    OpenSansBold: require("./assets/fonts/OpenSans-Bold.ttf"),
    OpenSansRegular: require("./assets/fonts/OpenSans-Regular.ttf"),
  });

  if (!loaded) {
    return <AppLoading />;
  }

  return (
    <Provider store={store}>
      <MealNavigation />
    </Provider>
  );
}
