import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { TouchableRipple } from "react-native-paper";

interface Props {
  question: string;
  options: string[];
  onClick: (value: string) => void;
}

const QuestionSelector: React.FC<Props> = ({ question, options, onClick }) => {
  return (
    <View>
      <Text>{question}</Text>
      {options.map((item, index) => (
        <TouchableRipple
          style={styles.touchableRipple}
          key={index}
          onPress={() => onClick(item)}
        >
          <View>
            <Text>{item}</Text>
          </View>
        </TouchableRipple>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  touchableRipple: {
    margin: 10,
    borderColor: "#9c9c9c",
    borderWidth: 1,
    padding: 12,
    borderRadius: 4,
  },
});

export default QuestionSelector;
