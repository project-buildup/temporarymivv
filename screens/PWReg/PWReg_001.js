//수정사항
//비밀번호 일치하는지 확인

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
import { passwordState } from "../../data/atom";
import CustomNumberPad from "../../components/keypad";
import { useState } from "react";

function PWReg_000({ navigation }) {
  const setPassword = useSetRecoilState(passwordState);
  const [PW, setPW] = useState("");

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
            navigation.navigate("PWReg_002");
          },
        },
      ]);
    }
  };
  //////////////

  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.rootContainer}>
        <View style={{ marginTop: 45, marginLeft: 45 }}>
          <Text style={{ fontSize: 22 }}>회원가입</Text>
          <Text style={{ fontSize: 18, marginTop: 10 }}>
            계정 비밀번호를 재입력해주세요
          </Text>
        </View>
      </View>
      <CustomNumberPad
        onKeyPress={handleKeyPress}
        PW={PW}
        text={"동일한 숫자는 3번 이상 반복할 수 없습니다."}
        button={true}
      />
    </SafeAreaView>
  );
}

export default PWReg_000;

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
