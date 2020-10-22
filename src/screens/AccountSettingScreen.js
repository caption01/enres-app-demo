import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

import AccountForm from "../components/AccountForm";

const AccountSettingScreen = () => {
  const navigation = useNavigation();

  const [account, setAccount] = useState({
    name: "Demo-Facory",
    address: "132 BNK Thailand",
    no: "4",
  });

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <View>
      <AccountForm value={account} onTextChange={setAccount} goBack={goBack} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default AccountSettingScreen;
