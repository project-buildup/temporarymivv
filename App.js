import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { RecoilRoot } from "recoil";
import ArchiveScreen from "./screens/ArchiveScreen";
import ChallengeScreen from "./screens/ChallengeScreen";
import MainScreen from "./screens/MainScreen";
import MypageScreen from "./screens/MypageScreen";
import RegScreen from "./screens/Reg/RegScreen";
import SplashScreen from "./screens/SplashScreen";
import ValueScreen from "./screens/ValueScreen";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Overview() {
  return (
    <Tab.Navigator
    // screenOptions={{
    //   tabBarStyle: {
    //     borderTopLeftRadius: 20,
    //     borderTopRightRadius: 20,
    //   },
    // }}
    >
      <Tab.Screen
        name="Main"
        component={MainScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Value"
        component={ValueScreen}
        options={{ headerShown: false }}
      />

      <Tab.Screen
        name="Challenge"
        component={ChallengeScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Archive"
        component={ArchiveScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Mypage"
        component={MypageScreen}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
}

function AfterLogin() {
  return (
    <>
      <RecoilRoot>
        <StatusBar />
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Overview"
              component={Overview}
              options={{ headerShown: false }}
            />
            {/* <Stack.Screen
              name="Remit"
              component={RemitScreen}
              options={{ headerShown: false }}
            /> */}
          </Stack.Navigator>
        </NavigationContainer>
      </RecoilRoot>
    </>
  );
}

function checkLogin(setIsSplash) {
  setTimeout(() => {
    setIsSplash(false);
  }, 2000);
}

export default function App() {
  const [isSplash, setIsSplash] = useState(true); //splash화면 나타내기 위해 설정해놓음
  const [isIdStored, SetIsIdStored] = useState(true); //false가 기본값

  checkLogin(setIsSplash);

  if (isSplash) {
    return <SplashScreen />;
  }

  if (!isIdStored && !isSplash) {
    return <RegScreen SetIsIdStored={SetIsIdStored} />;
  }

  return <AfterLogin />;
}
