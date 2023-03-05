//수정사항
//닉네임 검사 - api 이용

import React, { useEffect, useRef, useState } from "react";
import {
  Platform,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  Modal,
  TextInput,
  PermissionsAndroid,
  ScrollView,
  Dimensions,
} from "react-native";
import Constants from "expo-constants";
import MivvLogo from "../../components/MivvLogo";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { userIdState, userState } from "../../data/atom";
import * as ImagePicker from "expo-image-picker";
import { useFocusEffect, useScrollToTop } from "@react-navigation/native";
const width = Dimensions.get("window").width;

function Mypage_000({ route, navigation }) {
  const userIds = useRecoilValue(userIdState);
  const id = userIds[0];
  const setUser = useSetRecoilState(userState);
  const users = useRecoilValue(userState);
  const user = users[id];
  const url = user.image;
  const [modal, setModal] = useState(false);

  const [name, setName] = useState(user.nickname);
  const [check, setCheck] = useState(true);
  const [imageURI, setImageURI] = useState(null);

  const ref = useRef();

  useFocusEffect(() => {
    if (ref.current) {
      ref.current.scrollTo({ y: 0 });
    }
  });

  useScrollToTop(ref);

  const changeName = (text) => {
    setName(text);
    // setCheck(false);
  };

  const handlePress = async () => {
    try {
      let granted;
      if (Platform.OS === "android") {
        granted = await PermissionsAndroid.requestMultiple([
          PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        ]);
      } else {
        granted = { "ios.permission.PHOTO_LIBRARY": "granted" };
      }
      if (
        (Platform.OS === "android" &&
          granted["android.permission.READ_EXTERNAL_STORAGE"] ===
            PermissionsAndroid.RESULTS.GRANTED &&
          granted["android.permission.WRITE_EXTERNAL_STORAGE"] ===
            PermissionsAndroid.RESULTS.GRANTED) ||
        (Platform.OS === "ios" &&
          granted["ios.permission.PHOTO_LIBRARY"] === "granted")
      ) {
        const result = await ImagePicker.launchImageLibraryAsync({});
        if (!result.canceled && result.assets && result.assets.length > 0) {
          const selectedAsset = result.assets[0];
          setImageURI(selectedAsset.uri);

          // update user image
          const updatedUser = {
            ...users,
            [id]: {
              ...users[id],
              image: selectedAsset.uri,
            },
          };
          setUser(updatedUser);
        }
      } else {
        console.log("Storage permission denied");
      }
    } catch (err) {
      console.warn(err);
    }
  };

  useEffect(() => {
    if (route.params?.coupon === "Coupon") {
      navigation.navigate("Coupon");
    }
  }, [route]);

  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.rootContainer}>
        <View style={styles.logoContainer}>
          <MivvLogo />
        </View>
        <View
          style={{
            height: 194,
            backgroundColor: "#EFF1F5",
            width: "100%",
          }}
        >
          <View style={styles.center}>
            <View
              style={{
                backgroundColor: "white",
                height: 36,
                margin: 10,
                borderRadius: 16,
                justifyContent: "center",
                alignItems: "center",
                width: 73,
              }}
            >
              <Text style={styles.text}>내 정보</Text>
            </View>
          </View>

          <View style={styles.display}>
            {imageURI ? (
              <Image
                source={{
                  uri: imageURI,
                }}
                style={[styles.picture, { marginLeft: 42 }]}
              />
            ) : url ? (
              <Image
                source={{
                  uri: url,
                }}
                style={[styles.picture, { marginLeft: 42 }]}
              />
            ) : (
              <View style={styles.picture}></View>
            )}
            <View
              style={{
                flexDirection: "row",
                marginLeft: 26,
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  color: "#535353",
                  fontWeight: "bold",
                  fontSize: 20,
                  marginRight: 56,
                }}
              >
                {user.nickname} 님
              </Text>
            </View>
          </View>
        </View>
        <ScrollView ref={ref} style={{ width: "100%" }}>
          <View style={{ alignItems: "center" }}>
            <View
              style={{
                backgroundColor: "rgba(235, 235, 235, 0.38)",
                width: width,
                height: 44,
                justifyContent: "center",
                marginTop: 12,
              }}
            >
              <Text style={[styles.buttonText, { color: "rgba(0,0,0,0.38)" }]}>
                내 정보
              </Text>
            </View>
            <Pressable
              style={styles.buttonContainer}
              onPress={() => {
                setModal(true);
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Text style={styles.buttonText}>내 정보 수정</Text>
                <Image
                  style={{ height: 14, width: 8.84, marginRight: 21 }}
                  source={require("../../assets/buttonArrow.png")}
                />
              </View>
            </Pressable>
            <Pressable
              style={styles.buttonContainer}
              onPress={() => {
                navigation.navigate("Coupon");
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Text style={styles.buttonText}>나의 쿠폰함</Text>
                <Image
                  style={{ height: 14, width: 8.84, marginRight: 21 }}
                  source={require("../../assets/buttonArrow.png")}
                />
              </View>
            </Pressable>
          </View>
          <View style={{ alignItems: "center" }}>
            <View
              style={{
                backgroundColor: "rgba(235, 235, 235, 0.38)",
                width: width,
                height: 44,
                justifyContent: "center",
                marginTop: 12,
              }}
            >
              <Text style={[styles.buttonText, { color: "rgba(0,0,0,0.38)" }]}>
                환경설정
              </Text>
            </View>
            <Pressable
              style={styles.buttonContainer}
              onPress={() => {
                navigation.navigate("Help");
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Text style={styles.buttonText}>고객센터 / 도움말</Text>
                <Image
                  style={{ height: 14, width: 8.84, marginRight: 21 }}
                  source={require("../../assets/buttonArrow.png")}
                />
              </View>
            </Pressable>
            <Pressable style={styles.buttonContainer} onPress={() => {}}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Text style={styles.buttonText}>개발자 정보</Text>
                <Image
                  style={{ height: 14, width: 8.84, marginRight: 21 }}
                  source={require("../../assets/buttonArrow.png")}
                />
              </View>
            </Pressable>
          </View>
          <View style={{ alignItems: "center" }}>
            <View
              style={{
                backgroundColor: "rgba(235, 235, 235, 0.38)",
                width: width,
                height: 44,
                justifyContent: "center",
                marginTop: 12,
              }}
            >
              <Text style={[styles.buttonText, { color: "rgba(0,0,0,0.38)" }]}>
                MIVV 정보
              </Text>
            </View>
            <Pressable style={styles.buttonContainer} onPress={() => {}}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Text style={styles.buttonText}>오픈소스 라이언스</Text>
                <Image
                  style={{ height: 14, width: 8.84, marginRight: 21 }}
                  source={require("../../assets/buttonArrow.png")}
                />
              </View>
            </Pressable>
            <Pressable style={styles.buttonContainer} onPress={() => {}}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Text style={styles.buttonText}>버전 정보</Text>
                <Image
                  style={{ height: 14, width: 8.84, marginRight: 21 }}
                  source={require("../../assets/buttonArrow.png")}
                />
              </View>
            </Pressable>
            <Pressable
              style={[styles.buttonContainer, { marginBottom: 75 }]}
              onPress={() => {
                navigation.navigate("Setting");
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Text style={styles.buttonText}>앱 설정</Text>
                <Image
                  style={{ height: 14, width: 8.84, marginRight: 21 }}
                  source={require("../../assets/buttonArrow.png")}
                />
              </View>
            </Pressable>
          </View>
        </ScrollView>
      </View>

      {modal ? (
        <View>
          <Modal animationType="fade" transparent={true} visible={true}>
            <View style={styles.modalBackground}>
              <View style={styles.modalContainer}>
                <Text style={[styles.text, { marginBottom: 12 }]}>
                  내 정보 수정
                </Text>
                <View style={styles.display}>
                  <View
                    styles={{
                      width: 130,
                      alignItems: "center",
                      marginLeft: 16,
                    }}
                  >
                    <Text style={styles.modalText}>프로필사진</Text>
                    <Pressable onPress={handlePress}>
                      <View>
                        {imageURI ? (
                          <Image
                            source={{
                              uri: imageURI,
                            }}
                            style={[
                              styles.picture,
                              { width: 130, height: 130 },
                            ]}
                          />
                        ) : url ? (
                          <Image
                            source={{
                              uri: url,
                            }}
                            style={[
                              styles.picture,
                              { width: 130, height: 130 },
                            ]}
                          />
                        ) : (
                          <Image
                            source={require("../../assets/logoimage.png")}
                            style={[
                              styles.picture,
                              { width: 130, height: 130 },
                            ]}
                          />
                        )}
                        <View
                          style={{
                            borderRadius: 100,
                            backgroundColor: "black",
                          }}
                        />
                        <View style={styles.rocationBottom}>
                          <Image source={require("../../assets/setting.png")} />
                        </View>
                      </View>
                    </Pressable>
                  </View>
                  <View
                    style={[styles.center, { marginLeft: 23, marginTop: 23 }]}
                  >
                    <Text style={styles.modalText}>닉네임</Text>
                    <View
                      style={{
                        width: 100,
                        borderBottomWidth: 1,
                        flexDirection: "row",
                        justifyContent: "space-between",
                      }}
                    >
                      <TextInput
                        value={name}
                        style={{ fontSize: 20, fontWeight: "bold" }}
                        onChangeText={changeName}
                      ></TextInput>
                      <Image source={require("../../assets/edit.png")} />
                    </View>
                    {check ? (
                      <Text style={[styles.checktext, { color: "blue" }]}>
                        사용 가능한 아이디입니다
                      </Text>
                    ) : (
                      <Text style={[styles.checktext, { color: "red" }]}>
                        사용 불가능한 아이디입니다
                      </Text>
                    )}
                  </View>
                </View>
                <View style={[styles.display, { marginTop: 18 }]}>
                  <Pressable
                    disabled={!check}
                    onPress={() => {
                      const updatedUser = {
                        ...users,
                        [id]: {
                          ...users[id],
                          nickname: name,
                        },
                      };
                      setUser(updatedUser);
                      setModal(false);
                    }}
                  >
                    <View
                      style={[
                        styles.button,
                        check
                          ? { backgroundColor: "#0047CF" }
                          : { backgroundColor: "#EFF1F5" },
                      ]}
                    >
                      <Text style={[{ color: "white" }, styles.buttontext]}>
                        수정 완료
                      </Text>
                    </View>
                  </Pressable>
                  <Pressable
                    onPress={() => {
                      setName(user.nickname);
                      setModal(false);
                      // setCheck(true);
                    }}
                  >
                    <View
                      style={[styles.button, { backgroundColor: "#EFF1F5" }]}
                    >
                      <Text style={{ color: "#808080" }}>취소</Text>
                    </View>
                  </Pressable>
                </View>
              </View>
            </View>
          </Modal>
        </View>
      ) : null}
    </SafeAreaView>
  );
}

export default Mypage_000;

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
  logoContainer: {
    width: "100%",
    margin: 34,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  checkContainer: {
    margin: 40,
    alignItems: "center",
  },
  checkTextContainer: {
    marginTop: 30,
  },
  buttonContainer: {
    width: 300,
    height: 56,
    backgroundColor: "#f0f0f0",
    borderRadius: 12,
    marginTop: 16,
    justifyContent: "center",
    alignContent: "space-between",
  },
  picture: {
    width: 100,
    height: 100,
    backgroundColor: "white",
    borderRadius: 15,
    shadowOpacity: 0.2,
    shadowOffset: { width: 2, height: 2 },
  },
  modalBackground: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
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
  text: {
    fontSize: 16,
    textAlign: "center",
    fontWeight: "bold",
  },
  modalText: {
    fontWeight: "bold",
    fontSize: 13,
    color: "#A8A8A8",
    marginBottom: 6,
    textAlign: "center",
  },
  display: { flexDirection: "row" },
  center: { alignItems: "center" },
  checktext: {
    fontSize: 10,
    marginTop: 4,
  },
  rocationBottom: { position: "absolute", right: 0, bottom: 0 },
  button: {
    width: 119.05,
    height: 37,
    borderRadius: 10,
    marginLeft: 11.9,
    alignItems: "center",
    justifyContent: "center",
  },
  buttontext: {
    fontSize: 12,
    fontWeight: "bold",
  },
  buttonText: {
    fontSize: 16,
    marginLeft: 23,
    fontFamily: "KoPubWorldDotum700",
    color: "#363636",
  },
});
