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
import BackIcon from "../../components/BackIcon";
import { useState } from "react";
import { Dialog } from "react-native-simple-dialogs";
import { challengeIdState, challengeState } from "../../data/atom";
import { useRecoilValue } from "recoil";

function ChInfo({ navigation }) {
  const [popUpVisible, setPopUpVisible] = useState(false);

  const challenges = useRecoilValue(challengeState);
  const challengeIds = useRecoilValue(challengeIdState);

  const endAt = challenges[challengeIds[0]].endAt;
  const date = new Date(endAt).toLocaleDateString("ko-KR");

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
              챌린지 상세보기
            </Text>
          </View>
          <Pressable
            onPress={() => {
              setPopUpVisible(true);
            }}
          >
            <ImageBackground
              source={{ uri: challenges[challengeIds[0]].image }}
              style={styles.challengeBannerContainer}
            >
              <Text
                style={{
                  color: "#ECECEC",
                  fontFamily: "KoPubWorldDotum700",
                  fontSize: 20,
                }}
              >
                {challenges[challengeIds[0]].subtitle}
              </Text>
              <Image
                style={{
                  width: 32,
                  height: 32,
                  marginTop: 24,
                }}
                source={require("../../assets/touchIcon.png")}
              />
              <Text
                style={{
                  color: "#ECECEC",
                  fontFamily: "KoPubWorldDotum500",
                  fontSize: 13,
                }}
              >
                챌린지에 참여하려면 눌러주세요.
              </Text>
            </ImageBackground>
          </Pressable>
          <View style={styles.challenge}>
            <Text
              style={{
                color: "#000000",
                fontFamily: "KoPubWorldDotum700",
                fontSize: 16,
                marginBottom: 6,
              }}
            >
              👍 챌린지 소개
            </Text>
            <View style={{ flexDirection: "row", paddingRight: 24 }}>
              <View>
                <Text
                  style={{
                    color: "#000000",
                    fontFamily: "KoPubWorldDotum500",
                    fontSize: 13,
                  }}
                >
                  {"• "}
                </Text>
              </View>
              <Text
                style={{
                  color: "#000000",
                  fontFamily: "KoPubWorldDotum500",
                  fontSize: 13,
                }}
              >
                {challenges[challengeIds[0]].contents[0]}
              </Text>
            </View>
            <View style={{ flexDirection: "row", paddingRight: 24 }}>
              <View>
                <Text
                  style={{
                    color: "#000000",
                    fontFamily: "KoPubWorldDotum500",
                    fontSize: 13,
                  }}
                >
                  {"• "}
                </Text>
              </View>
              <Text
                style={{
                  color: "#000000",
                  fontFamily: "KoPubWorldDotum500",
                  fontSize: 13,
                }}
              >
                {challenges[challengeIds[0]].contents[1]}
              </Text>
            </View>
          </View>
          <View style={styles.challenge}>
            <Text
              style={{
                color: "#000000",
                fontFamily: "KoPubWorldDotum700",
                fontSize: 16,
                marginBottom: 6,
              }}
            >
              🗓 챌린지 일정
            </Text>
            <View style={{ flexDirection: "row", paddingRight: 24 }}>
              <View>
                <Text
                  style={{
                    color: "#000000",
                    fontFamily: "KoPubWorldDotum500",
                    fontSize: 13,
                  }}
                >
                  {"• "}
                </Text>
              </View>
              <Text
                style={{
                  color: "#000000",
                  fontFamily: "KoPubWorldDotum500",
                  fontSize: 13,
                }}
              >
                {date} 챌린지 종료
              </Text>
            </View>
          </View>
          <View style={styles.challenge}>
            <Text
              style={{
                color: "#000000",
                fontFamily: "KoPubWorldDotum700",
                fontSize: 16,
                marginBottom: 6,
              }}
            >
              📌 챌린지 참여 Rule
            </Text>
            <View
              style={{
                flexDirection: "row",
                paddingRight: 24,
                marginBottom: 5,
              }}
            >
              <View>
                <Text
                  style={{
                    color: "#000000",
                    fontFamily: "KoPubWorldDotum500",
                    fontSize: 13,
                  }}
                >
                  {"• "}
                </Text>
              </View>
              <Text
                style={{
                  color: "#000000",
                  fontFamily: "KoPubWorldDotum500",
                  fontSize: 13,
                }}
              >
                1회당
              </Text>
              <View
                style={{
                  backgroundColor: "#0047CF",
                  borderRadius: 15,
                  paddingHorizontal: 8,
                  marginHorizontal: 6,
                }}
              >
                <Text
                  style={{
                    color: "#FFFFFF",
                    fontFamily: "KoPubWorldDotum500",
                    fontSize: 13,
                  }}
                >
                  {challenges[challengeIds[0]].price.min.toLocaleString(
                    "ko-KR"
                  )}
                  ~
                  {challenges[challengeIds[0]].price.max.toLocaleString(
                    "ko-KR"
                  )}
                  원
                </Text>
              </View>
              <Text
                style={{
                  color: "#000000",
                  fontFamily: "KoPubWorldDotum500",
                  fontSize: 13,
                }}
              >
                송금할 수 있어요.
              </Text>
            </View>
            <View style={{ flexDirection: "row", paddingRight: 24 }}>
              <View>
                <Text
                  style={{
                    color: "#000000",
                    fontFamily: "KoPubWorldDotum500",
                    fontSize: 13,
                  }}
                >
                  {"• "}
                </Text>
              </View>
              <Text
                style={{
                  color: "#000000",
                  fontFamily: "KoPubWorldDotum500",
                  fontSize: 13,
                }}
              >
                하루에
              </Text>
              <View
                style={{
                  backgroundColor: "#0047CF",
                  borderRadius: 15,
                  paddingHorizontal: 8,
                  marginHorizontal: 6,
                }}
              >
                <Text
                  style={{
                    color: "#FFFFFF",
                    fontFamily: "KoPubWorldDotum500",
                    fontSize: 13,
                  }}
                >
                  {challenges[challengeIds[0]].maxPerDay}회
                </Text>
              </View>
              <Text
                style={{
                  color: "#000000",
                  fontFamily: "KoPubWorldDotum500",
                  fontSize: 13,
                }}
              >
                송금할 수 있어요.
              </Text>
            </View>
          </View>
          <View style={styles.challenge}>
            <View
              style={{
                width: "100%",
                flexDirection: "row",
                paddingRight: 32,
              }}
            >
              <Text>
                <Text
                  style={{
                    color: "#000000",
                    fontFamily: "KoPubWorldDotum700",
                    fontSize: 16,
                  }}
                >
                  지금 나와 함께{" "}
                </Text>
                <Text
                  style={{
                    color: "#0047CF",
                    fontFamily: "KoPubWorldDotum700",
                    fontSize: 16,
                  }}
                >
                  423명
                </Text>
                <Text
                  style={{
                    color: "#000000",
                    fontFamily: "KoPubWorldDotum700",
                    fontSize: 16,
                  }}
                >
                  의 SAVER가 이 챌린지에 참여하고 있어요.
                </Text>
              </Text>
            </View>
            <Image
              style={{
                width: 70,
                height: 35,
                position: "absolute",
                bottom: 0,
                right: 20,
              }}
              source={require("../../assets/peopleIcon.png")}
            />
          </View>
          <View style={styles.challenge}>
            <View
              style={{
                width: "100%",
                paddingRight: 70,
              }}
            >
              <Text
                style={{
                  color: "#000000",
                  fontFamily: "KoPubWorldDotum700",
                  fontSize: 16,
                }}
              >
                이 챌린지에 참여한 분들이
              </Text>
              <Text>
                <Text
                  style={{
                    color: "#000000",
                    fontFamily: "KoPubWorldDotum700",
                    fontSize: 16,
                  }}
                >
                  총{" "}
                </Text>
                <Text
                  style={{
                    color: "#0047CF",
                    fontFamily: "KoPubWorldDotum700",
                    fontSize: 16,
                  }}
                >
                  462,600원
                </Text>
                <Text
                  style={{
                    color: "#000000",
                    fontFamily: "KoPubWorldDotum700",
                    fontSize: 16,
                  }}
                >
                  을 모았어요.
                </Text>
              </Text>
            </View>
            <Image
              style={{
                width: 60,
                height: 33,
                position: "absolute",
                bottom: 15,
                right: 20,
              }}
              source={require("../../assets/moneyIcon.png")}
            />
          </View>
        </View>
      </ScrollView>
      <Dialog
        visible={popUpVisible}
        onTouchOutside={() => {
          setPopUpVisible(false);
        }}
      >
        <View style={styles.popUp}>
          <Text>참여하시겠습니까?</Text>
          <Button
            title="예"
            onPress={() => {
              setPopUpVisible(false);
            }}
          />
          <Button
            title="아니오"
            onPress={() => {
              setPopUpVisible(false);
            }}
          />
        </View>
      </Dialog>
    </View>
  );
}

export default ChInfo;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "white",
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
  challengeBannerContainer: {
    width: 315,
    height: 160,
    borderRadius: 20,
    margin: 24,
    backgroundColor: "#f0f0f0",
    overflow: "hidden",
    alignItems: "center",
    paddingTop: 24,
  },
  challenge: {
    width: 315,
    borderRadius: 15,
    marginBottom: 15,
    backgroundColor: "#f0f0f0",
    paddingHorizontal: 24,
    paddingVertical: 16,
  },
});
