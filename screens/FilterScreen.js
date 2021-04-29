import React, { useState, useEffect, useCallback } from "react";
import { StyleSheet, View, Text } from "react-native";
import { useDispatch } from "react-redux";
import FilterSWitch from "../components/filterSwitch";
import { setFilter } from "../redux/actions/mealAction";

const FilterScreen = ({ navigation }) => {
  const [isGLutenFree, setIsGLutenFree] = useState(false);
  const [isLactoseFree, setIsLactoseFree] = useState(false);
  const [isVegan, setisVegan] = useState(false);
  const [isVegeterian, setisVegeterian] = useState(false);
  const dispatch = useDispatch();

  const saveFilters = useCallback(() => {
    const appliedFilters = {
      glutenFree: isGLutenFree,
      lactoseFree: isLactoseFree,
      vegan: isVegan,
      vegetarian: isVegeterian,
    };
    console.log(appliedFilters);
    dispatch(setFilter(appliedFilters));
  }, [isGLutenFree, isVegan, isLactoseFree, isVegeterian]);

  useEffect(() => {
    navigation.setParams({
      query: saveFilters,
    });
  }, [saveFilters]);

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Filter Meals </Text>
      <FilterSWitch
        onChange={(newVal) => {
          setIsGLutenFree(newVal);
        }}
        state={isGLutenFree}
        label="Gluten Free"
      />

      <FilterSWitch
        onChange={(newVal) => {
          setIsLactoseFree(newVal);
        }}
        state={isLactoseFree}
        label="Lactose Free"
      />

      <FilterSWitch
        onChange={(newVal) => {
          setisVegan(newVal);
        }}
        state={isVegan}
        label="Vegan Free"
      />

      <FilterSWitch
        onChange={(newVal) => {
          setisVegeterian(newVal);
        }}
        state={isVegeterian}
        label="Vegetarian Free"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    fontSize: 22,
    margin: 20,
    textAlign: "center",
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "80%",
  },
});

export default FilterScreen;
