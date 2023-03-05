import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LinkAccount_000 from "./LinkAccount/LinkAccount_000";
import LinkAccount_001 from "./LinkAccount/LinkAccount_001";

const Stack = createNativeStackNavigator();

function LinkAccountScreen() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="LinkAccount_000"
          component={LinkAccount_000}
          options={{
            headerShown: false,
            animationTypeForReplace: "pop",
          }}
        />
        <Stack.Screen
          name="LinkAccount_001"
          component={LinkAccount_001}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default LinkAccountScreen;
