import React from "react";
import { StyleSheet, View } from "react-native";
import { Surface, TouchableRipple, Text } from "react-native-paper";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../App";
import AsyncStorage from "@react-native-async-storage/async-storage";

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
  const storeData = async (goal: Goal) => {
    try {
      await AsyncStorage.setItem("main-goal", goal.label);
      navigation.navigate(goal.route);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <Surface style={styles.container}>
      {goals.map((goal, index) => (
        <TouchableRipple
          key={index}
          style={styles.touchableRipple}
          onPress={() => storeData(goal)}
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
