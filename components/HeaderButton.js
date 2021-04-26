import React from "react";
import { Platform } from "react-native";
import { HeaderButton } from "react-navigation-header-buttons";
import { FontAwesome } from "@expo/vector-icons";
import Colors from "../themes/colors";

const CustomHeaderBtn = (props) => {
  return (
    <HeaderButton
      {...props}
      IconComponent={FontAwesome}
      iconSize={24}
      color={Platform.OS === "android" ? "#fff" : Colors.primaryColor}
    />
  );
};

export default CustomHeaderBtn;
