import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const DeviceLogs = ({ value }) => {
  return (
    <View style={styles.logBox}>
      <Text style={styles.logTitle}>Logs</Text>
      <FlatList
        keyExtractor={(value, index) => index}
        data={value}
        renderItem={({ item }) => {
          return (
            <View style={styles.logValBox}>
              <Text style={styles.logVal}>incoming value : {item}</Text>
              <Text style={styles.logVal}>Time : 2020-10-21</Text>
            </View>
          );
        }}
      />
    </View>
  );
};

const DeviceDetailScreen = ({ route }) => {
  const { item } = route.params;
  return (
    <View style={styles.container}>
      <View style={styles.infoBox}>
        <FontAwesome
          name="circle"
          size={40}
          color={item.status ? "green" : "red"}
        />
        <Text style={styles.infoText}>
          {item.name} : ({item.id})
        </Text>
      </View>
      <DeviceLogs value={item.value} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    height: "100%",
  },
  infoBox: {
    flexDirection: "row",
    alignSelf: "center",
    marginBottom: 32,
    marginTop: 32,
  },
  infoText: {
    marginLeft: 16,
    fontSize: 32,
  },
  logBox: {
    padding: 16,
  },
  logTitle: {
    fontSize: 24,
    marginBottom: 16,
    fontWeight: "bold",
  },
  logValBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  logVal: {
    fontSize: 16,
  },
});

export default DeviceDetailScreen;
