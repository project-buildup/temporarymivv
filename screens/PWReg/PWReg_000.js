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
import { useSetRecoilState } from "recoil";
import { passwordState } from "../../data/atom";

function PWReg_000({ navigation }) {
  const setPassword = useSetRecoilState(passwordState);

  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.rootContainer}>
        <Text>PWReg_000</Text>
        <Text>회원가입</Text>
        <Text>계정 비밀번호를 입력해주세요</Text>
        <TextInput />
        <Button
          title="next"
          onPress={() => {
            setPassword(123);
            navigation.replace("PWReg_001");
          }}
        />
      </View>
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
