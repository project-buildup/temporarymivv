import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { Image } from "react-native";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  accountLinkState,
  idStoreState,
  isIdentifiedState,
  loadingState,
  loginState,
  regFinishState,
  splashState,
} from "./data/atom";
import AfterLoginFetchScreen from "./screens/AfterLoginFetchScreen";
import ArchiveScreen from "./screens/ArchiveScreen";
import ChallengeScreen from "./screens/ChallengeScreen";
import IdentifyScreen from "./screens/IdentifyScreen";
import LinkAccountScreen from "./screens/LinkAccountScreen";
import MainScreen from "./screens/MainScreen";
import MypageScreen from "./screens/MypageScreen";
import PWCheckScreen from "./screens/PWCheckScreen";
import PWRegScreen from "./screens/PWRegScreen";
import RegScreen from "./screens/RegScreen";
import SplashScreen from "./screens/SplashScreen";
import ValueScreen from "./screens/ValueScreen";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Overview() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarStyle: {
          position: "absolute",
          bottom: 0,
          height: 90,
          backgroundColor: "#ffffff",
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
          borderTopWidth: 0,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 3,
          },
          shadowOpacity: 0.27,
          shadowRadius: 4.65,
          elevation: 6,
        },
        tabBarShowLabel: false,
      })}
    >
      <Tab.Screen
        name="Main"
        component={MainScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            source = focused
              ? require("./assets/focusedMainTabIcon.png")
              : require("./assets/mainTabIcon.png");
            return <Image source={source} style={{ width: 30, height: 30 }} />;
          },
        }}
      />
      <Tab.Screen
        name="Value"
        component={ValueScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            source = focused
              ? require("./assets/focusedValueTabIcon.png")
              : require("./assets/valueTabIcon.png");
            return <Image source={source} style={{ width: 30, height: 21 }} />;
          },
        }}
      />

      <Tab.Screen
        name="Challenge"
        component={ChallengeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            source = focused
              ? require("./assets/focusedChallengeTabIcon.png")
              : require("./assets/challengeTabIcon.png");
            return <Image source={source} style={{ width: 24, height: 18 }} />;
          },
        }}
      />
      <Tab.Screen
        name="Archive"
        component={ArchiveScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            source = focused
              ? require("./assets/focusedArchiveTabIcon.png")
              : require("./assets/archiveTabIcon.png");
            return <Image source={source} style={{ width: 29, height: 29 }} />;
          },
        }}
      />
      <Tab.Screen
        name="Mypage"
        component={MypageScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            source = focused
              ? require("./assets/focusedMypageTabIcon.png")
              : require("./assets/mypageTabIcon.png");
            return <Image source={source} style={{ width: 23, height: 25 }} />;
          },
        }}
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

function InApp() {
  const [isSplash, setIsSplash] = useRecoilState(splashState); //splash화면 나타내기 위해 설정해놓음
  const isIdentified = useRecoilValue(isIdentifiedState);
  const isIdStored = useRecoilValue(idStoreState); //false가 기본값
  const isLogined = useRecoilValue(loginState);
  const isRegFinished = useRecoilValue(regFinishState);
  const isAccountLinked = useRecoilValue(accountLinkState);
  const isLoading = useRecoilValue(loadingState);

  if (isSplash) {
    return <SplashScreen />;
  }

  if (!isSplash && !isIdentified) {
    return <IdentifyScreen />;
  }

  if (!isSplash && isIdentified && !isIdStored) {
    return <RegScreen />;
  }

  if (!isSplash && isIdentified && isIdStored && !isRegFinished) {
    return <PWRegScreen />;
  }

  if (
    !isSplash &&
    isIdentified &&
    isIdStored &&
    isRegFinished &&
    !isAccountLinked
  ) {
    return <LinkAccountScreen />;
  }

  if (
    !isSplash &&
    isIdentified &&
    isIdStored &&
    isRegFinished &&
    isAccountLinked &&
    !isLogined
  ) {
    return <PWCheckScreen />;
  }

  if (
    !isSplash &&
    isIdentified &&
    isIdStored &&
    isRegFinished &&
    isAccountLinked &&
    isLogined &&
    isLoading
  ) {
    return <AfterLoginFetchScreen />;
  }

  return <AfterLogin />;
}

export default InApp;
