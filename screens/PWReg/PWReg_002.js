import {
  Button,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  Pressable,
  View,
  Image,
} from "react-native";
import Constants from "expo-constants";
import { useSetRecoilState } from "recoil";
import { regFinishState } from "../../data/atom";

function PWReg_002({}) {
  const setIsRegFinished = useSetRecoilState(regFinishState);

  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.rootContainer}>
        <View style={{ alignItems: "center" }}>
          <Image source={require("../../assets/checkIcon.png")} />
        </View>

        <Text
          style={{
            marginTop: 33.99,
            fontSize: 15,
            color: "#0047CF",
            fontWeight: "bold",
          }}
        >
          회원가입이 완료되었습니다.
        </Text>
        <Pressable
          onPress={() => {
            setIsRegFinished(true);
          }}
        >
          <View
            style={{
              backgroundColor: "#292929",
              width: 333,
              height: 45,
              borderRadius: 20,
              justifyContent: "center",
              marginTop: 75.62,
            }}
          >
            <Text
              style={{
                color: "#ECECEC",
                fontWeight: "bold",
                fontSize: 20,
                textAlign: "center",
              }}
            >
              절약 계좌 연동하러 가기
            </Text>
          </View>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

export default PWReg_002;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "white",
  },
  rootContainer: {
    flex: 1,
    paddingTop: Platform.OS === "android" && Constants.statusBarHeight,
    justifyContent: "center",
    alignItems: "center",
  },
});
