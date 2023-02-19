import {
  ImageBackground,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
function Value_000({ navigation }) {
  return (
    <View style={styles.root}>
      <ScrollView bounces={false}>
        <ImageBackground
          source={require("../../assets/valueBackground.png")}
          resizeMode="contain"
          style={styles.background}
        ></ImageBackground>
        <View style={styles.rootContainer}>
          <View style={styles.couponContainer}>
            <View style={styles.couponTextBox}>
              <Text style={styles.textStyle}>레드 맥스 짐</Text>
              <Text style={styles.textStyle}>#오운완</Text>
              <Text style={styles.textStyle}>#갓생</Text>
              <Text style={styles.textStyle}>#헬린이</Text>
            </View>
            <Pressable style={styles.playButtonContainer}>
              <Text>재생하기</Text>
            </Pressable>
            <View style={styles.couponBox}>
              <Pressable
                style={styles.moreButtonContainer}
                onPress={() => {
                  navigation.navigate("RCDetail");
                }}
              >
                <Text style={styles.textStyle}>더 알아보기</Text>
              </Pressable>
            </View>
            <Pressable
              style={styles.couponButtonContainer}
              onPress={() => {
                navigation.navigate("Coupon_000");
              }}
            >
              <Text style={styles.textStyle}>소비 쿠폰 발급하기</Text>
            </Pressable>
          </View>
          <View style={styles.shortsContainer}>
            <Text>청년 금융 A to Z Shorts</Text>
            <ScrollView horizontal={true}>
              <View style={styles.shortsItemContainer}>
                <Pressable
                  style={styles.shortsItem}
                  onPress={() => {
                    navigation.navigate("Shorts");
                  }}
                ></Pressable>
                <Pressable
                  style={styles.shortsItem}
                  onPress={() => {
                    navigation.navigate("Shorts");
                  }}
                ></Pressable>
                <Pressable
                  style={styles.shortsItem}
                  onPress={() => {
                    navigation.navigate("Shorts");
                  }}
                ></Pressable>
                <Pressable
                  style={styles.shortsItem}
                  onPress={() => {
                    navigation.navigate("Shorts");
                  }}
                ></Pressable>
              </View>
            </ScrollView>
          </View>
          <View style={styles.adBannerContainer}>
            <Text>광고 배너</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

export default Value_000;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "white",
    // paddingTop: Platform.OS === "android" && Constants.statusBarHeight,
  },
  rootContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  margin: {
    width: 22,
  },
  background: {
    position: "absolute",
    top: 0,
    width: "100%",
    height: 369,
  },
  couponContainer: {
    width: "100%",
    alignItems: "center",
  },
  couponTextBox: {
    width: "100%",
    padding: 40,
  },
  textStyle: {
    color: "#ffffff",
  },
  playButtonContainer: {
    width: 290,
    height: 35,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    borderRadius: 4,
  },
  couponBox: {
    width: 305,
    height: 305,
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 15,
    shadowColor: "black",
    shadowOpacity: 0.3,
    shadowOffset: { width: 1, height: 1 },
    margin: 30,
  },
  moreButtonContainer: {
    width: 280,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#373737",
    borderRadius: 4,
    marginTop: 30,
  },
  couponButtonContainer: {
    width: 315,
    height: 55,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#271d1d",
    borderRadius: 15,
    marginBottom: 30,
  },
  shortsContainer: {
    padding: 20,
    width: "100%",
    height: 270,
    backgroundColor: "#f5f5f5",
  },
  shortsItemContainer: {
    flexDirection: "row",
    marginTop: 15,
  },
  shortsItem: {
    width: 120,
    height: 190,
    backgroundColor: "#d9d9d9",
    borderRadius: 25,
    marginRight: 20,
  },
  adBannerContainer: {
    width: 315,
    height: 120,
    backgroundColor: "#f0f0f0",
    borderRadius: 20,
    margin: 30,
  },
});
