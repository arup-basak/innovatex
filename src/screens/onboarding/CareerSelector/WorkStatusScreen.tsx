import React, { useState } from "react";
import { Surface, Text } from "react-native-paper";
import { StyleSheet } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../../App";
import QuestionSelector from "../../../components/QuestionSelector";

interface NavigationProps {
  navigation: NativeStackNavigationProp<RootStackParamList, "WorkStatusScreen">;
}

export default function WorkStatusScreen({ navigation }: NavigationProps) {
  const [workStatus, setWorkStatus] = useState<string | null>(null);
  const [salarySatisfaction, setSalarySatisfaction] = useState<string | null>(
    null
  );

  return (
    <Surface style={styles.container}>
      {/* First Question */}
      {!workStatus && (
        <QuestionSelector
          question="Are You Working Somewhere?"
          options={["Yes", "No"]}
          onClick={(value) => {
            setWorkStatus(value);

            // Navigate to the next question or text based on the value
            if (value === "Yes") {
              // Navigate to Question 1
            } else {
              // Navigate to Text 3
            }
          }}
        />
      )}

      {/* Question 1 */}
      {workStatus === "Yes" && !salarySatisfaction && (
        <QuestionSelector
          question="Are You Satisfied with your Salary?"
          options={["Yes", "No"]}
          onClick={(value) => {
            setSalarySatisfaction(value);

            // Navigate to the next text based on the value
            if (value === "Yes") {
              // Navigate to Text 1
            } else {
              // Navigate to Text 2
            }
          }}
        />
      )}

      {/* Text 1 */}
      {salarySatisfaction === "Yes" && (
        <Text>
          Its great, You are satisfied with Your Salary, Now its time for a
          passive income
        </Text>
      )}

      {/* Text 2 */}
      {salarySatisfaction === "No" && (
        <Text>Want to Earn More, lets learn new skills</Text>
      )}

      {/* Text 3 */}
      {workStatus === "No" && !salarySatisfaction && (
        <Text>
          In this competitive market, you have to learn a new skill, so lets
          make a target to learn a new skill
        </Text>
      )}
    </Surface>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
