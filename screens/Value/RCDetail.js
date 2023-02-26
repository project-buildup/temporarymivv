import {
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
import { valueIdState, valueState } from "../../data/atom";
import { useRecoilValue } from "recoil";
import { useState } from "react";

function RCDetail({ navigation }) {
  const valueIds = useRecoilValue(valueIdState);
  const values = useRecoilValue(valueState);

  const [ref, setRef] = useState(null);
  const [dataSourceCords, setDataSourceCords] = useState({});

  function scrollHandler(key) {
    ref.scrollTo({
      x: 0,
      y: dataSourceCords[key],
      animated: true,
    });
  }

  const whyContents = [];

  values[valueIds[0]].why.map((item) => {
    whyContents.push(
      <View
        key={item}
        style={{
          flexDirection: "row",
          paddingLeft: 17,
          paddingRight: 25,
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
          {item}
        </Text>
      </View>
    );
  });

  return (
    <View style={styles.root}>
      <Image
        source={{ uri: values[valueIds[0]].detailBackgroundImage }}
        resizeMode="stretch"
        style={styles.background}
      />
      <ScrollView
        bounces={false}
        ref={(ref) => {
          setRef(ref);
        }}
      >
        <View style={styles.rootContainer}>
          <View
            style={{
              marginTop: 72,
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "flex-start",
            }}
          >
            <Pressable
              style={{
                position: "absolute",
                top: 0,
                left: 30,
                width: 22,
                height: 19,
                justifyContent: "center",
                alignItems: "center",
              }}
              onPress={() => {
                navigation.goBack();
              }}
            >
              <Image
                style={{
                  width: 11,
                  height: 19,
                }}
                source={require("../../assets/whiteBackIcon.png")}
              />
            </Pressable>
            <Image
              style={{
                width: 220,
                height: 140,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 4,
                overflow: "hidden",
              }}
              source={{ uri: values[valueIds[0]].detailImage }}
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              height: 35,
              marginTop: 15,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                color: "#ECECEC",
                fontFamily: "KoPubWorldDotum700",
                fontSize: 23,
              }}
            >
              레드 맥스 짐
            </Text>
            <Text
              style={{
                color: "#ABABAB",
                fontFamily: "KoPubWorldDotum700",
                fontSize: 15,
                marginLeft: 13,
              }}
            >
              #{values[valueIds[0]].hashtags[0]} #
              {values[valueIds[0]].hashtags[1]} #
              {values[valueIds[0]].hashtags[2]}
            </Text>
          </View>
          <View
            style={{
              alignItems: "center",
            }}
          >
            <Pressable style={styles.playButtonContainer}>
              <Text
                style={{
                  fontFamily: "KoPubWorldDotum700",
                  fontSize: 11,
                }}
              >
                재생하기
              </Text>
            </Pressable>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              marginVertical: 25,
            }}
          >
            <Pressable
              style={{
                justifyContent: "center",
                alignItems: "center",
                marginRight: 45,
              }}
              onPress={() => {
                scrollHandler("why");
              }}
            >
              <View
                style={{
                  width: 35,
                  height: 35,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  style={{
                    width: 25,
                    height: 25,
                  }}
                  source={require("../../assets/whiteLikeIcon.png")}
                />
              </View>
              <Text
                style={{
                  color: "#ECECEC",
                  fontFamily: "KoPubWorldDotum500",
                  fontSize: 15,
                  marginTop: 6,
                }}
              >
                추천 이유
              </Text>
            </Pressable>
            <Pressable
              style={{
                justifyContent: "center",
                alignItems: "center",
                marginRight: 45,
              }}
              onPress={() => {
                scrollHandler("sale");
              }}
            >
              <View
                style={{
                  width: 35,
                  height: 35,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  style={{
                    width: 25,
                    height: 25,
                  }}
                  source={require("../../assets/whiteCheckIcon.png")}
                />
              </View>
              <Text
                style={{
                  color: "#ECECEC",
                  fontFamily: "KoPubWorldDotum500",
                  fontSize: 15,
                  marginTop: 6,
                }}
              >
                할인 정보
              </Text>
            </Pressable>
            <Pressable
              style={{
                justifyContent: "center",
                alignItems: "center",
              }}
              onPress={() => {
                scrollHandler("location");
              }}
            >
              <View
                style={{
                  width: 35,
                  height: 35,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  style={{
                    width: 25,
                    height: 25,
                  }}
                  source={require("../../assets/whiteLocationIcon.png")}
                />
              </View>
              <Text
                style={{
                  color: "#ECECEC",
                  fontFamily: "KoPubWorldDotum500",
                  fontSize: 15,
                  marginTop: 6,
                }}
              >
                위치 정보
              </Text>
            </Pressable>
          </View>
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <View
              style={styles.whiteBox}
              onLayout={(event) => {
                const layout = event.nativeEvent.layout;
                dataSourceCords["why"] = layout.y;
                setDataSourceCords(dataSourceCords);
              }}
            >
              <Text
                style={{
                  fontFamily: "KoPubWorldDotum700",
                  fontSize: 20,
                  marginLeft: 24,
                  marginBottom: 8,
                }}
              >
                👍 추천 이유
              </Text>
              {whyContents.map((item) => item)}
            </View>
            <View
              style={styles.whiteBox}
              onLayout={(event) => {
                const layout = event.nativeEvent.layout;
                dataSourceCords["sale"] = layout.y;
                setDataSourceCords(dataSourceCords);
              }}
            >
              <Text
                style={{
                  fontFamily: "KoPubWorldDotum700",
                  fontSize: 20,
                  marginLeft: 24,
                }}
              >
                💵 할인 정보
              </Text>
              <View style={{ paddingLeft: 70, marginVertical: 7 }}>
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
                    원
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
            </View>
            <View
              style={styles.whiteBox}
              onLayout={(event) => {
                const layout = event.nativeEvent.layout;
                dataSourceCords["location"] = layout.y;
                setDataSourceCords(dataSourceCords);
              }}
            >
              <View style={{ flexDirection: "row", alignItems: "flex-end" }}>
                <Text
                  style={{
                    fontFamily: "KoPubWorldDotum700",
                    fontSize: 20,
                    marginLeft: 24,
                  }}
                >
                  📌 이용 가능 지역
                </Text>
                <Text
                  style={{
                    color: "#515151",
                    fontFamily: "KoPubWorldDotum700",
                    fontSize: 10,
                    marginLeft: 11,
                  }}
                >
                  {values[valueIds[0]].place}
                </Text>
              </View>
              <View style={{ height: 300 }}>
                {
                  //여기에 지도 정보 넣어야 함.
                }
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

export default RCDetail;

const styles = StyleSheet.create({
  background: {
    position: "absolute",
    top: 0,
    width: "100%",
    height: 1200,
  },
  root: {
    flex: 1,
    paddingTop: Platform.OS === "android" && Constants.statusBarHeight,
  },
  rootContainer: {
    flex: 1,
    justifyContent: "flex-start",
  },
  playButtonContainer: {
    width: 290,
    height: 35,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    borderRadius: 4,
    marginTop: 14,
  },
  whiteBox: {
    width: 310,
    borderRadius: 15,
    marginBottom: 22,
    backgroundColor: "#ffffff",
    paddingVertical: 16,
  },
});
