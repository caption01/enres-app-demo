import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";

import PieCharts from "../components/PieChart";

const chartData = [
  { id: "1", x: "Building 1", y: 30 },
  { id: "2", x: "Building 2", y: 15 },
  { id: "3", x: "Building 3", y: 55 },
];

const DashboardScreen = () => {
  return (
    <View style={styles.container}>
      <PieCharts data={chartData} />
      <Text style={styles.text}>Energy Usage Summary </Text>
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
  text: {
    fontSize: 16,
  },
});

export default DashboardScreen;
