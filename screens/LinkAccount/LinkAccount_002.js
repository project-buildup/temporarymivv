import {
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
} from "react-native";
import Constants from "expo-constants";
import { useSetRecoilState } from "recoil";
import { accountLinkState } from "../../data/atom";
import { useEffect } from "react";
function LinkAccount_002() {
  const setIsAccountLinked = useSetRecoilState(accountLinkState);
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsAccountLinked(true);
    }, 1200);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);
  return (
    <SafeAreaView style={styles.root}>
      <Pressable
        onPress={() => {
          setIsAccountLinked(true);
        }}
        style={styles.rootContainer}
      >
        <View style={{ alignItems: "center" }}>
          <Image source={require("../../assets/checkIcon.png")} />
        </View>

        <Text style={{ marginTop: 42.99, fontSize: 20, color: "#808080" }}>
          계좌 연동이 완료되었습니다.
        </Text>
      </Pressable>
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
    justifyContent: "center",
    alignItems: "center",
  },
});
