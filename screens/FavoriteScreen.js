import React from "react";
import { useSelector } from "react-redux";
import MealList from "../components/MealList";

const FavoriteScreen = ({ navigation }) => {
  // const availableMeals = useSelector((state) => state.meals.meals);
  const favMeals = useSelector((state) => state.meals.favoriteMeals);

  return <MealList listData={favMeals} navigation={navigation} />;
};

export default FavoriteScreen;
