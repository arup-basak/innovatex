import { Surface, Text } from "react-native-paper";
import React from "react";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../App";

interface NavigationProps {
  navigation: NativeStackNavigationProp<RootStackParamList, "SettingsScreen">;
}

export default function SettingsScreen({ navigation }: NavigationProps) {
  return (
    <Surface>
      <Text>SettingsScreen</Text>
    </Surface>
  );
}
