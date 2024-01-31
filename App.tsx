import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { IconButton } from "react-native-paper";
import Provider from "./src/components/Provider";
import AsyncStorage from "@react-native-async-storage/async-storage";

//screens
import Register from "./src/screens/onboarding/RegisterScreen";
import MainGoalSelector from "./src/screens/onboarding/MainGoalSelector";
import WorkStatusScreen from "./src/screens/onboarding/CareerSelector/WorkStatusScreen";
import StudyStatusScreen from "./src/screens/onboarding/EducationSelector/StudyStatusScreen";
import WeightSelectorScreen from "./src/screens/onboarding/HealthSelector/WeightSelectorScreen";
import DashboardScreen from "./src/screens/dashboard/DashboardScreen";
import SettingsScreen from "./src/screens/SettingsScreen";
import WeightView from "./src/screens/analytics/WeightView";
import WaterView from "./src/screens/analytics/WaterView";
import SleepView from "./src/screens/analytics/SleepView";
import TimerScreen from "./src/screens/TimerScreen";

const Stack = createNativeStackNavigator();

type RootStackParamList = {
  RegisterScreen: undefined;
  MainGoalSelector: undefined;
  WorkStatusScreen: undefined;
  StudyStatusScreen: undefined;
  WeightSelectorScreen: undefined;
  DashboardScreen: undefined;
  SettingsScreen: undefined;
  WeightView: undefined;
  WaterView: undefined;
  SleepView: undefined;
  TimerScreen: undefined;
};

export default function App() {
  const [initialRoute, setInitialRoute] = useState("RegisterScreen");

  const getInitialRouteName = async () => {
    try {
      const value = await AsyncStorage.getItem("main-goal");
      if (value !== null) {
        ("DashboardScreen");
      }
    } catch (e) {
      return "RegisterScreen";
    }
  };

  useEffect(() => {
    getInitialRouteName();
  }, []);
  return (
    <Provider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="WeightSelectorScreen">
          <Stack.Screen
            component={DashboardScreen}
            name="DashboardScreen"
            options={{
              headerRight: ({}) => <IconButton icon="cog" onPress={() => {}} />,
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
          <Stack.Screen component={WeightView} name="WeightView" />
          <Stack.Screen component={WaterView} name="WaterView" />
          <Stack.Screen component={SettingsScreen} name="SettingsScreen" />
          <Stack.Screen component={SleepView} name="SleepView" />
          <Stack.Screen component={TimerScreen} name="TimerScreen" />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export { RootStackParamList };
