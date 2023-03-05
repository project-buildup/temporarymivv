import {
  Image,
  Platform,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Constants from "expo-constants";
import MivvLogo from "../components/MivvLogo";
import CheckIcon from "../components/CheckIcon";
function RemitDoneScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.rootContainer}>
        <View style={styles.logoContainer}>
          <MivvLogo />
        </View>
        <View style={styles.checkContainer}>
          <CheckIcon />
          <View style={styles.checkTextContainer}>
            <Text
              style={{
                color: "#0047CF",
                fontFamily: "KoPubWorldDotum700",
                fontSize: 15,
              }}
            >
              송금이 완료되었습니다!
            </Text>
          </View>
        </View>
        <Pressable
          style={styles.buttonContainer}
          onPress={() => {
            navigation.navigate("Rank");
          }}
        >
          <Text
            style={{
              color: "#535353",
              fontFamily: "KoPubWorldDotum700",
              fontSize: 15,
            }}
          >
            랭킹 확인하기
          </Text>
          <Image
            style={{ width: 8, height: 15 }}
            source={require("../assets/buttonArrow.png")}
          />
        </Pressable>
        <Pressable
          style={styles.buttonContainer}
          onPress={() => {
            navigation.navigate("Value");
          }}
        >
          <Text
            style={{
              color: "#535353",
              fontFamily: "KoPubWorldDotum700",
              fontSize: 15,
            }}
          >
            가치 소비 추천
          </Text>
          <Image
            style={{ width: 8, height: 15 }}
            source={require("../assets/buttonArrow.png")}
          />
        </Pressable>
        <Pressable
          style={styles.buttonContainer}
          onPress={() => {
            navigation.navigate("Main_000");
          }}
        >
          <Text
            style={{
              color: "#535353",
              fontFamily: "KoPubWorldDotum700",
              fontSize: 15,
            }}
          >
            절약 현황 확인하기
          </Text>
          <Image
            style={{ width: 8, height: 15 }}
            source={require("../assets/buttonArrow.png")}
          />
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

export default RemitDoneScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "white",
  },
  rootContainer: {
    flex: 1,
    paddingTop: Platform.OS === "android" && Constants.statusBarHeight,
    alignItems: "center",
  },
  logoContainer: {
    width: "100%",
    margin: 34,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  checkContainer: {
    margin: 40,
    alignItems: "center",
  },
  checkTextContainer: {
    marginTop: 30,
  },
  buttonContainer: {
    flexDirection: "row",
    width: 280,
    height: 64,
    backgroundColor: "#f0f0f0",
    borderRadius: 12,
    marginTop: 22,
    paddingHorizontal: 30,
    alignItems: "center",
    justifyContent: "space-between",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});
