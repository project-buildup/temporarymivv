import { useFocusEffect, useScrollToTop } from "@react-navigation/native";
import { useRef, useState } from "react";
import {
  Image,
  ImageBackground,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Dialog } from "react-native-simple-dialogs";
import { useRecoilValue } from "recoil";
import {
  advertisementIdState,
  advertisementState,
  valueIdState,
  valueState,
} from "../../data/atom";
function Value_000({ navigation }) {
  const [popUpVisible, setPopUpVisible] = useState(false);

  const valueIds = useRecoilValue(valueIdState);
  const values = useRecoilValue(valueState);

  const advertisementIds = useRecoilValue(advertisementIdState);
  const advertisements = useRecoilValue(advertisementState);

  const ref = useRef();

  useFocusEffect(() => {
    if (ref.current) {
      ref.current.scrollTo({ y: 0 });
    }
  });

  useScrollToTop(ref);

  return (
    <View style={styles.root}>
      <ScrollView ref={ref} bounces={false}>
        <ImageBackground
          source={{ uri: values[valueIds[0]].image }}
          resizeMode="stretch"
          style={styles.background}
        ></ImageBackground>
        <View style={styles.rootContainer}>
          <View style={styles.couponContainer}>
            <View style={styles.couponTextBox}>
              <Text
                style={{
                  color: "#ECECEC",
                  fontFamily: "KoPubWorldDotum700",
                  fontSize: 26,
                }}
              >
                {values[valueIds[0]].title}
              </Text>
              <Text
                style={{
                  color: "#ECECEC",
                  fontFamily: "KoPubWorldDotum700",
                  fontSize: 12,
                  marginTop: 4,
                }}
              >
                #{values[valueIds[0]].hashtags[0]}
              </Text>
              <Text
                style={{
                  color: "#ECECEC",
                  fontFamily: "KoPubWorldDotum700",
                  fontSize: 12,
                }}
              >
                #{values[valueIds[0]].hashtags[1]}
              </Text>
              <Text
                style={{
                  color: "#ECECEC",
                  fontFamily: "KoPubWorldDotum700",
                  fontSize: 12,
                }}
              >
                #{values[valueIds[0]].hashtags[2]}
              </Text>
            </View>
            <Pressable style={styles.playButtonContainer}>
              <Text
                style={{
                  fontFamily: "KoPubWorldDotum700",
                  fontSize: 11,
                }}
              >
                ????????????
              </Text>
            </Pressable>
            <View style={styles.couponBox}>
              <Text
                style={{
                  fontFamily: "KoPubWorldDotum700",
                  fontSize: 20,
                  marginTop: 18,
                  marginLeft: 21,
                }}
              >
                ?????? MIVV??????
              </Text>
              <View style={{ paddingLeft: 70, marginVertical: 25 }}>
                <View
                  style={{
                    flexDirection: "row",
                  }}
                >
                  <Text
                    style={{
                      color: "#8A8A8A",
                      fontFamily: "KoPubWorldDotum700",
                      fontSize: 10,
                      marginRight: 5,
                    }}
                  >
                    ?????????
                  </Text>
                  <Text
                    style={{
                      color: "#8A8A8A",
                      fontFamily: "KoPubWorldDotum700",
                      fontSize: 10,
                      textDecorationLine: "line-through",
                    }}
                  >
                    {values[valueIds[0]].price.original.toLocaleString("ko-KR")}
                  </Text>
                </View>
                <View
                  style={{
                    height: 30,
                    flexDirection: "row",
                    alignItems: "flex-end",
                  }}
                >
                  <Text
                    style={{
                      fontFamily: "KoPubWorldDotum700",
                      fontSize: 22,
                      marginRight: 5,
                    }}
                  >
                    {values[valueIds[0]].price.sale.toLocaleString("ko-KR")}
                  </Text>
                  <Text
                    style={{
                      fontFamily: "KoPubWorldDotum700",
                      fontSize: 15,
                      marginRight: 5,
                    }}
                  >
                    ???
                  </Text>
                  <Text
                    style={{
                      fontFamily: "KoPubWorldDotum700",
                      fontSize: 11,
                    }}
                  >
                    ({values[valueIds[0]].pricetag})
                  </Text>
                </View>
              </View>
              <View style={{ marginLeft: 36 }}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Image
                    style={{ width: 20, height: 20 }}
                    source={require("../../assets/redCheckIcon.png")}
                  />
                  <Text
                    style={{
                      fontFamily: "KoPubWorldDotum700",
                      fontSize: 13,
                      marginLeft: 6,
                    }}
                  >
                    {values[valueIds[0]].summary[0]}
                  </Text>
                </View>
                <View
                  style={{
                    marginVertical: 5,
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <Image
                    style={{ width: 20, height: 20 }}
                    source={require("../../assets/redCheckIcon.png")}
                  />
                  <Text
                    style={{
                      fontFamily: "KoPubWorldDotum700",
                      fontSize: 13,
                      marginLeft: 6,
                    }}
                  >
                    {values[valueIds[0]].summary[1]}
                  </Text>
                </View>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Image
                    style={{ width: 20, height: 20 }}
                    source={require("../../assets/redCheckIcon.png")}
                  />
                  <Text
                    style={{
                      fontFamily: "KoPubWorldDotum700",
                      fontSize: 13,
                      marginLeft: 6,
                    }}
                  >
                    {values[valueIds[0]].summary[2]}
                  </Text>
                </View>
              </View>
              <View style={{ alignItems: "center" }}>
                <Pressable
                  style={styles.moreButtonContainer}
                  onPress={() => {
                    navigation.navigate("RCDetail");
                  }}
                >
                  <Text
                    style={{
                      color: "#ffffff",
                      fontFamily: "KoPubWorldDotum700",
                      fontSize: 10,
                    }}
                  >
                    ??? ????????????
                  </Text>
                </Pressable>
              </View>
            </View>
            <Pressable
              style={styles.couponButtonContainer}
              onPress={() => {
                setPopUpVisible(true);
              }}
            >
              <Text
                style={{
                  color: "#ECECEC",
                  fontFamily: "KoPubWorldDotum700",
                  fontSize: 20,
                }}
              >
                ?????? ?????? ????????????
              </Text>
            </Pressable>
          </View>
          <View style={styles.shortsContainer}>
            <Text>?????? ?????? A to Z Shorts</Text>
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
          <Image
            style={styles.adBannerContainer}
            source={{ uri: advertisements[advertisementIds[0]].image }}
          />
        </View>
      </ScrollView>
      <Dialog
        visible={popUpVisible}
        onTouchOutside={() => {
          setPopUpVisible(false);
        }}
      >
        <Text
          style={{
            fontFamily: "KoPubWorldDotum700",
            fontSize: 16,
            marginVertical: 24,
          }}
        >
          ?????? ?????? ????????? ????????????!
        </Text>
        <Pressable
          style={{
            width: 310,
            height: 36,
            borderRadius: 13,
            backgroundColor: "#0047CF",
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={() => {
            setPopUpVisible(false);
            navigation.navigate("Mypage", {
              screen: "Mypage_000",
              params: { coupon: "Coupon" },
            });
          }}
        >
          <Text
            style={{
              color: "#f0f0f0",
              fontFamily: "KoPubWorldDotum700",
              fontSize: 16,
            }}
          >
            ??????
          </Text>
        </Pressable>
      </Dialog>
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
    paddingTop: 66,
    paddingLeft: 35,
  },
  playButtonContainer: {
    width: 290,
    height: 35,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    borderRadius: 4,
    marginTop: 28,
  },
  couponBox: {
    width: 305,
    paddingBottom: 13,
    backgroundColor: "white",
    borderRadius: 15,
    margin: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.4,
    shadowRadius: 3.84,

    elevation: 5,
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
