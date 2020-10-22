import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

import CustomButton from "./Button";

const AccountForm = ({ value, onTextChange, goBack }) => {
  return (
    <View style={styles.form}>
      <Text style={styles.title}>Account Infomation</Text>
      <Text style={styles.label}>Name</Text>
      <TextInput
        placeholder="name"
        style={styles.input}
        value={value.name}
        onChangeText={(input) =>
          onTextChange((prevState) => {
            return {
              ...prevState,
              name: input,
            };
          })
        }
      />
      <Text style={styles.label}>Address</Text>
      <TextInput
        placeholder="address"
        style={styles.input}
        value={value.address}
        onChangeText={(input) =>
          onTextChange((prevState) => {
            return {
              ...prevState,
              address: input,
            };
          })
        }
      />
      <Text style={styles.label}>Building No.</Text>
      <TextInput
        placeholder="number"
        style={styles.input}
        value={value.no}
        onChangeText={(input) =>
          onTextChange((prevState) => {
            return {
              ...prevState,
              no: input,
            };
          })
        }
      />
      <View style={styles.itemMid}>
        <CustomButton title="Edit" callBack={() => goBack()} />
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
