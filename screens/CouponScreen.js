//수정사항
//핀 번호 값 불러와서 비교하기

import {
  Image,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Modal,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import Constants from "expo-constants";
import BackIcon from "../components/BackIcon";
import { useState } from "react";
import { Dialog } from "react-native-simple-dialogs";
import { couponIdState, couponState, valueState } from "../data/atom";
import { useRecoilValue } from "recoil";

const arr = [0, 1, 2, 3, 4, 5];
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

function CouponScreen({ navigation }) {
  const handleKeyPress = (key) => {
    if (PW.length < 6) {
      setPW(PW + key);
      if (PW.length === 5) {
        console.log(PW + key);
        console.log("check");
        setPW("");
        setFalseCoupon(true);
        setModal(false);
        setPopUpVisible(true);
      }
    }
  };

  const [PW, setPW] = useState("");

  const CustomNumberPad = (props) => {
    const mapping = arr.map((index) => {
      return (
        <View
          key={index}
          style={[
            {
              backgroundColor: "#D9D9D9",
              borderRadius: "100",
              width: 25,
              height: 25,
              margin: 11,
            },
            index < PW.length ? { backgroundColor: "#206CFF" } : null,
          ]}
        ></View>
      );
    });

    return (
      <View style={{ alignItems: "center", position: "absolute", bottom: 0 }}>
        <Text
          style={{
            color: "white",
            fontFamily: "KoPubWorldDotum700",
            fontSize: 29,
            marginBottom: 14,
          }}
        >
          레드맥스짐 3월 할인권
        </Text>
        <Text
          style={{
            color: "white",
            fontFamily: "KoPubWorldDotum700",
            fontSize: 19,
            marginBottom: 23,
          }}
        >
          직원 확인 번호 6자리를 입력해주세요
        </Text>
        <View>
          <View
            style={{
              flexDirection: "row",
              marginBottom: 30,
            }}
          >
            {mapping}
          </View>
        </View>

        <View>
          <View style={styles.container}>
            <View style={styles.row}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => props.onKeyPress("1")}
              >
                <Text style={styles.buttonText}>1</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.button}
                onPress={() => props.onKeyPress("2")}
              >
                <Text style={styles.buttonText}>2</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.button}
                onPress={() => props.onKeyPress("3")}
              >
                <Text style={styles.buttonText}>3</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.row}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => props.onKeyPress("4")}
              >
                <Text style={styles.buttonText}>4</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.button}
                onPress={() => props.onKeyPress("5")}
              >
                <Text style={styles.buttonText}>5</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.button}
                onPress={() => props.onKeyPress("6")}
              >
                <Text style={styles.buttonText}>6</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.row}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => props.onKeyPress("7")}
              >
                <Text style={styles.buttonText}>7</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.button}
                onPress={() => props.onKeyPress("8")}
              >
                <Text style={styles.buttonText}>8</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.button}
                onPress={() => props.onKeyPress("9")}
              >
                <Text style={styles.buttonText}>9</Text>
              </TouchableOpacity>
            </View>
            <View style={[styles.row, { borderBottomWidth: 0 }]}>
              <TouchableOpacity style={styles.button}></TouchableOpacity>
              <TouchableOpacity
                style={styles.button}
                onPress={() => props.onKeyPress("0")}
              >
                <Text style={styles.buttonText}>0</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.button}
                onPress={() => props.onKeyPress("<")}
              >
                <Text style={styles.buttonText}>{"<"}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  };

  const [popUpVisible, setPopUpVisible] = useState(false);
  const [modal, setModal] = useState(false);
  const [falseCoupon, setFalseCoupon] = useState(false);
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
            {falseCoupon
              ? "핀번호가 일치하지 않습니다"
              : "사용 확인 시 복구가 불가능합니다."}
          </Text>
          <Text
            style={{
              color: "#000000",
              fontFamily: "KoPubWorldDotum700",
              fontSize: 16,
              marginBottom: 22,
            }}
          >
            {falseCoupon ? null : "쿠폰 사용 확인을 하는 직원이 맞습니까?"}
          </Text>
          <View style={{ flexDirection: "row" }}>
            <Pressable
              style={[
                {
                  width: 150,
                  height: 40,
                  backgroundColor: "#0047CF",
                  borderRadius: 15,
                  alignItems: "center",
                  justifyContent: "center",
                  marginRight: 6,
                },
                falseCoupon ? { width: 312 } : null,
              ]}
              onPress={() => {
                setPopUpVisible(false);
                falseCoupon ? setModal(false) : setModal(true);
                setFalseCoupon(false);
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
            {falseCoupon ? null : (
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
                  setFalseCoupon(false);
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
            )}
          </View>
        </View>
      </Dialog>
      {modal ? (
        <>
          <Modal animationType="fade" transparent={true} visible={true}>
            <View style={styles.logoContainer}>
              <Pressable
                style={{ marginLeft: 22 }}
                onPress={() => {
                  setModal(false);
                  setPW("");
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
            <View style={styles.modalBackground}>
              <CustomNumberPad onKeyPress={handleKeyPress} />
            </View>
          </Modal>
        </>
      ) : null}
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
  modalBackground: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.74)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    backgroundColor: "#FFFFFF",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
    width: 307,
    height: 292,
  },
  container: {
    width: width,
    backgroundColor: "#EFF1F5",
    paddingTop: 20,
    paddingHorizontal: 22,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: "#CDD1D9",
    height: 98,
  },
  button: {
    width: 80,
    height: 98,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 24,
    color: "#616161",
  },
});
