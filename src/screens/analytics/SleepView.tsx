import { StyleSheet, View } from "react-native";
import React from "react";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../App";
import { Surface, Text } from "react-native-paper";

interface NavigationProps {
  navigation: NativeStackNavigationProp<RootStackParamList, "SleepView">;
}

const SleepView = ({ navigation }: NavigationProps) => {
  return (
    <Surface style={styles.container}>
      <Text>SleepView</Text>
    </Surface>
  );
};

export default SleepView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
