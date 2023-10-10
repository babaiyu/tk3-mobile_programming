import React from "react";
import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import useController from "./useController";

export default function ReportScreen() {
  const { items } = useController();

  const renderItem = ({ item }) => (
    <View style={s.item}>
      <Text>{item?.value}</Text>
    </View>
  );

  return (
    <SafeAreaView style={s.container}>
      <FlatList
        data={items}
        keyExtractor={(item) => (item?.id ?? 0).toString()}
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
}

const s = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    marginTop: 16,
    borderBottomWidth: 1,
  },
});
