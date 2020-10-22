import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

import CustomButton from "../components/Button";

const AccountScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri:
            "https://www.straitstimes.com/sites/default/files/styles/article_pictrure_780x520_/public/articles/2020/01/15/nmfordfactory1501.jpg?itok=qFUigvyd&timestamp=1579067780",
        }}
      />
      <Text style={styles.text}>Demo-Factory</Text>
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
    height: "100%",
    backgroundColor: "#ffffff",
  },
  text: {
    fontSize: 22,
    fontWeight: "bold",
  },
  image: {
    height: 300,
    width: 300,
    borderRadius: 50,
    marginBottom: 16,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,
  },
});

export default AccountScreen;
