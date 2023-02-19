import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LinkAccount_000 from "./LinkAccount/LinkAccount_000";
import LinkAccount_001 from "./LinkAccount/LinkAccount_001";
import LinkAccount_002 from "./LinkAccount/LinkAccount_002";
import PWReg_000 from "./PWReg/PWReg_000";
import PWReg_001 from "./PWReg/PWReg_001";
import PWReg_002 from "./PWReg/PWReg_002";

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
            presentation: "transparentModal",
            cardOverlayEnabled: true,
          }}
        />
        <Stack.Screen
          name="LinkAccount_002"
          component={LinkAccount_002}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default LinkAccountScreen;
