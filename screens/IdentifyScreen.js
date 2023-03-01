import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Identify_000 from "./Identify/Identify_000";
import Identify_001 from "./Identify/Identify_001";

const Stack = createNativeStackNavigator();

function IdentifyScreen() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Identify_000"
          component={Identify_000}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Identify_001"
          component={Identify_001}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default IdentifyScreen;
