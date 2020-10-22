import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import {
  VictoryChart,
  VictoryPie,
  VictoryTheme,
  VictoryLabel,
  VictoryContainer,
} from "victory-native";

const colors = ["#636362", "#a1a1a1", "#d6d6d6"];

const PieCharts = ({ data }) => {
  return (
    <View style={styles.container}>
      <VictoryPie
        data={data}
        colorScale={colors}
        labels={({ datum }) => `${datum.y}%`}
        style={{
          labels: { fontSize: 16 },
        }}
        height={350}
        labelPosition="centroid"
        style={{
          labels: { fontSize: 20 },
        }}
        events={[
          {
            target: "data",
            eventHandlers: {
              onPressIn: () => {
                return [
                  {
                    target: "labels",
                    mutation: (props) => {
                      const currentText = props.text;

                      if (currentText === props.datum.x) {
                        return null;
                      }

                      return {
                        text: props.datum.x,
                      };
                    },
                  },
                  {
                    target: "data",
                    mutation: ({ style }) => {
                      return style.fill === "#c43a31"
                        ? null
                        : { style: { fill: "#c43a31" } };
                    },
                  },
                ];
              },
            },
          },
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 0,
    height: 400,
  },
});

export default PieCharts;
