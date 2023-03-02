//수정사항
//계좌정보 초기화 API전달
//푸시 알림 설정 변수 전달
//푸시 알림 이미지 수정 필요(현재는 아이콘 사용)

import {
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import Constants from "expo-constants";
import BackIcon from "../components/BackIcon";
import { useState } from "react";
import Icon from "react-native-vector-icons/FontAwesome5";

import { Dialog } from "react-native-simple-dialogs";

function SettingScreen({ navigation }) {
  const [modal, setModal] = useState();
  const [text, setText] = useState("");
  const [challenge, setChallenge] = useState(false);
  const [information, setInformation] = useState(false);
  const [coupon, setCoupon] = useState(false);
  const [event, setEvent] = useState(false);
  const [mode, setMode] = useState("sound");

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
                앱 설정
              </Text>
            </View>
          </View>
          <View
            style={{
              backgroundColor: "#F9F9FB",
              marginTop: 16.75,
              width: 330,
              borderRadius: 20,
            }}
          >
            <View
              style={{
                backgroundColor: "#EFF1F5",
                height: 56,
                borderRadius: 20,
                width: 330,
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  marginLeft: 20,
                  fontFamily: "KoPubWorldDotum700",
                  fontSize: 20,
                }}
              >
                푸시 알림 설정
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginLeft: 60,
                marginRight: 60,
              }}
            >
              <Pressable
                onPress={() => {
                  setMode("noSound");
                }}
              >
                <View
                  style={{
                    alignItems: "center",
                    justifyContent: "space-between",
                    height: 73,
                    marginTop: 24,
                  }}
                >
                  <Icon
                    name="volume-mute"
                    size={25}
                    color={mode === "noSound" ? "#0047FF" : "#8B8B8B"}
                  />
                  <Text
                    style={[
                      {
                        fontFamily: "KoPubWorldDotum700",
                        fontSize: 11,
                        color: "#8B8B8B",
                      },
                      mode === "noSound" ? { color: "#0047FF" } : null,
                    ]}
                  >
                    무음
                  </Text>
                  <View
                    style={[
                      {
                        borderRadius: 100,
                        width: 16,
                        height: 16,
                        borderWidth: 2,
                        borderColor: "#8B8B8B",
                        justifyContent: "center",
                        alignItems: "center",
                      },
                      mode === "noSound" ? { borderColor: "#0047FF" } : null,
                    ]}
                  >
                    {mode === "noSound" ? (
                      <View
                        style={{
                          borderRadius: 100,
                          width: 8,
                          height: 8,
                          backgroundColor: "#0047FF",
                        }}
                      />
                    ) : null}
                  </View>
                </View>
              </Pressable>
              <Pressable
                onPress={() => {
                  setMode("vibration");
                }}
              >
                <View
                  style={{
                    alignItems: "center",
                    justifyContent: "space-between",
                    height: 73,
                    marginTop: 24,
                  }}
                >
                  <Icon
                    name="volume-down"
                    size={25}
                    color={mode === "vibration" ? "#0047FF" : "#8B8B8B"}
                  />
                  <Text
                    style={[
                      {
                        fontFamily: "KoPubWorldDotum700",
                        fontSize: 11,
                        color: "#8B8B8B",
                      },
                      mode === "vibration" ? { color: "#0047FF" } : null,
                    ]}
                  >
                    진동
                  </Text>
                  <View
                    style={[
                      {
                        borderRadius: 100,
                        width: 16,
                        height: 16,
                        borderWidth: 2,
                        borderColor: "#8B8B8B",
                        justifyContent: "center",
                        alignItems: "center",
                      },
                      mode === "vibration" ? { borderColor: "#0047FF" } : null,
                    ]}
                  >
                    {mode === "vibration" ? (
                      <View
                        style={{
                          borderRadius: 100,
                          width: 8,
                          height: 8,
                          backgroundColor: "#0047FF",
                        }}
                      />
                    ) : null}
                  </View>
                </View>
              </Pressable>
              <Pressable
                onPress={() => {
                  setMode("sound");
                }}
              >
                <View
                  style={{
                    alignItems: "center",
                    justifyContent: "space-between",
                    height: 73,
                    marginTop: 24,
                  }}
                >
                  <Icon
                    name="volume-up"
                    size={25}
                    color={mode === "sound" ? "#0047FF" : "#8B8B8B"}
                  />

                  <Text
                    style={[
                      {
                        fontFamily: "KoPubWorldDotum700",
                        fontSize: 11,
                        color: "#8B8B8B",
                      },
                      mode === "sound" ? { color: "#0047FF" } : null,
                    ]}
                  >
                    소리
                  </Text>
                  <View
                    style={[
                      {
                        borderRadius: 100,
                        width: 16,
                        height: 16,
                        borderWidth: 2,
                        borderColor: "#8B8B8B",
                        justifyContent: "center",
                        alignItems: "center",
                      },
                      mode === "sound" ? { borderColor: "#0047FF" } : null,
                    ]}
                  >
                    {mode === "sound" ? (
                      <View
                        style={{
                          borderRadius: 100,
                          width: 8,
                          height: 8,
                          backgroundColor: "#0047FF",
                        }}
                      />
                    ) : null}
                  </View>
                </View>
              </Pressable>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                marginLeft: 31,
                marginTop: 37,
                marginRight: 23,
              }}
            >
              <Text
                style={{
                  fontFamily: "KoPubWorldDotum500",
                  fontSize: 16,
                  color: "#808080",
                }}
              >
                새로운 챌린지 추천
              </Text>
              <Pressable
                onPress={() => {
                  setChallenge(!challenge);
                }}
              >
                <View
                  style={[
                    {
                      height: 22,
                      width: 45,
                      borderRadius: 23,
                      justifyContent: "center",
                      paddingHorizontal: 4,
                    },
                    challenge
                      ? { backgroundColor: "#0047FF", alignItems: "flex-end" }
                      : {
                          backgroundColor: "#D9D9D9",
                          alignItems: "flex-start",
                        },
                  ]}
                >
                  <View
                    style={{
                      borderRadius: 100,
                      width: 16,
                      height: 16,
                      backgroundColor: "white",
                    }}
                  />
                </View>
              </Pressable>
            </View>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                marginLeft: 31,
                marginTop: 13,
                marginRight: 23,
              }}
            >
              <Text
                style={{
                  fontFamily: "KoPubWorldDotum500",
                  fontSize: 16,
                  color: "#808080",
                }}
              >
                가치 소비 추천 정보 업로드
              </Text>
              <Pressable
                onPress={() => {
                  setInformation(!information);
                }}
              >
                <View
                  style={[
                    {
                      height: 22,
                      width: 45,
                      borderRadius: 23,
                      justifyContent: "center",
                      paddingHorizontal: 4,
                    },
                    information
                      ? { backgroundColor: "#0047FF", alignItems: "flex-end" }
                      : {
                          backgroundColor: "#D9D9D9",
                          alignItems: "flex-start",
                        },
                  ]}
                >
                  <View
                    style={{
                      borderRadius: 100,
                      width: 16,
                      height: 16,
                      backgroundColor: "white",
                    }}
                  />
                </View>
              </Pressable>
            </View>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                marginLeft: 31,
                marginTop: 13,
                marginRight: 23,
              }}
            >
              <Text
                style={{
                  fontFamily: "KoPubWorldDotum500",
                  fontSize: 16,
                  color: "#808080",
                }}
              >
                쿠폰 정보 알림
              </Text>
              <Pressable
                onPress={() => {
                  setCoupon(!coupon);
                }}
              >
                <View
                  style={[
                    {
                      height: 22,
                      width: 45,
                      borderRadius: 23,
                      justifyContent: "center",
                      paddingHorizontal: 4,
                    },
                    coupon
                      ? { backgroundColor: "#0047FF", alignItems: "flex-end" }
                      : {
                          backgroundColor: "#D9D9D9",
                          alignItems: "flex-start",
                        },
                  ]}
                >
                  <View
                    style={{
                      borderRadius: 100,
                      width: 16,
                      height: 16,
                      backgroundColor: "white",
                    }}
                  />
                </View>
              </Pressable>
            </View>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                marginLeft: 31,
                marginTop: 13,
                marginBottom: 24,
                marginRight: 23,
              }}
            >
              <Text
                style={{
                  fontFamily: "KoPubWorldDotum500",
                  fontSize: 16,
                  color: "#808080",
                }}
              >
                새로운 이벤트 알림
              </Text>
              <Pressable
                onPress={() => {
                  setEvent(!event);
                }}
              >
                <View
                  style={[
                    {
                      height: 22,
                      width: 45,
                      borderRadius: 23,
                      justifyContent: "center",
                      paddingHorizontal: 4,
                    },
                    event
                      ? { backgroundColor: "#0047FF", alignItems: "flex-end" }
                      : {
                          backgroundColor: "#D9D9D9",
                          alignItems: "flex-start",
                        },
                  ]}
                >
                  <View
                    style={{
                      borderRadius: 100,
                      width: 16,
                      height: 16,
                      backgroundColor: "white",
                    }}
                  />
                </View>
              </Pressable>
            </View>
          </View>

          <View
            style={{
              backgroundColor: "#F9F9FB",
              marginTop: 16.75,
              width: 330,
              borderRadius: 20,
            }}
          >
            <View
              style={{
                backgroundColor: "#EFF1F5",
                height: 56,
                borderRadius: 20,
                width: 330,
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  marginLeft: 20,
                  fontFamily: "KoPubWorldDotum700",
                  fontSize: 20,
                }}
              >
                계좌 정보 초기화
              </Text>
            </View>

            <Pressable
              onPress={() => {
                setModal(true);
              }}
            >
              <View
                style={{
                  height: 60,
                  justifyContent: "space-between",
                  alignItems: "center",
                  flexDirection: "row",
                  paddingHorizontal: 23,
                }}
              >
                <Text
                  style={{
                    fontFamily: "KoPubWorldDotum500",
                    fontSize: 16,
                    color: "#808080",
                  }}
                >
                  연결한 계좌 정보 초기화하기
                </Text>
                <Text
                  style={{
                    marginLeft: 31,
                    fontFamily: "KoPubWorldDotum500",
                    fontSize: 16,
                    color: "#808080",
                  }}
                >
                  {">"}
                </Text>
              </View>
            </Pressable>
          </View>
        </View>
      </ScrollView>
      {modal ? (
        <Dialog
          visible={modal}
          onTouchOutside={() => {
            setModal(false);
          }}
        >
          <Text
            style={{
              fontFamily: "KoPubWorldDotum700",
              fontSize: 20,
              marginTop: 19,
            }}
          >
            주의 사항
          </Text>
          <Text
            style={{
              fontFamily: "KoPubWorldDotum700",
              fontSize: 13,
              marginTop: 8,
            }}
          >
            계좌 정보 초기화 시 챌린지 참여 정보가 리셋됩니다.
          </Text>
          <Text
            style={{
              fontFamily: "KoPubWorldDotum700",
              fontSize: 13,
              marginTop: 4,
            }}
          >
            아래 확인 문구를 입력하시면 계좌 정보가 초기화됩니다.
          </Text>
          <Text
            style={{
              fontFamily: "KoPubWorldDotum700",
              fontSize: 13,
              marginTop: 11,
              color: "#0047FF",
            }}
          >
            계좌 정보를 초기화하겠습니다.
          </Text>
          <TextInput
            onChangeText={setText}
            placeholder="계좌 정보를 초기화하겠습니다."
            style={{
              width: 297,
              paddingLeft: 14,
              fontFamily: "KoPubWorldDotum700",
              fontSize: 13,
              height: 41,
              backgroundColor: "white",
              borderRadius: 15,
              marginTop: 15,
              marginBottom: 20,
            }}
          />
          <View style={{ flexDirection: "row" }}>
            <Pressable
              disabled={text !== "계좌 정보를 초기화하겠습니다."}
              onPress={() => {
                console.log("delete");
              }}
              style={[
                {
                  width: 152,
                  height: 39,
                  justifyContent: "center",
                  backgroundColor: "#0047CF",
                  borderRadius: 15,
                },
                text !== "계좌 정보를 초기화하겠습니다."
                  ? { backgroundColor: "#7C7C7C" }
                  : null,
              ]}
            >
              <View>
                <Text
                  style={{
                    alignSelf: "center",
                    fontFamily: "KoPubWorldDotum700",
                    color: "#F0F0F0",
                    fontSize: 16,
                  }}
                >
                  확 인
                </Text>
              </View>
            </Pressable>
            <Pressable
              onPress={() => {
                setModal(false);
              }}
            >
              <View
                style={{
                  width: 152,
                  height: 39,
                  justifyContent: "center",
                  backgroundColor: "#7C7C7C",
                  borderRadius: 15,
                  marginLeft: 6,
                }}
              >
                <Text
                  style={{
                    alignSelf: "center",
                    fontFamily: "KoPubWorldDotum700",
                    color: "#F0F0F0",
                    fontSize: 16,
                  }}
                >
                  취 소
                </Text>
              </View>
            </Pressable>
          </View>
        </Dialog>
      ) : null}
    </View>
  );
}

export default SettingScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#ffffff",
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
