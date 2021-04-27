import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import MealItem from "../components/mealItem";

const MealList = (props) => {
  const { navigation, listData } = props;
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
  return (
    <View style={styles.screen}>
      <FlatList
        style={{ width: "100%" }}
        keyExtractor={(item, index) => item.id}
        data={listData}
        renderItem={renderItem}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  screen: {
    // flex: 1,
    // height: 150,
    // justifyContent: "center",
    // alignItems: "center",
  },
});
export default MealList;
