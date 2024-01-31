import React, { useState } from "react";
import { Surface, Text } from "react-native-paper";
import { StyleSheet } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../../App";
import { Picker } from "@react-native-picker/picker";

interface NavigationProps {
  navigation: NativeStackNavigationProp<
    RootStackParamList,
    "WeightSelectorScreen"
  >;
}

export default function WeightSelectorScreen() {
  const [selectAge, setSelectedAge] = useState(0);
  return (
    <Surface style={styles.container}>
      <Picker
        selectedValue={selectAge}
        onValueChange={(itemValue, itemIndex) => setSelectedAge(itemIndex)}
      >
        {Array.from({ length: 97 }).map((_, index) => (
          <Picker.Item
            label={String(index + 3)}
            value={String(index + 3)}
            key={index}
          />
        ))}
      </Picker>
    </Surface>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
