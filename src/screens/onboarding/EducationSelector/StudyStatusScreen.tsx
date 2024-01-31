import React, { useState } from "react";
import { Surface } from "react-native-paper";
import { StyleSheet, View } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../../App";
import QuestionSelector from "../../../components/QuestionSelector";
import QuestionInput from "../../../components/QuestionInput";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface NavigationProps {
  navigation: NativeStackNavigationProp<
    RootStackParamList,
    "StudyStatusScreen"
  >;
}

export default function StudyStatusScreen({ navigation }: NavigationProps) {
  const [studyingSubject, setStudyingSubject] = useState("");
  const [preparingExam, setPreparingExam] = useState<string | null>(null);

  const storeData = async () => {
    try {
      await AsyncStorage.setItem(
        "education",
        String({ studyingSubject, preparingExam })
      );
      navigation.reset({
        index: 0, 
        routes: [{ name: "DashboardScreen" }],
      });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Surface style={styles.container}>
      <View>
        {!studyingSubject && (
          <QuestionInput
            handleClick={(text) => setStudyingSubject(text)}
            label="What are you studying?"
          />
        )}
      </View>
      <View>
        {studyingSubject && (
          <QuestionSelector
            options={["Yes", "No"]}
            question="Are You Preparing any Competitive Examination?"
            onClick={(option) => {
              setPreparingExam(option);
              storeData();
            }}
          />
        )}
      </View>
    </Surface>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
