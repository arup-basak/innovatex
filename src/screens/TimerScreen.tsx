import React, { useState, useEffect } from "react";
import { Surface, Text, Button } from "react-native-paper";
import { StyleSheet, View } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../App";

interface NavigationProps {
  navigation: NativeStackNavigationProp<RootStackParamList, "TimerScreen">;
}

const TimerScreen = ({ navigation }: NavigationProps) => {
  const [timer, setTimer] = useState(60);
  const [timerText, setTimerText] = useState("");
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (!isPaused && timer > 0) {
        setTimer(timer - 1);
        const hours = Math.floor(timer / 3600);
        const minutes = Math.floor((timer % 3600) / 60);
        const seconds = timer % 60;
        setTimerText(`${hours}:${minutes}:${seconds}`);
      } else {
        clearInterval(intervalId);
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timer, isPaused]);

  const formatTime = (time: number) => {
    return time < 10 ? `0${time}` : `${time}`;
  };

  const togglePause = () => {
    setIsPaused(!isPaused);
  };

  return (
    <Surface style={styles.container}>
      <View style={styles.timerContainer}>
        <Text style={styles.timerText}>
          {formatTime(Math.floor(timer / 3600))}:
        </Text>
        <Text style={styles.timerText}>
          {formatTime(Math.floor((timer % 3600) / 60))}:
        </Text>
        <Text style={styles.timerText}>{formatTime(timer % 60)}</Text>
      </View>
      <View style={styles.buttons}>
        <Button onPress={() => navigation.pop()} mode="contained">
          Exit Task
        </Button>
        <Button onPress={togglePause} mode="contained">
          {isPaused ? "Resume" : "Pause"}
        </Button>
      </View>
    </Surface>
  );
};

export default TimerScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  timerContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  timerText: {
    fontSize: 24,
    fontWeight: "bold",
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 12,
    padding: 12,
  },
});
