import React, { useCallback, useEffect } from "react";
import { View, Text, Image, ScrollView, StyleSheet } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { toggleFavorite } from "../redux/actions/mealAction";

const MealDetailsScreen = ({ route, navigation }) => {
  const availableMeals = useSelector((state) => state.meals.meals);
  const { params } = route.params;
  const mId = params.mealId;
  const currentFavoriteMeals = useSelector((state) =>
    state.meals.favoriteMeals.some((meal) => meal.id === mId)
  );
  const selectedMeal = availableMeals.find((meal) => meal.id === mId);

  const dispatch = useDispatch();

  const toggleFavoriteHandler = useCallback(() => {
    dispatch(toggleFavorite(mId));
  }, [dispatch, mId]);

  useEffect(() => {
    navigation.setParams({
      query: toggleFavoriteHandler,
    });
  }, [toggleFavoriteHandler]);

  useEffect(() => {
    navigation.setParams({
      isFav: currentFavoriteMeals,
    });
  }, [currentFavoriteMeals]);

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
