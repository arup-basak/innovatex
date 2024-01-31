import React from "react";
import { StyleSheet } from "react-native";
import { Surface, Text, IconButton } from "react-native-paper";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../App";

interface NavigationProps {
  navigation: NativeStackNavigationProp<RootStackParamList, "WaterView">;
}

export default function WaterView({ navigation }: NavigationProps) {
  return (
    <Surface style={styles.contianer}>
      <Text>WaterView</Text>
    </Surface>
  );
}

const styles = StyleSheet.create({
  contianer: { flex: 1 },
});
