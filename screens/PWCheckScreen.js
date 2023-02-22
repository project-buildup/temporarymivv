//수정사항
//비밀번호 확인

import {
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Alert,
} from "react-native";
import Constants from "expo-constants";
import { useSetRecoilState } from "recoil";
import { loginState } from "../data/atom";
import { useState } from "react";
import CustomNumberPad from "../components/keypad";

const PWCheckScreen = () => {
  const setIsLogined = useSetRecoilState(loginState);
  const [PW, setPW] = useState("");
  const [wrong, setWrong] = useState(0);
  const handleKeyPress = (key) => {
    if (key === "<") {
      setPW(PW.slice(0, -1));
    } else if (PW.length < 5) {
      setPW(PW + key);
    } else {
      setPW(PW + key);
      console.log("check");
      Alert.alert("경고", "입력하신 비밀번호가 다릅니다", [
        {
          text: "확인",
          onPress: () => {
            setPW("");
            if (wrong < 4) {
              setWrong(wrong + 1);
            }
          },
        },
      ]);
    }
  };
  ////////////////////////
  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.rootContainer}>
        <View style={{ marginTop: 45, marginLeft: 45 }}>
          <Text style={{ fontSize: 22 }}>로그인</Text>
          <Text style={{ fontSize: 18, marginTop: 10 }}>
            계정 비밀번호를 입력해주세요
          </Text>
        </View>
        <View style={{ position: "absolute", bottom: 0 }}>
          <CustomNumberPad
            onKeyPress={handleKeyPress}
            PW={PW}
            text={wrong === 0 ? "" : "비밀번호가 틀립니다. (" + wrong + "/5)"}
            button={wrong === 0 ? false : true}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default PWCheckScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "white",
  },
  rootContainer: {
    flex: 1,
    paddingTop: Platform.OS === "android" && Constants.statusBarHeight,
  },
});
