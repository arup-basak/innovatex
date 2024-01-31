import React, { useState } from "react";
import { Surface, Text, Button } from "react-native-paper";
import { StyleSheet, View } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../../App";
import { Picker } from "@react-native-picker/picker";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface NavigationProps {
  navigation: NativeStackNavigationProp<
    RootStackParamList,
    "WeightSelectorScreen"
  >;
}

export default function WeightSelectorScreen({ navigation }: NavigationProps) {
  const [selectAge, setSelectedAge] = useState(0);
  const [selectWeight, setSelectedWeight] = useState(0);
  const [selectHeight, setSelectedHeight] = useState(0);
  const storeData = async () => {
    try {
      await AsyncStorage.setItem("health-data", String({}));
      navigation.reset({
        index: 0,
        routes: [{ name: "DashboardScreen" }],
      });
    } catch (e) {}
  };
  return (
    <Surface style={styles.container}>
      <View>
        <Text>Whats your age?</Text>
        <Picker
          selectedValue={selectAge}
          onValueChange={(itemValue, itemIndex) =>
            setSelectedAge(itemIndex + 3)
          }
        >
          {Array.from({ length: 97 }).map((_, index) => (
            <Picker.Item
              label={String(index + 3)}
              value={String(index + 3)}
              key={index}
            />
          ))}
        </Picker>
      </View>
      <Text>Whats Height(cm)?</Text>
      <Picker
        selectedValue={selectHeight}
        onValueChange={(itemValue, itemIndex) =>
          setSelectedHeight(itemIndex + 3)
        }
      >
        {Array.from({ length: 190 }).map((_, index) => (
          <Picker.Item
            label={String(index + 60)}
            value={String(index + 60)}
            key={index}
          />
        ))}
      </Picker>
      <Text>Whats your Weight?</Text>
      <Picker
        selectedValue={selectWeight}
        onValueChange={(itemValue, itemIndex) =>
          setSelectedWeight(itemIndex + 3)
        }
      >
        {Array.from({ length: 190 }).map((_, index) => (
          <Picker.Item
            label={String(index + 10)}
            value={String(index + 10)}
            key={index}
          />
        ))}
      </Picker>
      <Button onPress={storeData}>Submit</Button>
    </Surface>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 18,
  },
});
