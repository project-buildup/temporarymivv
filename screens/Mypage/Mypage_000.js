import {
  Platform,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Constants from "expo-constants";
import MivvLogo from "../../components/MivvLogo";

function Mypage_000({ navigation }) {
  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.rootContainer}>
        <View style={styles.logoContainer}>
          <MivvLogo />
        </View>
        <Pressable
          style={styles.buttonContainer}
          onPress={() => {
            navigation.navigate("Help");
          }}
        >
          <Text>고객센터 / 도움말</Text>
        </Pressable>
        <Pressable
          style={styles.buttonContainer}
          onPress={() => {
            navigation.navigate("Coupon");
          }}
        >
          <Text>나의 쿠폰함</Text>
        </Pressable>
        <Pressable style={styles.buttonContainer} onPress={() => {}}>
          <Text>오픈소스 라이언스</Text>
        </Pressable>
        <Pressable style={styles.buttonContainer} onPress={() => {}}>
          <Text>버전 정보</Text>
        </Pressable>
        <Pressable style={styles.buttonContainer} onPress={() => {}}>
          <Text>앱 설정</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

export default Mypage_000;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "white",
  },
  rootContainer: {
    flex: 1,
    paddingTop: Platform.OS === "android" && Constants.statusBarHeight,
    alignItems: "center",
  },
  logoContainer: {
    width: "100%",
    margin: 34,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  checkContainer: {
    margin: 40,
    alignItems: "center",
  },
  checkTextContainer: {
    marginTop: 30,
  },
  buttonContainer: {
    width: 300,
    height: 55,
    backgroundColor: "#f0f0f0",
    borderRadius: 12,
    marginTop: 16,
    alignItems: "center",
    justifyContent: "center",
  },
});
