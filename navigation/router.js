import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import { Platform } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import MealDetailScreen from "../screens/MealDetailScreen";
import CategoriesMealScreen from "../screens/CategoriesMealScreen";
import CategoriesScreen from "../screens/CategoriesScreen";
import Colors from "../themes/colors";
const Stack = createStackNavigator();

const MealsStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="CategoriesScreen">
        <Stack.Screen
          name="Home"
          component={CategoriesScreen}
          options={{
            title: "Meal Category",
            headerStyle: {
              backgroundColor:
                Platform.OS === "android" ? Colors.primaryColor : "",
            },
            headerTintColor:
              Platform.OS === "android" ? "#fff" : Colors.SecondaryColor,
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
        <Stack.Screen
          name="CategoriesMealScreen"
          component={CategoriesMealScreen}
          options={({ route }) => ({
            title: route.params.title,
            headerStyle: {
              backgroundColor:
                Platform.OS === "android" ? Colors.primaryColor : "",
            },
            headerTintColor:
              Platform.OS === "android" ? "#fff" : Colors.SecondaryColor,
            headerTitleStyle: {
              fontWeight: "bold",
            },
          })}
        />
        <Stack.Screen
          name="MealDetailScreen"
          component={MealDetailScreen}
          options={({ route }) => ({
            title: route.params.params.title,
            headerStyle: {
              backgroundColor:
                Platform.OS === "android" ? Colors.primaryColor : "",
            },
            headerTintColor:
              Platform.OS === "android" ? "#fff" : Colors.SecondaryColor,
            headerTitleStyle: {
              fontWeight: "bold",
            },
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MealsStack;
