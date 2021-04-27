import React from "react";
import { MEALS } from "../data/dummy-data";
import MealList from "../components/MealList";

const CategoriesMealScreen = ({ route, navigation }) => {
  const { categoryId } = route.params;
  const catId = categoryId;

  const displayMeals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(catId) >= 0
  );
  return <MealList navigation={navigation} listData={displayMeals} />;
};

export default CategoriesMealScreen;
