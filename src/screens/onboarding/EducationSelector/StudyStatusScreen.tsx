import React from "react";
import { Surface, Text } from "react-native-paper";
import { StyleSheet } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../../App";

interface NavigationProps {
  navigation: NativeStackNavigationProp<RootStackParamList, "StudyStatusScreen">;
}

export default function StudyStatusScreen() {
  return (
    <Surface style={styles.container}>
      <Text>StudyStatusScreen</Text>
    </Surface>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
