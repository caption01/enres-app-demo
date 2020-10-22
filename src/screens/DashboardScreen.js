import React from "react";
import { Text, View, StyleSheet } from "react-native";

import Header from "../components/Header";
import PieCharts from "../components/PieChart";

const DashboardScreen = () => {
  return (
    <View style={styles.container}>
      <PieCharts />
      <Text>Build 1 infomation</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default DashboardScreen;
