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
import { loginState } from "../data/atom";

function PWCheckScreen() {
  const setIsLogined = useSetRecoilState(loginState);

  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.rootContainer}>
        <Text>PWCheckScreen</Text>
        <Text>로그인</Text>
        <Text>계정 비밀번호를 입력해주세요</Text>
        <TextInput />
        <Button
          title="next"
          onPress={() => {
            setIsLogined(true);
          }}
        />
      </View>
    </SafeAreaView>
  );
}

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
