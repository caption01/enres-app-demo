import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";

import AccountForm from "../components/AccountForm";

const AccountSettingScreen = () => {
  const [account, setAccount] = useState({
    name: "Demo-Facory",
    address: "132 BNK Thailand",
    no: "4",
  });

  return (
    <View>
      <AccountForm value={account} onTextChange={setAccount} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default AccountSettingScreen;
