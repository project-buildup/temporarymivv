import {
  Button,
  Image,
  ImageBackground,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Constants from "expo-constants";
import BackIcon from "../components/BackIcon";
import { useState } from "react";
import { Dialog } from "react-native-simple-dialogs";
import {
  challengeIdState,
  challengeState,
  couponIdState,
  couponState,
  valueIdState,
  valueState,
} from "../data/atom";
import { useRecoilValue } from "recoil";

function CouponScreen({ navigation }) {
  const [popUpVisible, setPopUpVisible] = useState(false);

  const valueIds = useRecoilValue(valueIdState);
  const values = useRecoilValue(valueState);
  const couponIds = useRecoilValue(couponIdState);
  const coupons = useRecoilValue(couponState);

  return (
    <View style={styles.root}>
      <ScrollView bounces={false}>
        <View style={styles.rootContainer}>
          <View style={styles.logoContainer}>
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
              나의 쿠폰함
            </Text>
          </View>
          <View
            style={{
              width: "100%",
              height: "100%",
              alignItems: "center",
            }}
          >
            <View style={{ flexDirection: "row", marginTop: 20 }}>
              <Pressable
                style={{
                  width: 100,
                  height: 38,
                  backgroundColor: "#0047CF",
                  borderRadius: 15,
                  alignItems: "center",
                  justifyContent: "center",
                  marginRight: 26,
                  shadowColor: "#000",
                  shadowOffset: {
                    width: 0,
                    height: 4,
                  },
                  shadowOpacity: 0.3,
                  shadowRadius: 4.65,

                  elevation: 8,
                }}
              >
                <Text
                  style={{
                    color: "#FFFFFF",
                    fontFamily: "KoPubWorldDotum700",
                    fontSize: 16,
                  }}
                >
                  사용 가능
                </Text>
              </Pressable>
              <Pressable
                style={{
                  width: 100,
                  height: 38,
                  backgroundColor: "#FFFFFF",
                  borderRadius: 15,
                  alignItems: "center",
                  justifyContent: "center",
                  shadowColor: "#000",
                  shadowOffset: {
                    width: 0,
                    height: 4,
                  },
                  shadowOpacity: 0.3,
                  shadowRadius: 4.65,

                  elevation: 8,
                }}
              >
                <Text
                  style={{
                    color: "#0047CF",
                    fontFamily: "KoPubWorldDotum700",
                    fontSize: 16,
                  }}
                >
                  사용 완료
                </Text>
              </Pressable>
            </View>
            <View style={styles.couponContainer}>
              <Image
                style={{ width: 333, height: 158, backgroundColor: "#F0F0F0" }}
                source={{ uri: coupons[couponIds[0]].image }}
              />
              <View
                style={{
                  width: 300,
                  height: 344,
                  backgroundColor: "#FFFFFF",
                  paddingTop: 21,
                  paddingLeft: 23,
                }}
              >
                <Text
                  style={{
                    fontFamily: "KoPubWorldDotum700",
                    fontSize: 20,
                  }}
                >
                  {coupons[couponIds[0]].title}
                </Text>
                <Text
                  style={{
                    color: "#8A8A8A",
                    fontFamily: "KoPubWorldDotum700",
                    fontSize: 13,
                    marginTop: 11,
                  }}
                >
                  할인 정보
                </Text>
                <View
                  style={{
                    flexDirection: "row",
                    marginTop: 6,
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
                    정상가
                  </Text>
                  <Text
                    style={{
                      color: "#8A8A8A",
                      fontFamily: "KoPubWorldDotum700",
                      fontSize: 10,
                      textDecorationLine: "line-through",
                    }}
                  >
                    {values[
                      coupons[couponIds[0]].valueId
                    ].price.original.toLocaleString("ko-KR")}
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
                    {values[
                      coupons[couponIds[0]].valueId
                    ].price.sale.toLocaleString("ko-KR")}
                  </Text>
                  <Text
                    style={{
                      fontFamily: "KoPubWorldDotum700",
                      fontSize: 15,
                      marginRight: 5,
                    }}
                  >
                    원
                  </Text>
                  <Text
                    style={{
                      fontFamily: "KoPubWorldDotum700",
                      fontSize: 11,
                    }}
                  >
                    ({values[coupons[couponIds[0]].valueId].pricetag})
                  </Text>
                </View>
                <Text
                  style={{
                    color: "#8A8A8A",
                    fontFamily: "KoPubWorldDotum700",
                    fontSize: 13,
                    marginTop: 17,
                  }}
                >
                  유효 기간
                </Text>
                <Text
                  style={{
                    color: "#8A8A8A",
                    fontFamily: "KoPubWorldDotum700",
                    fontSize: 13,
                    marginTop: 3,
                  }}
                >
                  2023.01.22 ~ 2023.03.10
                </Text>
                <Text
                  style={{
                    color: "#8A8A8A",
                    fontFamily: "KoPubWorldDotum700",
                    fontSize: 13,
                    marginTop: 17,
                  }}
                >
                  쿠폰 사용 확인 버튼 클릭 시 쿠폰 재사용 및{"\n"}
                  복구가 불가능합니다.
                </Text>
                <View style={{ alignItems: "center", paddingRight: 23 }}>
                  <Image
                    style={{
                      width: 90,
                      height: 30,
                      marginTop: 25,
                    }}
                    source={require("../assets/mivvLogo.png")}
                  />
                </View>
              </View>
              <Pressable
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: 19,
                }}
                onPress={() => {
                  setPopUpVisible(true);
                }}
              >
                <Image
                  style={{
                    width: 25,
                    height: 25,
                    marginRight: 8,
                  }}
                  source={require("../assets/whiteCheckbox.png")}
                />
                <Text
                  style={{
                    color: "#FFFFFF",
                    fontFamily: "KoPubWorldDotum700",
                    fontSize: 16,
                  }}
                >
                  직원 쿠폰 사용 확인
                </Text>
              </Pressable>
            </View>
            <View style={styles.couponContainer}>
              <Image
                style={{ width: 333, height: 158, backgroundColor: "#F0F0F0" }}
                source={{ uri: coupons[couponIds[0]].image }}
              />
              <View
                style={{
                  width: 300,
                  height: 344,
                  backgroundColor: "#FFFFFF",
                  paddingTop: 21,
                  paddingLeft: 23,
                }}
              >
                <Text
                  style={{
                    fontFamily: "KoPubWorldDotum700",
                    fontSize: 20,
                  }}
                >
                  {coupons[couponIds[0]].title}
                </Text>
                <Text
                  style={{
                    color: "#8A8A8A",
                    fontFamily: "KoPubWorldDotum700",
                    fontSize: 13,
                    marginTop: 11,
                  }}
                >
                  할인 정보
                </Text>
                <View
                  style={{
                    flexDirection: "row",
                    marginTop: 6,
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
                    정상가
                  </Text>
                  <Text
                    style={{
                      color: "#8A8A8A",
                      fontFamily: "KoPubWorldDotum700",
                      fontSize: 10,
                      textDecorationLine: "line-through",
                    }}
                  >
                    {values[
                      coupons[couponIds[0]].valueId
                    ].price.original.toLocaleString("ko-KR")}
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
                    {values[
                      coupons[couponIds[0]].valueId
                    ].price.sale.toLocaleString("ko-KR")}
                  </Text>
                  <Text
                    style={{
                      fontFamily: "KoPubWorldDotum700",
                      fontSize: 15,
                      marginRight: 5,
                    }}
                  >
                    원
                  </Text>
                  <Text
                    style={{
                      fontFamily: "KoPubWorldDotum700",
                      fontSize: 11,
                    }}
                  >
                    ({values[coupons[couponIds[0]].valueId].pricetag})
                  </Text>
                </View>
                <Text
                  style={{
                    color: "#8A8A8A",
                    fontFamily: "KoPubWorldDotum700",
                    fontSize: 13,
                    marginTop: 17,
                  }}
                >
                  유효 기간
                </Text>
                <Text
                  style={{
                    color: "#8A8A8A",
                    fontFamily: "KoPubWorldDotum700",
                    fontSize: 13,
                    marginTop: 3,
                  }}
                >
                  2023.01.22 ~ 2023.03.10
                </Text>
                <Text
                  style={{
                    color: "#8A8A8A",
                    fontFamily: "KoPubWorldDotum700",
                    fontSize: 13,
                    marginTop: 17,
                  }}
                >
                  쿠폰 사용 확인 버튼 클릭 시 쿠폰 재사용 및{"\n"}
                  복구가 불가능합니다.
                </Text>
                <View style={{ alignItems: "center", paddingRight: 23 }}>
                  <Image
                    style={{
                      width: 90,
                      height: 30,
                      marginTop: 25,
                    }}
                    source={require("../assets/mivvLogo.png")}
                  />
                </View>
              </View>
              <Pressable
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: 19,
                }}
                onPress={() => {
                  setPopUpVisible(true);
                }}
              >
                <Image
                  style={{
                    width: 25,
                    height: 25,
                    marginRight: 8,
                  }}
                  source={require("../assets/whiteCheckbox.png")}
                />
                <Text
                  style={{
                    color: "#FFFFFF",
                    fontFamily: "KoPubWorldDotum700",
                    fontSize: 16,
                  }}
                >
                  직원 쿠폰 사용 확인
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
      </ScrollView>
      <Dialog
        visible={popUpVisible}
        onTouchOutside={() => {
          setPopUpVisible(false);
        }}
      >
        <View style={{ alignItems: "center" }}>
          <Image
            style={{
              width: 35,
              height: 30,
              margin: 20,
            }}
            source={require("../assets/blueCautionIcon.png")}
          />
          <Text
            style={{
              color: "#000000",
              fontFamily: "KoPubWorldDotum700",
              fontSize: 16,
            }}
          >
            사용 확인 시 복구가 불가능합니다.
          </Text>
          <Text
            style={{
              color: "#000000",
              fontFamily: "KoPubWorldDotum700",
              fontSize: 16,
              marginBottom: 22,
            }}
          >
            쿠폰 사용 확인을 하는 직원이 맞습니까?
          </Text>
          <View style={{ flexDirection: "row" }}>
            <Pressable
              style={{
                width: 150,
                height: 40,
                backgroundColor: "#0047CF",
                borderRadius: 15,
                alignItems: "center",
                justifyContent: "center",
                marginRight: 6,
              }}
              onPress={() => {
                setPopUpVisible(false);
              }}
            >
              <Text
                style={{
                  color: "#F0F0F0",
                  fontFamily: "KoPubWorldDotum700",
                  fontSize: 16,
                }}
              >
                확 인
              </Text>
            </Pressable>
            <Pressable
              style={{
                width: 150,
                height: 40,
                backgroundColor: "#7C7C7C",
                borderRadius: 15,
                alignItems: "center",
                justifyContent: "center",
              }}
              onPress={() => {
                setPopUpVisible(false);
              }}
            >
              <Text
                style={{
                  color: "#F0F0F0",
                  fontFamily: "KoPubWorldDotum700",
                  fontSize: 16,
                }}
              >
                취 소
              </Text>
            </Pressable>
          </View>
        </View>
      </Dialog>
    </View>
  );
}

export default CouponScreen;

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
