import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { MaterialIcons, FontAwesome } from "@expo/vector-icons";

const deviceInitial = [
  { id: "kvar-a-1", name: "Meter-1", status: true, value: [10, 20, 10] },
  { id: "kvar-a-2", name: "Meter-2", status: true, value: [30, 20, 10] },
  { id: "kw-b-1", name: "Meter-3", status: false, value: [0, 0, 0] },
  { id: "kw-b-2", name: "Meter-3", status: false, value: [10, 20, 0] },
  { id: "kw-c-1", name: "Meter-3", status: true, value: [7, 23, 35] },
];

const DeviceList = ({ data, goToDetail }) => {
  return (
    <View style={styles.deviceBox}>
      <FlatList
        keyExtractor={(user) => `${user.id}`}
        data={data}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={() => goToDetail(item)}>
              <View style={styles.deviceList}>
                <Text style={styles.deviceListText}>
                  {item.name} : ({item.id})
                </Text>
                <MaterialIcons
                  name="error"
                  size={24}
                  color={item.status ? "green" : "red"}
                />
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const DevicesScreen = ({ navigation }) => {
  const [devices, setDevice] = useState(deviceInitial);
  const [search, setSearch] = useState("");

  const filterDevice = () => {
    return devices.filter((device) => device?.id.includes(search));
  };

  const goToDetail = (item) => {
    navigation.navigate("DeviceDetail", { item });
  };

  const deviceList = filterDevice();

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Devices</Text>
      <View style={styles.inputBox}>
        <TextInput
          style={styles.input}
          placeholder="device-id"
          onChangeText={setSearch}
          autoCapitalize="none"
        />
        <FontAwesome name="qrcode" size={40} color="black" />
      </View>
      <DeviceList data={deviceList} goToDetail={goToDetail} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#ffffff",
    height: "100%",
  },
  inputBox: {
    flexDirection: "row",
    marginBottom: 16,
  },
  input: {
    flex: 1,
    padding: 8,
    borderWidth: 2,
    borderColor: "grey",
    marginRight: 16,
  },
  deviceBox: {},
  header: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 16,
    textAlign: "center",
  },
  deviceList: {
    flexDirection: "row",
    borderColor: "grey",
    borderWidth: 2,
    padding: 8,
    marginBottom: 8,
  },
  deviceListText: {
    flex: 1,
  },
});

export default DevicesScreen;
