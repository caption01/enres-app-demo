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

const UserInviteForm = ({ value, onSelectChange }) => {
  return (
    <View style={styles.form}>
      <Text style={styles.title}>Invite User</Text>
      <Text style={styles.label}>Email address</Text>
      <TextInput placeholder="email" style={styles.input} />
      <Text style={styles.label}>User Role</Text>
      <DropDownPicker
        items={[
          {
            label: "Admin",
            value: "admin",
          },
          {
            label: "Operator",
            value: "operator",
          },
        ]}
        defaultValue={value}
        containerStyle={{ height: 40 }}
        style={{ backgroundColor: "#fafafa" }}
        itemStyle={{
          justifyContent: "flex-start",
          marginBottom: 16,
        }}
        dropDownStyle={{ backgroundColor: "#fafafa" }}
        onChangeItem={(item) => onSelectChange(item.value)}
      />
      <View style={styles.itemMid}>
        <CustomButton
          title="Invite Submit"
          callBack={() => console.log("hello")}
        />
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

export default UserInviteForm;
