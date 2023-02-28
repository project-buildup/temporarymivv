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
import { useState, useEffect } from "react";

function PWReg_000({ navigation }) {
  const setPassword = useSetRecoilState(passwordState);
  const [PW, setPW] = useState("");

  const handleKeyPress = (key) => {
    if (key === "<") {
      setPW(PW.slice(0, -1));
    } else if (PW.length < 6) {
      if (
        PW[PW.length - 1] === key &&
        PW[PW.length - 1] === PW[PW.length - 2]
      ) {
        Alert.alert(
          "warning",
          "같은 숫자가 3번 반복됩니다. 다시 설정해주세요",
          [
            {
              text: "확인",
              onPress: () => {
                setPW("");
              },
            },
          ]
        );
      } else {
        setPW(PW + key);
      }
    }
    if (PW.length === 5) {
      if (
        !(PW[PW.length - 1] === key && PW[PW.length - 1] === PW[PW.length - 2])
      ) {
        navigation.navigate("PWReg_001", { PWs: PW + key });
      }
      setPW("");
    }
  };
  //////////////

  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.rootContainer}>
        <View style={{ marginTop: 45, marginLeft: 45 }}>
          <Text style={{ fontSize: 22 }}>회원가입</Text>
          <Text style={{ fontSize: 18, marginTop: 10 }}>
            계정 비밀번호를 입력해주세요
          </Text>
        </View>
      </View>
      <CustomNumberPad
        onKeyPress={handleKeyPress}
        PW={PW}
        text={"동일한 숫자는 3번 이상 반복할 수 없습니다."}
        button={false}
        goToSet={false}
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
