//수정사항
//본인인증하기
//결과 api로 받아서 navigation, 취소 결정

import {
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  Pressable,
  View,
  Image,
  Dimensions,
  ScrollView,
} from "react-native";
import Constants from "expo-constants";
import { useSetRecoilState } from "recoil";
import { regFinishState } from "../../data/atom";
import { useState } from "react";
import { Dialog } from "react-native-simple-dialogs";

const height = Dimensions.get("window").height;

function Identify_000({ navigation }) {
  const setIsRegFinished = useSetRecoilState(regFinishState);
  const [modal, setModal] = useState(false);

  return (
    <SafeAreaView style={styles.root}>
      <ScrollView>
        <View style={styles.rootContainer}>
          <View style={{ position: "absolute", top: 45, left: 37 }}>
            <Text
              style={{
                fontWeight: "KoPubWorldDotum700",
                fontSize: 31,
                fontWeight: "bold",
              }}
            >
              회원가입
            </Text>
            <Text
              style={{
                fontFamily: "KoPubWorldDotum700",
                fontSize: 20,
                marginTop: 20,
              }}
            >
              MIVV에 오신 걸 환영해요!
            </Text>
            <Text style={{ fontFamily: "KoPubWorldDotum700", fontSize: 20 }}>
              이제 몇 단계 안 남았어요.
            </Text>
          </View>

          <View style={{ position: "absolute", right: 0 }}>
            <Image source={require("../../assets/identification.png")} />
          </View>
          <Pressable
            onPress={() => {
              setModal(true);
            }}
            style={{ position: "absolute", bottom: 20 }}
          >
            <View
              style={{
                backgroundColor: "#292929",
                width: 333,
                height: 45,
                borderRadius: 20,
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  color: "#ECECEC",
                  fontWeight: "bold",
                  fontSize: 20,
                  textAlign: "center",
                }}
              >
                본인 인증
              </Text>
            </View>
          </Pressable>

          {modal ? (
            <Dialog
              visible={modal}
              onTouchOutside={() => {
                setModal(false);
              }}
            >
              <Text
                style={{
                  marginTop: 35.66,
                  fontFamily: "KoPubWorldDotum700",
                  fontSize: 16,
                }}
              >
                본인인증에 실패하였습니다
              </Text>
              <View
                style={{
                  marginTop: 32.9,
                  height: 42,
                  borderRadius: 15,
                  backgroundColor: "#0047CF",
                  width: 310,
                  justifyContent: "center",
                }}
              >
                <Pressable
                  onPress={() => {
                    setModal(false);
                    navigation.navigate("Identify_001");
                  }}
                >
                  <Text
                    style={{
                      alignSelf: "center",
                      color: "#F0F0F0",
                      fontSize: 18,
                    }}
                  >
                    확인
                  </Text>
                </Pressable>
              </View>
            </Dialog>
          ) : null}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Identify_000;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "white",
  },
  rootContainer: {
    flex: 1,
    paddingTop: Platform.OS === "android" && Constants.statusBarHeight,
    justifyContent: "center",
    height: height,
    alignItems: "center",
  },
});
