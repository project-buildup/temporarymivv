import {
  Image,
  Platform,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
// import Constants from "expo-constants";
import { Dialog } from "react-native-simple-dialogs";
import Swiper from "react-native-swiper";
import { useRef, useState } from "react";
import MivvLogo from "../../components/MivvLogo";
import AlarmIcon from "../../components/AlarmIcon";
import ChallengeItem from "../../components/ChallengeItem";
import { useRecoilValue } from "recoil";
import {
  advertisementIdState,
  advertisementState,
  challengeIdState,
  challengeState,
  userIdState,
  userState,
} from "../../data/atom";
import { Device } from "expo-device";

import ChallengeBanner from "../../components/ChallengeBanner";
import { useScrollToTop } from "@react-navigation/native";

function Main_000({ navigation }) {
  const [popUpVisible, setPopUpVisible] = useState(false);

  const userIds = useRecoilValue(userIdState);
  const users = useRecoilValue(userState);

  const challengeIds = useRecoilValue(challengeIdState);
  const challenges = useRecoilValue(challengeState);
  const advertisementIds = useRecoilValue(advertisementIdState);
  const advertisements = useRecoilValue(advertisementState);
  const adImageUri = advertisements[advertisementIds[1]].image;

  const challengeBanners = [];
  const mychallenges = [];
  const ref = useRef();

  useScrollToTop(ref);

  challengeIds.map((id) => {
    const imageUri = challenges[id].image;
    const subtitle = challenges[id].subtitle;
    const title = challenges[id].title;
    const min = challenges[id].price.min;
    const max = challenges[id].price.max;
    const num = challenges[id].userIds.length;
    const endAt = challenges[id].endAt;

    challengeBanners.push(
      <View key={id} style={styles.challengeBannerContainer}>
        <ChallengeBanner
          imageUri={imageUri}
          subtitle={subtitle}
          title={title}
          min={min}
          max={max}
          num={num}
          endAt={endAt}
        />
      </View>
    );
  });

  //참여하고 있는 챌린지가 없는 경우
  if (!users[userIds[0]].challengeIds) {
    mychallenges.push(
      <View key="empty">
        <View style={{ alignItems: "center", margin: 14 }}>
          <Text
            style={{
              padding: 2,
              color: "#797979",
              fontFamily: "KoPubWorldDotum700",
              fontSize: 12,
            }}
          >
            아직 참여한 절약 챌린지가 없어요!
          </Text>
          <Text
            style={{
              padding: 2,
              color: "#000000",
              fontFamily: "KoPubWorldDotum700",
              fontSize: 16,
            }}
          >
            어떤 절약 챌린지가 있는지
          </Text>
          <Text
            style={{
              padding: 2,
              color: "#000000",
              fontFamily: "KoPubWorldDotum700",
              fontSize: 16,
            }}
          >
            살펴보러 가볼까요?
          </Text>
          <Text
            style={{
              color: "#000000",
              fontFamily: "KoPubWorldDotum700",
              fontSize: 16,
            }}
          >
            🤔
          </Text>
        </View>
        <Pressable
          style={{
            width: 310,
            height: 44,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#0047CF",
            borderRadius: 15,
          }}
          onPress={() => {
            setPopUpVisible(false);
            navigation.navigate("Challenge");
          }}
        >
          <Text
            style={{
              color: "#f0f0f0",
              fontFamily: "KoPubWorldDotum700",
              fontSize: 13,
            }}
          >
            절약 챌린지 보러가기
          </Text>
        </Pressable>
      </View>
    );
  }

  //참여하고 있는 챌린지가 있는 경우
  users[userIds[0]].challengeIds?.map((id) =>
    mychallenges.push(
      <View key={id} style={{ margin: 7 }}>
        <ChallengeItem
          imageUri={challenges[id].image}
          title={challenges[id].title}
          minPrice={challenges[id].price.min}
          maxPrice={challenges[id].price.max}
          maxPerDay={challenges[id].maxPerDay}
          onPress={() => {
            setPopUpVisible(false);
            navigation.navigate("Remit");
          }}
        />
      </View>
    )
  );

  const month = new Date().getMonth() + 1;

  return (
    <SafeAreaView style={styles.root}>
      <ScrollView ref={ref}>
        <View style={styles.rootContainer}>
          <View style={styles.logoContainer}>
            <View style={styles.margin} />
            <MivvLogo />
            <Pressable
              onPress={() => {
                navigation.navigate("Notice");
              }}
            >
              <AlarmIcon />
            </Pressable>
          </View>
          <Swiper
            autoplay={true}
            height={160}
            paginationStyle={{
              height: 5,
              margin: -45,
            }}
            dotStyle={{ width: 5, height: 5 }}
            activeDotStyle={{ width: 5, height: 5 }}
            activeDotColor={"#616161"}
          >
            {challengeBanners.map((challengeBanner) => challengeBanner)}
          </Swiper>
          <View style={styles.challengeBannerIndicator}></View>
          <View style={styles.adBannerContainer}>
            <Image
              source={{ uri: adImageUri }}
              style={styles.adBannerContainer}
            />
          </View>
          <View style={styles.savingSectionContainer}>
            <Pressable
              style={styles.savingPriceContainer}
              onPress={() => {
                navigation.navigate("SavList");
              }}
            >
              <View
                style={{
                  marginTop: 13,
                  marginLeft: 18,
                  height: 23,
                }}
              >
                <Text
                  style={{
                    color: "#353535",
                    fontFamily: "KoPubWorldDotum700",
                    fontSize: 15,
                  }}
                >
                  나의 절약 금액
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-around",
                  marginBottom: 13,
                  marginHorizontal: 18,
                  height: 50,
                  alignItems: "flex-end",
                }}
              >
                <Text
                  style={{
                    color: "#353535",
                    fontFamily: "KoPubWorldDotum700",
                    fontSize: 32,
                    paddingTop: 10,
                  }}
                >
                  {users[userIds[0]].price.thisMonthTotal.toLocaleString(
                    "ko-KR"
                  )}
                </Text>
                <Text
                  style={{
                    color: "#353535",
                    fontFamily: "KoPubWorldDotum700",
                    fontSize: 21,
                    paddingTop: 22,
                  }}
                >
                  ₩
                </Text>
              </View>
            </Pressable>
            <View style={{ justifyContent: "space-between" }}>
              <View style={styles.savingCountContainer}>
                <View style={{ paddingTop: 9, paddingLeft: 16 }}>
                  <Text
                    style={{
                      color: "#8B8B8B",
                      fontFamily: "KoPubWorldDotum700",
                      fontSize: 11,
                    }}
                  >
                    이달의 총 절약 횟수
                  </Text>
                </View>
                <View
                  style={{
                    paddingBottom: 9,
                    flexDirection: "row",
                    justifyContent: "space-around",
                  }}
                >
                  <Text
                    style={{
                      paddingTop: 5,
                      color: "#619E60",
                      fontFamily: "KoPubWorldDotum700",
                      fontSize: 20,
                    }}
                  >
                    {month}월
                  </Text>
                  <View
                    style={{ flexDirection: "row", alignItems: "flex-end" }}
                  >
                    <Text
                      style={{
                        color: "#6A6A6A",
                        fontFamily: "KoPubWorldDotum700",
                        fontSize: 25,
                      }}
                    >
                      33
                      {
                        //이달의 총 절약 횟수 API 필요
                      }
                    </Text>
                    <Text
                      style={{
                        marginLeft: 2,
                        paddingBottom: 8,
                        color: "#909090",
                        fontFamily: "KoPubWorldDotum700",
                        fontSize: 12,
                      }}
                    >
                      회
                    </Text>
                  </View>
                </View>
              </View>
              <View style={styles.savingRankingContainer}>
                <Swiper
                  autoplay={true}
                  height={125}
                  paginationStyle={{
                    height: 5,
                    margin: -15,
                  }}
                  dotStyle={{ width: 5, height: 5 }}
                  activeDotStyle={{ width: 5, height: 5 }}
                  activeDotColor={"#0054AD"}
                >
                  {challengeIds.map((id) => {
                    return (
                      <View
                        key={id}
                        style={{
                          flex: 1,
                          justifyContent: "space-between",
                        }}
                      >
                        <View
                          style={{
                            paddingTop: 13,
                            paddingLeft: 14,
                          }}
                        >
                          <Text
                            style={{
                              color: "#8B8B8B",
                              fontFamily: "KoPubWorldDotum700",
                              fontSize: 9,
                            }}
                          >
                            {challenges[id].title} 챌린지
                          </Text>
                          <Text
                            style={{
                              color: "#8B8B8B",
                              fontFamily: "KoPubWorldDotum700",
                              fontSize: 11,
                            }}
                          >
                            내 순위
                          </Text>
                        </View>
                        <View style={{ paddingRight: 20, paddingBottom: 25 }}>
                          <Text
                            style={{
                              textAlign: "right",
                              color: "#6A6A6A",
                              fontFamily: "KoPubWorldDotum700",
                              fontSize: 24,
                            }}
                          >
                            13위
                            {
                              //챌린지별 순위 받아오는 API 필요
                            }
                          </Text>
                        </View>
                      </View>
                    );
                  })}
                </Swiper>
              </View>
            </View>
          </View>
          <Pressable
            style={styles.savingButtonContainer}
            onPress={() => {
              setPopUpVisible(true);
            }}
          >
            <Text
              style={{
                color: "#ECECEC",
                fontFamily: "KoPubWorldDotum700",
                fontSize: 32,
              }}
            >
              절약하러가기
            </Text>
          </Pressable>
          <View style={styles.shortsContainer}>
            <Text
              style={{
                color: "#3C3C3C",
                fontFamily: "KoPubWorldDotum700",
                fontSize: 17,
              }}
            >
              💸 영앤 리치를 향한 첫걸음! 절약 Shorts
            </Text>
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
        </View>
      </ScrollView>
      <Dialog
        visible={popUpVisible}
        onTouchOutside={() => {
          setPopUpVisible(false);
        }}
      >
        <View style={styles.popUp}>{mychallenges.map((items) => items)}</View>
      </Dialog>
    </SafeAreaView>
  );
}

export default Main_000;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" && Device.statusBarHeight,
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
  challengeBannerContainer: {
    width: "100%",
    height: 160,
    alignItems: "center",
  },
  challengeBannerIndicator: {
    height: 5,
    margin: 15,
  },
  adBannerContainer: {
    width: 315,
    height: 120,
    backgroundColor: "#f0f0f0",
    borderRadius: 20,
  },
  savingSectionContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 34,
    width: 315,
    height: 260,
    borderRadius: 20,
  },
  savingPriceContainer: {
    width: 170,
    height: 260,
    justifyContent: "space-between",
    backgroundColor: "#ffd132",
    borderRadius: 20,
  },
  savingCountContainer: {
    width: 130,
    height: 125,
    backgroundColor: "#EEEFF1",
    borderRadius: 20,
    justifyContent: "space-between",
  },
  savingRankingContainer: {
    width: 130,
    height: 125,
    backgroundColor: "#EEEFF1",
    borderRadius: 20,
    overflow: "hidden",
  },
  savingButtonContainer: {
    marginBottom: 34,
    width: 315,
    height: 70,
    backgroundColor: "#271D1D",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
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
});
