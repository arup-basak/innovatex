import React, { useState, useEffect } from "react";
import { StyleSheet } from "react-native";
import { Surface, Text, Button } from "react-native-paper";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../App";
import {
  createTable,
  createGlass,
  readGlass,
  addGlass,
} from "../../utils/sqlite/glass_count";

interface NavigationProps {
  navigation: NativeStackNavigationProp<RootStackParamList, "WaterView">;
}

export default function WaterView({ navigation }: NavigationProps) {
  const [glassesCount, setGlassesCount] = useState(0);

  const handleAddGlass = () => {
    addGlass().then((resp) => {
      if (resp) {
        setGlassesCount(glassesCount + 1);
      }
    });
  };

  useEffect(() => {
    createTable();
    createGlass(glassesCount);
    readGlass().then((val) => {
      setGlassesCount(val);
    });
  }, []);

  return (
    <Surface style={styles.container}>
      <Text>Glasses Count: {glassesCount}</Text>
      <Button onPress={handleAddGlass} mode="contained">
        Add Glass
      </Button>
    </Surface>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
});
