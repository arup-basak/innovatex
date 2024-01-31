import React, { useState, useEffect } from "react";
import {
  Surface,
  Text,
  Button,
  Portal,
  Modal,
  TextInput,
  IconButton,
  TouchableRipple,
} from "react-native-paper";
import { StyleSheet, Dimensions, View } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { LineChart } from "react-native-chart-kit";
import { RootStackParamList } from "../../../App";
import { formatDateShortMonth } from "../../utils/date";
import * as SQLite from "expo-sqlite";

interface NavigationProps {
  navigation: NativeStackNavigationProp<RootStackParamList, "WeightView">;
}

interface GraphInterface {
  date: string;
  value: number;
}

export default function WeightView({ navigation }: NavigationProps) {
  const db = SQLite.openDatabase("user-data", "1");
  const [values, setValues] = useState<GraphInterface[]>([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const dd = async () => {
    const readOnly = false;
    await db.transactionAsync(async (tx) => {
      const result = await tx.executeSqlAsync(
        "SELECT COUNT(*) FROM WEIGHTDATA",
        []
      );
      console.log("Count:", result.rows[0]["COUNT(*)"]);
    }, readOnly);
  };

  useEffect(() => {
    dd();
  }, []);

  const handleSubmit = () => {
    if (inputValue !== "") {
      setValues([
        ...values,
        {
          date: new Date().toLocaleDateString("en-GB"),
          value: parseInt(inputValue),
        },
      ]);
      setInputValue("");
    }

    setModalVisible(false);
  };

  const chartData = {
    labels: values.map((data) => formatDateShortMonth(data.date)),
    datasets: [
      {
        data: values.map((data) => data.value),
      },
    ],
  };

  return (
    <>
      <Portal>
        <Modal visible={modalVisible} onDismiss={() => setModalVisible(false)}>
          <View style={styles.modalContainer}>
            <TextInput
              mode="outlined"
              label="Set New Value"
              value={inputValue}
              onChangeText={(newText) => setInputValue(newText)}
              keyboardType="numeric"
              maxLength={2}
              style={styles.input}
            />
            <Button
              mode="contained"
              onPress={handleSubmit}
              style={styles.button}
            >
              Submit
            </Button>
          </View>
        </Modal>
      </Portal>
      <Surface style={styles.container}>
        <TouchableRipple>
          <View style={styles.cardView}>
            <Text style={styles.currentValue}>
              {`${
                values.length > 1 ? values[values.length - 1].value : "0"
              } kg`}
            </Text>
            <IconButton
              icon="plus"
              mode="contained"
              onPress={() => setModalVisible(true)}
              style={styles.button}
            />
          </View>
        </TouchableRipple>

        {values.length !== 0 && (
          <LineChart
            width={Dimensions.get("window").width}
            height={200}
            data={chartData}
            chartConfig={{
              backgroundColor: "#ffffff",
              backgroundGradientFrom: "#ffffff",
              backgroundGradientTo: "#ffffff",
              decimalPlaces: 1,
              color: (opacity = 1) => `rgba(0, 122, 255, ${opacity})`, // Blue color for the line
              labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`, // Black color for labels
              style: {
                borderRadius: 16,
              },
              propsForDots: {
                r: "6",
                strokeWidth: "2",
                stroke: "#007AFF", // Blue color for dots
              },
              formatXLabel: (value) => {
                // Customize the x-axis labels here, for example:
                const index = Math.floor(parseFloat(value));
                return values[index] ? values[index].date : "";
              },
            }}
          />
        )}
      </Surface>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  cardView: {
    padding: 8,
    margin: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 12,
    paddingBottom: 24,
  },
  currentValue: {
    fontSize: 24,
    padding: 12,
  },
  button: {},
  modalContainer: {
    padding: 24,
    backgroundColor: "#ffffff",
    margin: 24,
    borderRadius: 12,
  },
  input: {
    marginBottom: 16,
  },
});
