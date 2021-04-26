import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { MEALS } from "../data/dummy-data";

const MealDetailsScreen = ({ route, navigation }) => {
  const { params } = route.params;
  const mId = params.mealId;
  const selectedMeal = MEALS.find((meal) => meal.id === mId);

  return (
    <View style={styles.screen}>
      <Text> {selectedMeal.title} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 2,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
});

export default MealDetailsScreen;
