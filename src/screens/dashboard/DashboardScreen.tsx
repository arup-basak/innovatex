import { Surface, Text, TouchableRipple } from "react-native-paper";
import React from "react";
import { StyleSheet, View } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../App";

interface NavigationProps {
  navigation: NativeStackNavigationProp<RootStackParamList, "DashboardScreen">;
}

export default function DashboardScreen({ navigation }: NavigationProps) {
  return (
    <Surface style={styles.container}>
      <Text>Weight</Text>
      <TouchableRipple
        style={styles.cardContainer}
        onPress={() => navigation.navigate("WeightView")}
      >
        <View>
          <Text>55 kg</Text>
        </View>
      </TouchableRipple>
    </Surface>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cardContainer: {
    backgroundColor: "#fff",
    elevation: 2,
    padding: 12,
    margin: 8,
    borderRadius: 18,
  },
});
