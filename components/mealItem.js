import React from "react";
import {
  View,
  ImageBackground,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

const MealItem = (props) => {
  const {
    title,
    duration,
    complexity,
    onSelectMeal,
    imageUrl,
    affordability,
  } = props;
  return (
    <View style={styles.mealItem}>
      <TouchableOpacity onPress={onSelectMeal}>
        <View>
          <View style={{ ...styles.mealRow, ...styles.mealHeader }}>
            <ImageBackground style={styles.bgImage} source={{ uri: imageUrl }}>
              <Text style={styles.title}>{title} </Text>
            </ImageBackground>
          </View>
          <View style={{ ...styles.mealRow, ...styles.mealDetails }}>
            <Text style={styles.text}> {duration}m</Text>
            <Text style={styles.text}>{complexity.toUpperCase()}</Text>
            <Text style={styles.text}> {affordability.toUpperCase()} </Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  text: { fontFamily: "OpenSansRegular" },
  title: {
    color: "#fff",
    paddingHorizontal: 12,
    fontSize: 22,
    textAlign: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
    padding: 5,
  },

  bgImage: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
  },
  mealHeader: {
    height: "85%",
  },
  mealRow: {
    flexDirection: "row",
  },
  mealItem: {
    height: 200,
    width: "100%",
    backgroundColor: "grey",
    borderRadius: 10,
    overflow: "hidden",
    marginVertical: 10,
    fontFamily: "OpenSansRegular",
  },
  mealDetails: {
    paddingHorizontal: 10,
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default MealItem;
