import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Platform } from "react-native";
import MealDetailScreen from "../screens/MealDetailScreen";
import CategoriesMealScreen from "../screens/CategoriesMealScreen";
import CategoriesScreen from "../screens/CategoriesScreen";
import FavoriteScreen from "../screens/FavoriteScreen";
import Colors from "../themes/colors";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";
import { Ionicons } from "@expo/vector-icons";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

const Stack = createStackNavigator();

const MealsStack = () => {
  return (
    // <NavigationContainer>
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
          headerRight: () => (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
              <Item
                title="Fav"
                iconName="star"
                onPress={() => {
                  console.log("fav pressd");
                }}
              ></Item>
            </HeaderButtons>
          ),
        })}
      />
    </Stack.Navigator>
    // </NavigationContainer>
  );
};
const Tab =
  Platform.OS === "android"
    ? createMaterialBottomTabNavigator()
    : createBottomTabNavigator();

const MealsTab = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        shifting="true"
        barStyle={{ backgroundColor: Colors.SecondaryColor }}
        initialRouteName="Menu"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Menu") {
              iconName =
                focused && Platform.OS === "android"
                  ? "information-circle"
                  : "ios-information-circle-outline";
            } else if (route.name === "Favorites") {
              iconName =
                focused && Platform.OS === "android"
                  ? "information"
                  : "ios-list";
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={22} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: "#ff6f00",
        }}
      >
        <Tab.Screen
          name="Menu"
          component={MealsStack}
          options={{ tabBarLabel: "Meals" }}
        />
        <Tab.Screen
          name="Favorites"
          options={{ tabBarBadge: 3, tabBarLabel: "Meals" }}
          component={FavoriteScreen}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default MealsTab;
