import React from "react";
import { StyleSheet, View } from "react-native";
import {
  Surface,
  Text,
  TouchableRipple,
  IconButton,
  Icon,
} from "react-native-paper";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../App";

interface NavigationProps {
  navigation: NativeStackNavigationProp<RootStackParamList, "DashboardScreen">;
}

export default function DashboardScreen({ navigation }: NavigationProps) {
  return (
    <Surface style={styles.container}>
      <View>
        <Text>Weight</Text>
        <TouchableRipple
          style={styles.cardContainer}
          onPress={() => navigation.navigate("WeightView")}
        >
          <View>
            <Text>55 kg</Text>
          </View>
        </TouchableRipple>
      </View>
      <View>
        <Text>Water</Text>
        <TouchableRipple
          style={styles.cardContainer}
          onPress={() => navigation.navigate("WaterView")}
        >
          <View style={styles.row}>
            <Text>0 Glass Of Water</Text>
            <IconButton icon="plus" onPress={() => {}} />
          </View>
        </TouchableRipple>
      </View>
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
    alignContent: "center",
    justifyContent: "space-between",
  },
  row: {
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "space-between",
  },
});
