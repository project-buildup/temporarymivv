import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ChList from "./Challenge/ChList";
import ChInfo from "./Challenge/ChInfo";

const Stack = createNativeStackNavigator();

function ChallengeScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ChList"
        component={ChList}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ChInfo"
        component={ChInfo}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default ChallengeScreen;
