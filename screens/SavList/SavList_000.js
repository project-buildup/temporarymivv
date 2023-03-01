import {
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Constants from "expo-constants";
import BackIcon from "../../components/BackIcon";

function SavList_000({ setIsMonth, navigation }) {
  return (
    <View style={styles.root}>
      <ScrollView bounces={false}>
        <View style={styles.rootContainer}>
          <View style={styles.logoContainer}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Pressable
                style={{ marginLeft: 22 }}
                onPress={() => {
                  navigation.goBack();
                }}
              >
                <BackIcon />
              </Pressable>
              <Text
                style={{
                  marginLeft: 20,
                  color: "#000000",
                  fontFamily: "KoPubWorldDotum700",
                  fontSize: 19,
                }}
              >
                절약 내역
              </Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Text
                style={{
                  color: "#0047CF",
                  fontFamily: "KoPubWorldDotum700",
                  fontSize: 19,
                }}
              >
                월별
              </Text>
              <Text
                style={{
                  color: "#C8C8C8",
                  fontFamily: "KoPubWorldDotum700",
                  fontSize: 19,
                }}
              >
                {" "}
                |{" "}
              </Text>
              <Pressable
                onPress={() => {
                  setIsMonth(false);
                }}
              >
                <Text
                  style={{
                    color: "#C8C8C8",
                    fontFamily: "KoPubWorldDotum700",
                    fontSize: 19,
                    marginRight: 24,
                  }}
                >
                  전체
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

export default SavList_000;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    paddingTop: Platform.OS === "android" && Constants.statusBarHeight,
  },
  rootContainer: {
    flex: 1,
    alignItems: "center",
  },
  logoContainer: {
    width: "100%",
    height: 120,
    paddingTop: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    backgroundColor: "#ffffff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.15,
    shadowRadius: 3.84,

    elevation: 5,
  },
  couponContainer: {
    width: 333,
    height: 569,
    margin: 20,
    backgroundColor: "#AD0000",
    overflow: "hidden",
    alignItems: "center",
  },
});
