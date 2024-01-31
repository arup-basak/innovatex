import React, { useState, useEffect } from "react";
import { StyleSheet } from "react-native";
import { Surface, Text, Button } from "react-native-paper";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../App";
import * as SQLite from "expo-sqlite/next";

interface NavigationProps {
  navigation: NativeStackNavigationProp<RootStackParamList, "WaterView">;
}

const createTable = async () => {
  const db = await SQLite.openDatabaseAsync("user-data");

  await db.execAsync(`CREATE TABLE IF NOT EXISTS water_history (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    date TEXT NOT NULL,
    glasses_count INTEGER NOT NULL
  );`);
};

export default function WaterView({ navigation }: NavigationProps) {
  const [glassesCount, setGlassesCount] = useState(0);
  const currentDate = new Date().toISOString().slice(0, 10);

  const readGlass = async (): Promise<number> => {
    const db = await SQLite.openDatabaseAsync("user-data");

    try {
      const result: any[] = await db.getAllAsync(
        `SELECT glasses_count FROM water_history WHERE date = ${currentDate}`
      );
      if (result) {
        return result[0].glasses_count;
      }
      return 0;
    } catch (e) {
      console.error(e);
      return 0;
    }
  };

  const createGlass = async () => {
    const db = await SQLite.openDatabaseAsync("user-data");

    await db.execAsync(
      `INSERT OR REPLACE INTO water_history (date, glasses_count) VALUES (${currentDate}, ${
        glassesCount + 1
      });`
    );
  };

  const addGlass = async () => {
    const db = await SQLite.openDatabaseAsync("user-data");

    await db.execAsync(
      `UPDATE water_history set glasses_count = glasses_count + 1`
    );
    setGlassesCount(glassesCount + 1);
  };

  useEffect(() => {
    createTable();
    createGlass();
    readGlass().then((val) => {
      setGlassesCount(val);
    });
  }, []);

  return (
    <Surface style={styles.container}>
      <Text>Glasses Count: {glassesCount}</Text>
      <Button onPress={addGlass} mode="contained">
        Add Glass
      </Button>
      {/* Add more UI components as needed */}
    </Surface>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
});
