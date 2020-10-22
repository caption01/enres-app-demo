import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const IndexScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.page}>
      <TouchableOpacity onPress={() => navigation.navigate("Tabs")}>
        <Text style={styles.text}>Enres Demo App.</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
  text: {
    fontSize: 38,
    padding: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 16,
  },
});

export default IndexScreen;
