import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PWReg_000 from "./PWReg/PWReg_000";
import PWReg_001 from "./PWReg/PWReg_001";
import PWReg_002 from "./PWReg/PWReg_002";
import PWCheckScreen from "./PWCheckScreen";
const Stack = createNativeStackNavigator();

function PWRegScreen() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="PWReg_000"
          component={PWReg_000}
          options={{
            headerShown: false,
            animationTypeForReplace: "pop",
          }}
        />
        <Stack.Screen
          name="PWReg_001"
          component={PWReg_001}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="PWReg_002"
          component={PWReg_002}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="PWCheckScreen"
          component={PWCheckScreen}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default PWRegScreen;
