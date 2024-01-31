import React, { useState } from "react";
import { Surface, Text, Button } from "react-native-paper";
import { StyleSheet, View } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../../App";
import QuestionSelector from "../../../components/QuestionSelector";
import AsyncStorage from '@react-native-async-storage/async-storage';

interface NavigationProps {
  navigation: NativeStackNavigationProp<RootStackParamList, "WorkStatusScreen">;
}

const WorkStatusScreen: React.FC<NavigationProps> = ({ navigation }) => {
  const [answers, setAnswers] = useState({
    workStatus: null as string | null,
    salarySatisfaction: null as string | null,
  });

  const questions = [
    {
      id: 1,
      question: "Are You Working Somewhere?",
      options: ["Yes", "No"],
      nextStep: (value: string) => {
        setAnswers({ ...answers, workStatus: value });
      },
    },
    {
      id: 2,
      question: "Are You Satisfied with your Salary?",
      options: ["Yes", "No"],
      nextStep: (value: string) => {
        setAnswers({ ...answers, salarySatisfaction: value });
      },
    },
  ];

  const navigateToNextStep = (value: string, id: number) => {
    const question = questions.find((q) => q.id === id);
    if (question) {
      question.nextStep(value);
      if (value === "Yes" && question.id === 1) {
        navigation.navigate("DashboardScreen");
      }
    }
  };

  return (
    <Surface style={styles.container}>
      {questions.map((q) => (
        <QuestionSelector
          key={q.id}
          question={q.question}
          options={q.options}
          onClick={(value) => navigateToNextStep(value, q.id)}
          // disabled={!!answers[q.id === 1 ? "workStatus" : "salarySatisfaction"]}
        />
      ))}

      {/* Text 1 */}
      {answers.salarySatisfaction === "Yes" && (
        <View>
          <Text>
            Its great, You are satisfied with Your Salary, Now its time for a
            passive income
          </Text>
          <Button onPress={() => navigation.navigate("DashboardScreen")}>
            Next
          </Button>
        </View>
      )}

      {/* Text 2 */}
      {answers.salarySatisfaction === "No" && (
        <View>
          <Text>Want to Earn More, let's learn new skills</Text>
          <Button onPress={() => navigation.navigate("DashboardScreen")}>
            Learn Skills
          </Button>
        </View>
      )}

      {/* Text 3 */}
      {answers.workStatus === "No" && !answers.salarySatisfaction && (
        <View>
          <Text>
            In this competitive market, you have to learn a new skill, so let's
            make a target to learn a new skill
          </Text>
          <Button onPress={() => navigation.navigate("DashboardScreen")}>
            Learn Skills
          </Button>
        </View>
      )}
    </Surface>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default WorkStatusScreen;
