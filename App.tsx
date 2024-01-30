import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { PaperProvider } from "react-native-paper";

//screens
import Register from "./src/screens/onboarding/RegisterScreen";
import MainGoalSelector from "./src/screens/onboarding/MainGoalSelector";
import WorkStatusScreen from "./src/screens/onboarding/CareerSelector/WorkStatusScreen";
import StudyStatusScreen from "./src/screens/onboarding/EducationSelector/StudyStatusScreen";
import WeightSelectorScreen from "./src/screens/onboarding/HealthSelector/WeightSelectorScreen";
import DashboardScreen from "./src/screens/dashboard/DashboardScreen";
import SettingsScreen from "./src/screens/SettingsScreen";
import { IconButton } from "react-native-paper";

const Stack = createNativeStackNavigator();

type RootStackParamList = {
  RegisterScreen: undefined;
  MainGoalSelector: undefined;
  WorkStatusScreen: undefined;
  StudyStatusScreen: undefined;
  WeightSelectorScreen: undefined;
  DashboardScreen: undefined;
  SettingsScreen: undefined;
};

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="DashboardScreen">
          <Stack.Screen
            component={DashboardScreen}
            name="DashboardScreen"
            options={{
              headerRight: ({}) => <IconButton icon="cog" onPress={() => {}}/>,
            }}
          />
          <Stack.Screen component={Register} name="RegisterScreen" />
          <Stack.Screen component={MainGoalSelector} name="MainGoalSelector" />
          <Stack.Screen component={WorkStatusScreen} name="WorkStatusScreen" />
          <Stack.Screen
            component={StudyStatusScreen}
            name="StudyStatusScreen"
          />
          <Stack.Screen
            component={WeightSelectorScreen}
            name="WeightSelectorScreen"
          />
        </Stack.Navigator>

        <Stack.Screen component={SettingsScreen} name="SettingsScreen" />
      </NavigationContainer>
    </PaperProvider>
  );
}

export { RootStackParamList };
