import * as SQLite from "expo-sqlite";

// Open connection of database
export default function openDatabase() {
  const db = SQLite.openDatabase("db.db");
  return db;
}
