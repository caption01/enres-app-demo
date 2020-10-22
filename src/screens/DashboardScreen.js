import React from "react";
import { Text, View, StyleSheet } from "react-native";

import PieCharts from "../components/PieChart";

const DashboardScreen = () => {
  return (
    <View style={styles.container}>
      <PieCharts />
      <Text>Energy Usage Summary </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
});

export default DashboardScreen;
