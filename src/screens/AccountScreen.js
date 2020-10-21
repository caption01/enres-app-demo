import React from "react";
import { Text, View, StyleSheet, Image, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Header from "../components/Header";
import CustomButton from "../components/Button";

const AccountScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Header title="Account" />
      <Image
        style={styles.image}
        source={{
          uri:
            "https://www.straitstimes.com/sites/default/files/styles/article_pictrure_780x520_/public/articles/2020/01/15/nmfordfactory1501.jpg?itok=qFUigvyd&timestamp=1579067780",
        }}
      />
      <Text>Demo-Factory</Text>
      <CustomButton
        title="User"
        callBack={() => navigation.navigate("AccountUser")}
      />
      <CustomButton
        title="Setting"
        callBack={() => navigation.navigate("AccountSetting")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    height: 200,
    width: 200,
    borderRadius: 50,
    marginBottom: 5,
  },
});

export default AccountScreen;
