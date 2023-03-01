//수정사항
//위의 세 칸에 불러와서(API) 글자넣기
//닉네임과 이메일 체크
//이용약관 및 개인정보처리방침 링크 걸기

import {
  Button,
  Platform,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import Constants from "expo-constants";
import { useState } from "react";

function Reg_000({ navigation }) {
  const [mail, setMail] = useState(null);
  const [checked, setChecked] = useState(false);
  const [mailChecked, setMailChecked] = useState(false);
  const [nickname, setNickname] = useState("");
  const [nicknameChecked, setNicknameChecked] = useState(false);
  const checking = () => {
    console.log("check mail");
    setMailChecked(true);
    console.log("nickname check");
    setNicknameChecked(true);
  };

  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.rootContainer}>
        <View
          style={{
            width: 333,
            marginTop: 45,
            marginLeft: 9,
            marginBottom: 19,
          }}
        >
          <Text style={{ fontFamily: "KoPubWorldDotum700", fontSize: 31 }}>
            회원가입
          </Text>
        </View>
        <View>
          <Text style={styles.text}>핸드폰 번호</Text>
          <View style={styles.greyBox} />
        </View>
        <View>
          <Text style={styles.text}>생년월일</Text>
          <View style={styles.greyBox} />
        </View>
        <View>
          <Text style={styles.text}>이름</Text>
          <View style={styles.greyBox} />
        </View>
        <View>
          <Text style={styles.text}>이메일</Text>
          <TextInput
            style={styles.greyBox}
            onChangeText={setMail}
            onBlur={checking}
          />
        </View>
        <View style={{ width: 333 }}>
          <Pressable
            style={{
              flexDirection: "row",
              marginTop: 9,
              marginLeft: 20,
            }}
            onPress={() => {
              setChecked(!checked);
            }}
          >
            <View
              style={{
                borderWidth: 1,
                height: 15,
                width: 15,
                borderRadius: 4,
                borderColor: "#7D7D7D",
                marginRight: 7,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {checked ? (
                <View
                  style={{
                    height: 10,
                    width: 10,
                    borderRadius: 2.3,
                    borderColor: "#7D7D7D",
                    backgroundColor: "#292929",
                  }}
                />
              ) : null}
            </View>
            <View>
              <Text style={{ fontSize: 10, marginBottom: 6 }}>
                마케팅 활용 동의 및 광고 수신 동의
              </Text>
              <Text style={{ fontSize: 8, color: "#7D7D7D" }}>
                서비스와 관련된 이벤트 안내, 고객 혜택 등 다양한 정보를
                제공합니다.
              </Text>
            </View>
          </Pressable>
        </View>
        {mailChecked ? (
          <>
            <View>
              <Text style={styles.text}>닉네임</Text>
              <TextInput
                style={styles.greyBox}
                onChangeText={setNickname}
                onBlur={checking}
              />
            </View>
            <Text style={{ fontSize: 9, color: "#7D7D7D", marginTop: 7 }}>
              부적절한 단어가 포함된 닉네임을 설정할 경우, 계정에 불이익이 있을
              수 있습니다.
            </Text>
          </>
        ) : null}
        {nicknameChecked ? (
          <View style={{ position: "absolute", bottom: 20 }}>
            <Text
              style={{
                width: 282,
                fontSize: 10,
                marginBottom: 11,
                color: "#7D7D7D",
                alignSelf: "center",
              }}
            >
              등록하기 버튼을 누르시면, 본 앱의 이용약관 및 개인정보처리방침에
              동의하신 것으로 간주됩니다.
            </Text>
            <Pressable
              onPress={() => {
                navigation.navigate("Reg_001");
              }}
            >
              <View style={styles.buttonContainer}>
                <Text
                  style={{
                    color: "#ECECEC",
                    fontFamily: "KoPubWorldDotum700",
                    fontSize: 20,
                    alignSelf: "center",
                  }}
                >
                  등록하기
                </Text>
              </View>
            </Pressable>
          </View>
        ) : null}
      </View>
    </SafeAreaView>
  );
}
export default Reg_000;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "white",
  },

  rootContainer: {
    flex: 1,
    paddingTop: Platform.OS === "android" && Constants.statusBarHeight,
    alignItems: "center",
  },
  buttonContainer: {
    width: 333,
    height: 45,
    backgroundColor: "#292929",
    borderRadius: 20,
    justifyContent: "center",
  },
  modal: {
    width: "100%",
    height: "100%",
    backgroundColor: "black",
    opacity: 0.7,
  },
  text: {
    fontWeight: "bold",
    fontSize: 15,
    marginLeft: 10,
    marginTop: 18,
  },
  greyBox: {
    width: 333,
    height: 45,
    backgroundColor: "#EFF1F5",
    marginTop: 10,
    borderRadius: 15,
    paddingHorizontal: 19,
  },
});
