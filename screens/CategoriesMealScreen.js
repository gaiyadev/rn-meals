import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import MealItem from "../components/mealItem";
const CategoriesMealScreen = ({ route, navigation }) => {
  const { categoryId } = route.params;
  const catId = categoryId;
  const renderItem = (itemData) => {
    return (
      <MealItem
        onSelectMeal={() => {
          navigation.navigate("MealDetailScreen", {
            params: {
              mealId: itemData.item.id,
              title: itemData.item.title,
            },
          });
        }}
        duration={itemData.item.duration}
        complexity={itemData.item.complexity}
        affordability={itemData.item.affordability}
        imageUrl={itemData.item.imageUrl}
        title={itemData.item.title}
      />
    );
  };
  // const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);

  const displayMeals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(catId) >= 0
  );
  return (
    <View style={styles.screen}>
      <FlatList
        style={{ width: "100%" }}
        keyExtractor={(item, index) => item.id}
        data={displayMeals}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {},
});

export default CategoriesMealScreen;
