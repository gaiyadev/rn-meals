import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { Platform } from "react-native";
import MealDetailScreen from "../screens/MealDetailScreen";
import CategoriesMealScreen from "../screens/CategoriesMealScreen";
import CategoriesScreen from "../screens/CategoriesScreen";
import FavoriteScreen from "../screens/FavoriteScreen";
import FilterScreen from "../screens/FilterScreen";

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
        options={({ route, navigation }) => ({
          title: "Meal Category",
          headerStyle: {
            backgroundColor:
              Platform.OS === "android" ? Colors.SecondaryColor : "",
          },
          headerTintColor:
            Platform.OS === "android" ? "#fff" : Colors.SecondaryColor,
          headerTitleStyle: {
            fontWeight: "bold",
            fontFamily: "OpenSansRegular",
          },
          headerLeft: () => (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
              <Item
                title="Drawer"
                iconName="bars"
                onPress={() => {
                  navigation.toggleDrawer();
                }}
              ></Item>
            </HeaderButtons>
          ),
        })}
      />
      <Stack.Screen
        name="CategoriesMealScreen"
        component={CategoriesMealScreen}
        options={({ route }) => ({
          title: route.params.title,
          headerStyle: {
            backgroundColor:
              Platform.OS === "android" ? Colors.SecondaryColor : "",
          },
          headerTintColor:
            Platform.OS === "android" ? "#fff" : Colors.SecondaryColor,
          headerTitleStyle: {
            fontWeight: "bold",
            fontFamily: "OpenSansRegular",
          },
        })}
      />
      <Stack.Screen
        name="MealDetailScreen"
        component={MealDetailScreen}
        options={({ route, navigation }) => ({
          title: route.params.params.title,
          headerStyle: {
            backgroundColor:
              Platform.OS === "android" ? Colors.SecondaryColor : "",
          },
          headerTintColor:
            Platform.OS === "android" ? "#fff" : Colors.SecondaryColor,
          headerTitleStyle: {
            fontWeight: "bold",
            fontFamily: "OpenSansRegular",
          },
          headerRight: () => (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
              <Item
                title="Fav"
                iconName={route.params.isFav ? "star" : "coffee"}
                onPress={route.params.query}
              ></Item>
            </HeaderButtons>
          ),
        })}
      />

      <Stack.Screen
        name="FilterScreen"
        component={MealDetailScreen}
        options={({ route }) => ({
          title: "Filter",
          headerStyle: {
            backgroundColor:
              Platform.OS === "android" ? Colors.SecondaryColor : "",
          },
          headerTintColor:
            Platform.OS === "android" ? "#fff" : Colors.SecondaryColor,
          headerTitleStyle: {
            fontWeight: "bold",
            fontFamily: "OpenSansRegular",
          },
        })}
      />
    </Stack.Navigator>
    // </NavigationContainer>
  );
};

const FavTab = createStackNavigator();

const FavMealsTab = () => {
  return (
    <FavTab.Navigator>
      <FavTab.Screen
        name="Favorite"
        component={FavoriteScreen}
        options={({ route, navigation }) => ({
          title: "Favorites",
          headerStyle: {
            backgroundColor:
              Platform.OS === "android" ? Colors.SecondaryColor : "",
          },
          headerTintColor:
            Platform.OS === "android" ? "#fff" : Colors.SecondaryColor,
          headerTitleStyle: {
            fontFamily: "OpenSansRegular",
            fontWeight: "bold",
          },
          headerLeft: () => (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
              <Item
                title="Drawer"
                iconName="bars"
                onPress={() => {
                  navigation.toggleDrawer();
                }}
              ></Item>
            </HeaderButtons>
          ),
        })}
      />
      <FavTab.Screen name="Details" component={MealDetailScreen} />
    </FavTab.Navigator>
  );
};

const Tab =
  Platform.OS === "android"
    ? createMaterialBottomTabNavigator()
    : createBottomTabNavigator();

const MealsTab = () => {
  return (
    //  <NavigationContainer>
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
              focused && Platform.OS === "android" ? "information" : "ios-list";
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
        options={{ tabBarLabel: "Menu" }}
      />
      <Tab.Screen
        name="Favorites"
        options={{ tabBarBadge: 3, tabBarLabel: "Favorites" }}
        component={FavMealsTab}
      />
    </Tab.Navigator>
    //  </NavigationContainer>
  );
};

// drawer
const FiltersNavigator = createStackNavigator();

const HomeStackScreen = () => {
  return (
    <FiltersNavigator.Navigator>
      <FiltersNavigator.Screen
        name="FIlters"
        component={FilterScreen}
        options={({ route, navigation }) => ({
          title: "Filters",
          headerStyle: {
            backgroundColor:
              Platform.OS === "android" ? Colors.SecondaryColor : "",
          },
          headerTintColor:
            Platform.OS === "android" ? "#fff" : Colors.SecondaryColor,
          headerTitleStyle: {
            fontWeight: "bold",
            fontFamily: "OpenSansRegular",
          },
          headerLeft: () => (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
              <Item
                title="Drawer"
                iconName="bars"
                onPress={() => {
                  navigation.toggleDrawer();
                }}
              ></Item>
            </HeaderButtons>
          ),
          headerRight: () => (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
              <Item
                title="Save"
                iconName="save"
                onPress={() => {
                  console.log(
                    "saving sittings",
                    navigation.getParam("query")()
                  );
                }}
              ></Item>
            </HeaderButtons>
          ),
        })}
      />
    </FiltersNavigator.Navigator>
  );
};

const MainNavigator = createDrawerNavigator();

const MainMealsDrawer = () => {
  return (
    <NavigationContainer>
      <MainNavigator.Navigator>
        <MainNavigator.Screen name="MealsFav" component={MealsTab} />
        <MainNavigator.Screen name="Filter" component={HomeStackScreen} />
      </MainNavigator.Navigator>
    </NavigationContainer>
  );
};

// export default MealsTab;
export default MainMealsDrawer;
