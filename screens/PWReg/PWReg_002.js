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
import { regFinishState } from "../../data/atom";

function PWReg_002({}) {
  const setIsRegFinished = useSetRecoilState(regFinishState);

  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.rootContainer}>
        <Text>PWReg_002</Text>
        <Text>회원가입이 완료되었습니다.</Text>
        <TextInput />
        <Button
          title="절약 계좌 연동하러 가기"
          onPress={() => {
            setIsRegFinished(true);
          }}
        />
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
  },
});
