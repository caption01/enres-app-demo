import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const userMock = [
  { id: "1", name: "Aaaaaaaa", role: "admin" },
  { id: "2", name: "Bbbbbbbb", role: "admin" },
  { id: "3", name: "Cccccccc", role: "operator" },
  { id: "4", name: "Ddddddddd", role: "operator" },
  { id: "5", name: "Eeeeeeeee", role: "operator" },
];

const UserLists = ({ userList }) => {
  return (
    <View style={styles.userBox}>
      <Text style={styles.header}>User Lists</Text>
      <FlatList
        keyExtractor={(user) => user.id}
        data={userMock}
        renderItem={({ item }) => {
          return (
            <View style={styles.userContainer}>
              <Text>
                {item.name} : ({item.role})
              </Text>
              <AntDesign name="edit" size={24} color="black" />
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  userBox: {
    padding: 8,
  },
  header: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 16,
  },
  userContainer: {
    flexDirection: "row",
    borderColor: "grey",
    borderWidth: 2,
    justifyContent: "space-between",
    padding: 8,
    marginBottom: 8,
  },
});

export default UserLists;
