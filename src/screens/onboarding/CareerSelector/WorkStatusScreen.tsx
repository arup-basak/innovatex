import React from "react";
import { Surface, Text } from "react-native-paper";
import { StyleSheet } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../../App";

interface NavigationProps {
  navigation: NativeStackNavigationProp<RootStackParamList, "WorkStatusScreen">;
}

export default function WorkStatusScreen() {
  return (
    <Surface style={styles.container}>
      <Text>WorkStatusScreen</Text>
    </Surface>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
