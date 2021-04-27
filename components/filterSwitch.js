import React from "react";
import { View, StyleSheet, Switch, Platform, Text } from "react-native";
import Colors from "../themes/colors";

const filterSwitch = (props) => {
  return (
    <View style={styles.container}>
      <Text>{props.label}</Text>
      <Switch
        trackColor={{
          true: Platform.OS === "android" ? Colors.SecondaryColor : "",
          false: Platform.OS === "android" ? Colors.accentColor : "",
        }}
        thumbColor={Colors.SecondaryColor}
        value={props.state}
        onValueChange={props.onChange}
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
    marginVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "80%",
  },
});

export default filterSwitch;
