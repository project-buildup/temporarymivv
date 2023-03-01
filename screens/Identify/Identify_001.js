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
import { isIdentifiedState } from "../../data/atom";

function Identify_001({}) {
  const setIsIdentified = useSetRecoilState(isIdentifiedState);

  setTimeout(() => {
    setIsIdentified(true);
  }, 2000);

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
          회원가입
        </Text>
      </View>
    </SafeAreaView>
  );
}

export default Identify_001;

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
