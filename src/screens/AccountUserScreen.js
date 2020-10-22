import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

import UserInviteForm from "../components/UserInviteForm";
import UserLists from "../components/UserList";

const AccountUserScreen = () => {
  const [select, setSelect] = useState("operator");

  return (
    <View style={styles.container}>
      <UserInviteForm value={select} onSelectChange={setSelect} />
      <UserLists />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    height: "100%",
  },
});

export default AccountUserScreen;
