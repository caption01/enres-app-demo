import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";

const CustomButton = ({ title, callBack }) => {
  return (
    <TouchableOpacity style={styles.btnBox} onPress={() => callBack()}>
      <Text style={styles.btn}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btnBox: {
    borderRadius: 10,
    marginTop: 16,
    backgroundColor: "#00B2A9",
    width: 200,
  },
  btn: {
    color: "#ffffff",
    fontSize: 22,
    textAlign: "center",
    padding: 8,
  },
});

export default CustomButton;
