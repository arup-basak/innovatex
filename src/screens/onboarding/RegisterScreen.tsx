import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Surface, TextInput, IconButton } from "react-native-paper";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../App";
import AsyncStorage from "@react-native-async-storage/async-storage";
import QuestionInput from "../../components/QuestionInput";

interface NavigationProps {
  navigation: NativeStackNavigationProp<RootStackParamList, "RegisterScreen">;
}

export default function RegisterScreen({ navigation }: NavigationProps) {
  const [value, setValue] = useState("");
  const handleClick = async () => {
    try {
      await AsyncStorage.setItem("user-name", value);
      navigation.navigate("MainGoalSelector");
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <Surface style={styles.container}>
      <QuestionInput handleClick={handleClick} label="Enter Your Name" />
    </Surface>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
