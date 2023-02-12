import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Main_000 from "./Main/Main_000";
import RemitScreen from "./RemitScreen";
import RedmitDoneScreen from "./RemitDoneScreen";
import RankScreen from "./RankScreen";

const Stack = createNativeStackNavigator();

function MainScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Main_000"
        component={Main_000}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Remit"
        component={RemitScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="RemitDone"
        component={RedmitDoneScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Rank"
        component={RankScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default MainScreen;
