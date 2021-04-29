import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import MealList from "../components/MealList";

const FavoriteScreen = ({ navigation }) => {
  // const availableMeals = useSelector((state) => state.meals.meals);
  const favMeals = useSelector((state) => state.meals.favoriteMeals);
  if (!favMeals || favMeals.length === 0) {
    return (
      <View style={styles.main}>
        <Text>No favorites meals added</Text>
      </View>
    );
  }
  return <MealList listData={favMeals} navigation={navigation} />;
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default FavoriteScreen;
