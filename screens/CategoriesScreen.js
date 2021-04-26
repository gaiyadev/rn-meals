import React from "react";

import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGrid from "../components/CategoryGrid";

const CategoriesScreen = (props) => {
  const { navigation } = props;
  const renderItem = (itemData) => {
    return (
      <CategoryGrid
        id={itemData.item.id}
        title={itemData.item.title}
        navigation={navigation}
        color={itemData.item.color}
      />
    );
  };
  return (
    <FlatList
      keyExtractor={(item) => item.id}
      data={CATEGORIES}
      numColumns={2}
      renderItem={renderItem}
    />
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    height: 150,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CategoriesScreen;
