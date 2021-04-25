import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { CATEGORIES } from "../data/dummy-data";

const CategoriesMealScreen = ({ route, navigation }, props) => {
  const { categoryId } = route.params;
  const catId = categoryId;

  const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);
  return (
    <View style={styles.screen}>
      <Text> {selectedCategory.title} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {},
});

export default CategoriesMealScreen;
