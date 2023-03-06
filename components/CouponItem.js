import { StyleSheet } from "react-native";
import { Image, Pressable, Text, View } from "react-native";

function CouponItem({
  image,
  title,
  normalPrice,
  salePrice,
  priceTag,
  setPopUpVisible,
}) {
  return (
    <View style={styles.container}>
      <Image
        style={{ width: 333, height: 158, backgroundColor: "#c0c0c0" }}
        source={{ uri: image }}
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
          {title}
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
            {normalPrice.toLocaleString("ko-KR")}
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
            {salePrice.toLocaleString("ko-KR")}
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
            ({priceTag})
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
  );
}

export default CouponItem;

const styles = StyleSheet.create({
  container: {
    width: 333,
    height: 569,
    margin: 20,
    backgroundColor: "#AD0000",
    overflow: "hidden",
    alignItems: "center",
  },
});
