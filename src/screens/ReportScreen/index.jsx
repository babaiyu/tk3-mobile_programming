import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import openDatabase from "../../modules/openDatabase";
import { useIsFocused } from "@react-navigation/native";

const db = openDatabase();

export default function ReportScreen() {
  const isFocused = useIsFocused();
  const [items, setItems] = useState(null);

  useEffect(() => {
    if (isFocused) {
      db.transaction((tx) => {
        tx.executeSql("SELECT * FROM items", [], (_, { rows: { _array } }) => {
          setItems(_array);
        });
      });
    }
  }, [isFocused]);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>{JSON.stringify(items)}</Text>
    </View>
  );
}
