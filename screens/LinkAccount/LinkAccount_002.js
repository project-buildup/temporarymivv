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
import { accountLinkState } from "../../data/atom";

function LinkAccount_002({}) {
  const setIsAccountLinked = useSetRecoilState(accountLinkState);

  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.rootContainer}>
        <Text>LinkAccount_002</Text>
        <Text>계좌 연동이 완료되었습니다.</Text>
        <TextInput />
        <Button
          title="확인"
          onPress={() => {
            setIsAccountLinked(true);
          }}
        />
      </View>
    </SafeAreaView>
  );
}

export default LinkAccount_002;

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
