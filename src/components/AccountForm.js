import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";

import CustomButton from "./Button";

const AccountForm = ({ value, onTextChange }) => {
  return (
    <View style={styles.form}>
      <Text style={styles.title}>Account Infomation</Text>
      <Text style={styles.label}>Name</Text>
      <TextInput
        placeholder="anme"
        style={styles.input}
        value={value.name}
        onTextChange={(input) => onTextChange({ ["name"]: input })}
      />
      <Text style={styles.label}>Address</Text>
      <TextInput
        placeholder="address"
        style={styles.input}
        value={value.address}
      />
      <Text style={styles.label}>Building No.</Text>
      <TextInput placeholder="number" style={styles.input} value={value.no} />
      <View style={styles.itemMid}>
        <CustomButton title="Edit" callBack={() => console.log("hello")} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  form: {
    padding: 16,
  },
  title: {
    fontSize: 20,
    textTransform: "uppercase",
    fontWeight: "bold",
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    marginBottom: 16,
  },
  input: {
    padding: 16,
    marginBottom: 16,
    borderColor: "grey",
    borderWidth: 2,
  },
  itemMid: {
    alignSelf: "center",
  },
});

export default AccountForm;
