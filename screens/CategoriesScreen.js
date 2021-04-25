import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { CATEGORIES } from "../data/dummy-data";

const CategoriesScreen = (props) => {
  const { navigation } = props;

  const renderItem = (itemData) => {
    return (
      <TouchableOpacity
        style={styles.gridItem}
        onPress={() => {
          navigation.navigate("CategoriesMealScreen", {
            categoryId: itemData.item.id,
            title: itemData.item.title,
          });
        }}
      >
        <View>
          <Text>{itemData.item.title}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <FlatList
      keyExtractor={(item, index) => item.id}
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
  gridItem: {
    flex: 1,
    height: 150,
    justifyContent: "center",
    alignItems: "center",
    margin: 12,
  },
});

export default CategoriesScreen;
