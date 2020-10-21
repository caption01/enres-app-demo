import React from "react";
import { View, Text, StyleSheet } from "react-native";
import {
  VictoryChart,
  VictoryPie,
  VictoryTheme,
  VictoryLabel,
  VictoryContainer,
} from "victory-native";

const data = [
  { x: "Building 1", y: 35 },
  { x: "Building 2", y: 40 },
  { x: "Building 3", y: 55 },
];

const colors = ["tomato", "orange", "cyan"];

const PieCharts = () => {
  return (
    <View style={styles.container}>
      <VictoryPie
        data={data}
        colorScale={colors}
        labels={({ datum }) => `${datum.x} ${datum.y}%`}
        labels={false}
        style={{
          labels: { fontSize: 16 },
        }}
        height={350}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 0,
    height: 400,
    borderColor: "grey",
    borderWidth: 2,
  },
});

export default PieCharts;
