import React from "react";
import { View, Text, TouchableNativeFeedback, StyleSheet } from "react-native";

const CategoryGrid = (props) => {
  const { title, id, navigation, color } = props;
  return (
    <View style={styles.gridItem}>
      <TouchableNativeFeedback
        style={{ flex: 1 }}
        onPress={() => {
          navigation.navigate("CategoriesMealScreen", {
            categoryId: id,
            title: title,
          });
        }}
      >
        <View style={{ ...styles.container, ...{ backgroundColor: color } }}>
          <Text numberOfLines={2} style={styles.title}>
            {title}
          </Text>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontFamily: "OpenSansBold",
    fontSize: 20,
    textAlign: "center",
  },
  container: {
    flex: 1,
    shadowOpacity: 0.26,
    shadowColor: "black",
    elevation: 6,
    shadowRadius: 10,
    padding: 15,
    justifyContent: "center",
    alignItems: "center",

    shadowOffset: { width: 0, height: 2 },
  },
  gridItem: {
    flex: 1,
    height: 150,
    margin: 12,
    elevation: 6,
  },
});

export default CategoryGrid;
