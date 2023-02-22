import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  accountLinkState,
  idStoreState,
  loadingState,
  loginState,
  regFinishState,
  splashState,
} from "./data/atom";
import AfterLoginFetchScreen from "./screens/AfterLoginFetchScreen";
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

function InApp() {
  const [isSplash, setIsSplash] = useRecoilState(splashState); //splash화면 나타내기 위해 설정해놓음
  const isIdStored = useRecoilValue(idStoreState); //false가 기본값
  const isLogined = useRecoilValue(loginState);
  const isRegFinished = useRecoilValue(regFinishState);
  const isAccountLinked = useRecoilValue(accountLinkState);
  const isLoading = useRecoilValue(loadingState);

  if (isSplash) {
    return <SplashScreen />;
  }

  if (!isSplash && !isIdStored) {
    return <RegScreen />;
  }

  if (!isSplash && isIdStored && !isRegFinished) {
    return <PWRegScreen />;
  }

  if (!isSplash && isIdStored && isRegFinished && !isAccountLinked) {
    return <LinkAccountScreen />;
  }

  if (
    !isSplash &&
    isIdStored &&
    isRegFinished &&
    isAccountLinked &&
    !isLogined
  ) {
    return <PWCheckScreen />;
  }

  if (
    !isSplash &&
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
