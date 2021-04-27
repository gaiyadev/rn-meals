import React from "react";
import { View, Text, Image, ScrollView, StyleSheet } from "react-native";
import { MEALS } from "../data/dummy-data";

const MealDetailsScreen = ({ route, navigation }) => {
  const { params } = route.params;
  const mId = params.mealId;
  const selectedMeal = MEALS.find((meal) => meal.id === mId);

  return (
    <ScrollView>
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
      <View style={styles.detals}>
        <Text style={styles.text}> {selectedMeal.duration}m</Text>
        <Text style={styles.text}>{selectedMeal.complexity.toUpperCase()}</Text>
        <Text style={styles.text}>
          {selectedMeal.affordability.toUpperCase()}
        </Text>
      </View>
      <Text style={styles.title}>Ingredient: </Text>
      {selectedMeal.ingredients.map((ml) => {
        return (
          <Text style={styles.list} key={ml}>
            {ml}
          </Text>
        );
      })}
      <Text style={styles.title}>Steps</Text>
      {selectedMeal.steps.map((s) => {
        return (
          <Text style={styles.list} key={s}>
            {s}
          </Text>
        );
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  list: {
    justifyContent: "center",
    alignContent: "center",
    paddingHorizontal: 57,
    borderWidth: 1,
    paddingVertical: 15,
    marginVertical: 7,
    borderColor: "grey",
  },
  detals: {
    flexDirection: "row",
    padding: 15,
    justifyContent: "space-around",
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    padding: 13,
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default MealDetailsScreen;
