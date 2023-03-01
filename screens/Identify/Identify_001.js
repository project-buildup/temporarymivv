import {
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  Pressable,
  View,
  Image,
  Dimensions,
} from "react-native";
import Constants from "expo-constants";
import { useSetRecoilState } from "recoil";
import { isIdentifiedState } from "../../data/atom";
const height = Dimensions.get("window").height;

function Identify_001({}) {
  const setIsIdentified = useSetRecoilState(isIdentifiedState);

  setTimeout(() => {
    setIsIdentified(true);
  }, 2000);

  return (
    <SafeAreaView style={styles.root}>
      <Pressable
        onPress={() => {
          setIsIdentified(true);
        }}
      >
        <View style={styles.rootContainer}>
          <View style={{ position: "absolute", top: 45, left: 37 }}>
            <Text
              style={{
                fontWeight: "KoPubWorldDotum700",
                fontSize: 31,
                fontWeight: "bold",
              }}
            >
              회원가입
            </Text>
            <Text
              style={{
                fontFamily: "KoPubWorldDotum700",
                fontSize: 20,
                marginTop: 20,
              }}
            >
              다시 MIVV로 돌아오신 걸 환영해요!
            </Text>
          </View>

          <View style={{ position: "absolute", right: 0, top: 268 }}>
            <Image source={require("../../assets/identification.png")} />
          </View>
        </View>
      </Pressable>
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
    height: height,
    alignItems: "center",
  },
});
