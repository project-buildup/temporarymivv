import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Value_000 from "./Value/Value_000";
import RCDetail from "./Value/RCDetail";
import ShortsScreen from "./ShortsScreen";

const Stack = createNativeStackNavigator();

function ValueScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Value_000"
        component={Value_000}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="RCDetail"
        component={RCDetail}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Shorts"
        component={ShortsScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default ValueScreen;
