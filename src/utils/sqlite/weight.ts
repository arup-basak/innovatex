import * as SQLite from "expo-sqlite/next";
import { currentDate } from "../date";

const checkLatestWeight = async (): Promise<number> => {
  const db = await SQLite.openDatabaseAsync("user-data");

  try {
    const result: any[] = await db.getAllAsync(
      `SELECT weight_value FROM weight_history WHERE date = ${currentDate}`
    );
    if (result) {
      return result[0].weight_value;
    }
    return 0;
  } catch (e) {
    console.error(e);
    return 0;
  }
};

const addNewWeightValue = async (glassesCount: number) => {
  const db = await SQLite.openDatabaseAsync("user-data");

  await db.execAsync(
    `INSERT OR REPLACE INTO weight_history (date, weight_value) VALUES (${currentDate}, ${
      glassesCount + 1
    });`
  );
};

const createTable = async () => {
  const db = await SQLite.openDatabaseAsync("user-data");

  await db.execAsync(`CREATE TABLE IF NOT EXISTS weight_history (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      date TEXT NOT NULL,
      weight_value INTEGER NOT NULL
    );`);
};

const weightHistory = async () => {
  const db = await SQLite.openDatabaseAsync("user-data");

  try {
    const result: any[] = await db.getAllAsync(
      `SELECT weight_value FROM weight_history`
    );
    return result;
  } catch (e) {
    console.error(e);
    return null;
  }
};

export { createTable, checkLatestWeight, addNewWeightValue, weightHistory };
