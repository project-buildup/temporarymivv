import {
  Button,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import Constants from "expo-constants";
import { passwordState } from "../../data/atom";
import { useSetRecoilState } from "recoil";

function PWReg_001({ navigation }) {
  const setPassword = useSetRecoilState(passwordState);

  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.rootContainer}>
        <Text>PWReg_001</Text>
        <Text>회원가입</Text>
        <Text>계정 비밀번호를 재입력해주세요</Text>
        <TextInput />
        <Button
          title="비밀번호 재설정"
          onPress={() => {
            navigation.replace("PWReg_000");
          }}
        />
        <Button
          title="next"
          onPress={() => {
            //비밀번호 세팅 API
            setPassword(null); // 앱의 로컬 패스워드 값 초기화
            navigation.replace("PWReg_002");
          }}
        />
      </View>
    </SafeAreaView>
  );
}

export default PWReg_001;

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
