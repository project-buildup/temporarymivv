import {
  Image,
  Platform,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import MivvLogo from "../components/MivvLogo";
import BackIcon from "../components/BackIcon";

function RemitScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.rootContainer}>
        <View style={styles.logoContainer}>
          <Pressable
            style={styles.margin}
            onPress={() => {
              navigation.goBack();
            }}
          >
            <BackIcon />
          </Pressable>

          <MivvLogo />
          <View style={{ width: 22, height: 24 }} />
        </View>
        <Pressable
          style={styles.buttonContainer}
          onPress={() => {
            navigation.replace("RemitDone");
          }}
        >
          <Image
            style={{ width: 25, height: 24, marginRight: 10 }}
            source={require("../assets/tossIcon.png")}
          />
          <Text
            style={{
              color: "#535353",
              fontFamily: "KoPubWorldDotum700",
              fontSize: 15,
            }}
          >
            토스에서 송금하기
          </Text>
        </Pressable>
        <Pressable style={styles.buttonContainer} onPress={() => {}}>
          <Image
            style={{ width: 50, height: 20, marginRight: 8 }}
            source={require("../assets/kakaopayIcon.png")}
          />
          <Text
            style={{
              color: "#535353",
              fontFamily: "KoPubWorldDotum700",
              fontSize: 15,
            }}
          >
            카카오페이에서 송금하기
          </Text>
        </Pressable>
        <Pressable style={styles.buttonContainer} onPress={() => {}}>
          <Image
            style={{ width: 30, height: 30, marginRight: 5 }}
            source={require("../assets/banksaladIcon.png")}
          />
          <Text
            style={{
              color: "#535353",
              fontFamily: "KoPubWorldDotum700",
              fontSize: 15,
            }}
          >
            뱅크샐러드에서 송금하기
          </Text>
        </Pressable>
        <Pressable
          style={[styles.buttonContainer, { backgroundColor: "#3E3E3E" }]}
          onPress={() => {}}
        >
          <Text
            style={{
              marginLeft: 36,
              color: "#F3F3F3",
              fontFamily: "KoPubWorldDotum700",
              fontSize: 15,
            }}
          >
            은행 앱에서 송금하기
          </Text>
          <Image
            style={{ width: 15, height: 11, marginLeft: 36 }}
            source={require("../assets/downArrowIcon.png")}
          />
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

export default RemitScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "white",
  },
  rootContainer: {
    flex: 1,
    alignItems: "center",
  },
  logoContainer: {
    width: "100%",
    margin: 34,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  margin: {
    width: 22,
  },
  buttonContainer: {
    flexDirection: "row",
    width: 260,
    height: 60,
    backgroundColor: "#f0f0f0",
    borderRadius: 12,
    marginTop: 40,
    alignItems: "center",
    justifyContent: "center",
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
