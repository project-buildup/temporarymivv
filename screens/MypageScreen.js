import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HelpScreen from "./HelpScreen";
import Mypage_000 from "./Mypage/Mypage_000";

const Stack = createNativeStackNavigator();

function MypageScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Mypage_000"
        component={Mypage_000}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Help"
        component={HelpScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default MypageScreen;
