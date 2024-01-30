import { Surface, Text } from "react-native-paper";
import React from "react";
import { StyleSheet } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../App";

interface NavigationProps {
  navigation: NativeStackNavigationProp<RootStackParamList, "DashboardScreen">;
}

export default function DashboardScreen({ navigation }: NavigationProps) {
  return (
    <Surface style={styles.container}>
      <Text>DashboardScreen</Text>
    </Surface>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
