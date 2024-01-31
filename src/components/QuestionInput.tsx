import { View, StyleSheet } from "react-native";
import React, { useState } from "react";
import { TextInput, IconButton } from "react-native-paper";

interface Props {
  handleClick: (text) => void;
  label: string;
}

export default function QuestionInput(props: Props) {
  const [value, setValue] = useState("");
  return (
    <View style={styles.container}>
      <TextInput
        mode="outlined"
        style={styles.textInputContainer}
        label={props.label}
        value={value}
        onChangeText={(text) => setValue(text)}
      />
      <IconButton
        icon="chevron-right"
        onPress={() => props.handleClick(value)}
        size={32}
        containerColor="#3d0069"
        iconColor="#eb376d"
        rippleColor="#ce9ef0"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  textInputContainer: {
    margin: 12,
    width: 200,
  },
});
