import React from "react";
import { StyleSheet, View } from "react-native";
import { Surface, TouchableRipple, Text } from "react-native-paper";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../App";

interface NavigationProps {
  navigation: NativeStackNavigationProp<RootStackParamList, "MainGoalSelector">;
}

interface Goal {
    label: string;
    route: keyof RootStackParamList; 
  }

const goals: Goal[] = [
  { label: "Health", route: "WeightSelectorScreen" },
  { label: "Education", route: "StudyStatusScreen" },
  { label: "Career", route: "WorkStatusScreen" },
];

export default function MainGoalSelector({ navigation }: NavigationProps) {
  return (
    <Surface style={styles.container}>
      {goals.map((goal, index) => (
        <TouchableRipple
          key={index}
          style={styles.touchableRipple}
          onPress={() => navigation.navigate(goal.route)}
        >
          <View>
            <Text>{goal.label}</Text>
          </View>
        </TouchableRipple>
      ))}
    </Surface>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  touchableRipple: {
    margin: 10,
    borderColor: "#9c9c9c",
    borderWidth: 1,
    padding: 12,
    borderRadius: 4,
  },
});
