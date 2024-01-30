import { StyleSheet } from "react-native";
import React from "react";
import { Surface, TextInput, IconButton } from "react-native-paper";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../App";

interface NavigationProps {
  navigation: NativeStackNavigationProp<RootStackParamList, "RegisterScreen">;
}

export default function RegisterScreen({ navigation }: NavigationProps) {
  return (
    <Surface style={styles.container}>
      <TextInput
        mode="outlined"
        style={styles.textInputContainer}
        label="Enter Your Name"
      />
      <IconButton
        icon="chevron-right"
        onPress={() => navigation.navigate("MainGoalSelector")}
        size={32}
        containerColor="#3d0069"
        iconColor="#eb376d"
        rippleColor="#ce9ef0"
      />
    </Surface>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  textInputContainer: {
    margin: 12,
    width: 200,
  },
});
