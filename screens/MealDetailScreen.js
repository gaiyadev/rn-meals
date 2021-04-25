import React from "react";
import { View, Text, StyleSheet } from "react-native";

const MealDetailsScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>{selectedCategory.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {},
});

export default MealDetailsScreen;
