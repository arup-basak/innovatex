import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { Surface, Text, TouchableRipple, IconButton } from "react-native-paper";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../App";
import { readGlass, addGlass } from "../../utils/sqlite/glass_count";
import { checkLatestWeight } from "../../utils/sqlite/weight";

interface NavigationProps {
  navigation: NativeStackNavigationProp<RootStackParamList, "DashboardScreen">;
}

export default function DashboardScreen({ navigation }: NavigationProps) {
  const [glassCount, setGlassCount] = useState(0);
  const [weightValue, setLatestWeight] = useState(0);
  useEffect(() => {
    readGlass().then((val) => setGlassCount(val));
    checkLatestWeight().then((val) => setLatestWeight(val));
  }, []);
  const handleAddGlass = () => {
    addGlass().then((resp) => {
      if (resp) {
        setGlassCount(glassCount + 1);
      }
    });
  };
  return (
    <Surface style={styles.container}>
      <View>
        <Text>Weight</Text>
        <TouchableRipple
          style={styles.cardContainer}
          onPress={() => navigation.navigate("WeightView")}
        >
          <View>
            <Text>{weightValue} kg</Text>
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
            <Text>{glassCount} Glass Of Water</Text>
            <IconButton icon="plus" onPress={() => handleAddGlass()} />
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
