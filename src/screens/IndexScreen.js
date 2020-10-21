import React from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

const IndexScreen = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Text>Enres Application.</Text>
      <Button title="Demo" onPress={() => navigation.navigate("Tabs")} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default IndexScreen;
