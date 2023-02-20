import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import {
  accountLinkState,
  idStoreState,
  loginState,
  regFinishState,
  splashState,
  userIdState,
  usersState,
} from "./data/atom";
import ArchiveScreen from "./screens/ArchiveScreen";
import ChallengeScreen from "./screens/ChallengeScreen";
import LinkAccountScreen from "./screens/LinkAccountScreen";
import MainScreen from "./screens/MainScreen";
import MypageScreen from "./screens/MypageScreen";
import PWCheckScreen from "./screens/PWCheckScreen";
import PWRegScreen from "./screens/PWRegScreen";
import RegScreen from "./screens/RegScreen";
import SplashScreen from "./screens/SplashScreen";
import ValueScreen from "./screens/ValueScreen";
import { fetchUsers } from "./util/executeFetch";
import { fetchKeyData } from "./util/http";

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
    </>
  );
}

function checkLogin(setIsSplash) {
  setTimeout(() => {
    setIsSplash(false);
  }, 2000);
}

function InApp() {
  const [isSplash, setIsSplash] = useRecoilState(splashState); //splash화면 나타내기 위해 설정해놓음
  const isIdStored = useRecoilValue(idStoreState); //false가 기본값
  const isLogined = useRecoilValue(loginState);
  const isRegFinished = useRecoilValue(regFinishState);
  const isAccountLinked = useRecoilValue(accountLinkState);
  const [error, setError] = useState();
  const setUserId = useSetRecoilState(userIdState);
  const users = useRecoilValue(usersState);

  checkLogin(setIsSplash);

  if (error) {
    console.log(error);
  }

  if (isSplash) {
    return <SplashScreen />;
  }

  if (!isIdStored && !isSplash) {
    return <RegScreen />;
  }

  if (isIdStored && !isSplash && !isLogined && !isRegFinished) {
    return <PWRegScreen />;
  }

  if (
    isIdStored &&
    !isSplash &&
    !isLogined &&
    isRegFinished &&
    !isAccountLinked
  ) {
    return <LinkAccountScreen />;
  }

  if (
    isIdStored &&
    !isSplash &&
    !isLogined &&
    isRegFinished &&
    isAccountLinked
  ) {
    return <PWCheckScreen />;
  }
  // if (
  //   isIdStored &&
  //   !isSplash &&
  //   isLogined &&
  //   isRegFinished &&
  //   isAccountLinked
  // ) {

  // }

  return <AfterLogin />;
}

export default InApp;
