import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Main_000 from "./Main/Main_000";
import RemitScreen from "./RemitScreen";
import RemitDoneScreen from "./RemitDoneScreen";
import RankScreen from "./RankScreen";
import ShortsScreen from "./ShortsScreen";
import SavListScreen from "./SavListScreen";
import NoticeScreen from "./NoticeScreen";

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
        component={RemitDoneScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Rank"
        component={RankScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SavList"
        component={SavListScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Notice"
        component={NoticeScreen}
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

export default MainScreen;
