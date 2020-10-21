import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const IndexScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.page}>
      <TouchableOpacity onPress={() => navigation.navigate("Tabs")}>
        <Text style={styles.text}>Enres Application.</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    borderColor: "red",
    borderWidth: 2,
  },
  text: {
    fontSize: 38,
  },
});

export default IndexScreen;
