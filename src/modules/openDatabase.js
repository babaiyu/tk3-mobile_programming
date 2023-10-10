import * as SQLite from "expo-sqlite";

// Opening existing database at database/mydatabase.db
export default function openDatabase() {
  // const db = SQLite.openDatabase("database/mydatabase.db");
  const db = SQLite.openDatabase("db.db");
  return db;
}
