import React from "react";
import { useSelector } from "react-redux";
import MealList from "../components/MealList";

const CategoriesMealScreen = ({ route, navigation }) => {
  const availableMeals = useSelector((state) => state.meals.filteredMeals);
  const { categoryId } = route.params;
  const catId = categoryId;

  const displayMeals = availableMeals.filter(
    (meal) => meal.categoryIds.indexOf(catId) >= 0
  );
  return <MealList navigation={navigation} listData={displayMeals} />;
};

export default CategoriesMealScreen;
