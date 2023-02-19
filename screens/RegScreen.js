import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Reg_000 from "./Reg/Reg_000";
import Reg_001 from "./Reg/Reg_001";
import Reg_002 from "./Reg/Reg_002";

const Stack = createNativeStackNavigator();

function RegScreen() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Reg_000"
            component={Reg_000}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Reg_001"
            component={Reg_001}
            options={{
              headerShown: false,
              presentation: "transparentModal",
              cardOverlayEnabled: true,
            }}
          />
          <Stack.Screen
            name="Reg_002"
            component={Reg_002}
            // children={({ navigation }) => (
            //   <Reg_002 SetIsIdStored={SetIsIdStored} navigation={navigation} />
            // )}
            options={{
              headerShown: false,
              presentation: "transparentModal",
              cardOverlayEnabled: true,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

export default RegScreen;
