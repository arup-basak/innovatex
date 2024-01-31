import * as SQLite from "expo-sqlite/next";
import { currentDate } from "../date";

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

const createGlass = async (glassesCount: number) => {
  const db = await SQLite.openDatabaseAsync("user-data");

  await db.execAsync(
    `INSERT OR REPLACE INTO water_history (date, glasses_count) VALUES (${currentDate}, ${
      glassesCount + 1
    });`
  );
};

const createTable = async () => {
  const db = await SQLite.openDatabaseAsync("user-data");

  await db.execAsync(`CREATE TABLE IF NOT EXISTS water_history (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      date TEXT NOT NULL,
      glasses_count INTEGER NOT NULL
    );`);
};

const addGlass = async () => {
  const db = await SQLite.openDatabaseAsync("user-data");

  try {
    await db.execAsync(
      `UPDATE water_history set glasses_count = glasses_count + 1`
    );
    return true;
  } catch {
    return false;
  }
};

export { createTable, createGlass, readGlass, addGlass };
