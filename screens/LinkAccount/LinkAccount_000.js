//수정사항
//1원 인증하기
//인증 답변에 따른 결과 경고창
import {
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Pressable,
  Modal,
  Dimensions,
  FlatList,
  TextInput,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Constants from "expo-constants";
import { useState } from "react";
const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

function LinkAccount_000({ navigation }) {
  const [input, setInput] = useState("");
  const [modal, setModal] = useState(false);
  const [data, setData] = useState();
  const [account, setAccount] = useState("");
  const [keypad, setKeypad] = useState(false);

  const ALLDATA = [
    { name: "카카오뱅크", uri: null },
    { name: "국민은행", uri: null },
    { name: "신협", uri: null },
    { name: "저축은행", uri: null },
    { name: "대구은행", uri: null },
    { name: "농협중앙회", uri: null },
    { name: "카카오뱅크2", uri: null },
  ];

  const finding = (text) => {
    if (data.length === ALLDATA.length) {
      setData("");
    }
    let DATA = [];

    ALLDATA.map((item) => {
      if (item.name.includes(text) && text) {
        DATA = [...DATA, item];
      }
    });
    setData(DATA);
  };

  const mapping = ({ item }) => {
    return (
      <Pressable
        onPress={() => {
          setInput(item.name);
          setModal(false);
        }}
      >
        <View
          style={{
            marginTop: 23,
            width: 174,
            flexDirection: "row",
          }}
        >
          {item.uri ? (
            <Image
              source={item.uri}
              style={{
                width: 27,
                height: 27,
                backgroundColor: "#D9D9D9",
                marginRight: 9,
                borderRadius: 100,
              }}
            />
          ) : (
            <View
              style={{
                width: 27,
                height: 27,
                backgroundColor: "#D9D9D9",
                marginRight: 9,
                borderRadius: 100,
              }}
            />
          )}
          <Text style={{ fontFamily: "KoPubWorldDotum500", fontSize: 16 }}>
            {item.name}
          </Text>
        </View>
      </Pressable>
    );
  };
  return (
    <SafeAreaView style={styles.root}>
      <ScrollView>
        <View style={styles.rootContainer}>
          <Text
            style={{
              fontSize: 31,
              fontFamily: "KoPubWorldDotum700",
              marginTop: 45,
              marginLeft: 37,
            }}
          >
            은행계좌 연결하기
          </Text>
          <Text
            style={{
              fontSize: 20,
              marginTop: 20,
              fontFamily: "KoPubWorldDotum700",
              marginLeft: 37,
            }}
          >
            연동할 계좌 정보를 입력해주세요
          </Text>
          <View style={{ marginTop: 20 }}>
            <Text style={{ fontSize: 15, fontWeight: "bold", marginLeft: 38 }}>
              은행명
            </Text>

            <Pressable
              onPress={() => {
                setModal(true);
                setData(ALLDATA);
              }}
              style={{ alignItems: "center" }}
            >
              <View
                style={{
                  marginTop: 14,
                  width: 333,
                  backgroundColor: "#EFF1F5",
                  height: 45,
                  borderRadius: 19,
                  justifyContent: "center",
                  paddingLeft: 20,
                }}
              >
                <Text
                  style={{ fontFamily: "KoPubWorldDotum500", fontSize: 16 }}
                >
                  {input}
                </Text>
              </View>
            </Pressable>
            {input ? (
              <View style={{ marginTop: 20 }}>
                <Text
                  style={{ fontSize: 15, fontWeight: "bold", marginLeft: 38 }}
                >
                  계좌 번호
                </Text>
                <Pressable
                  onPress={() => {
                    setKeypad(true);
                  }}
                >
                  <View
                    style={{
                      marginTop: 14,
                      width: 333,
                      backgroundColor: "#EFF1F5",
                      height: 45,
                      borderRadius: 19,
                      justifyContent: "center",
                      paddingLeft: 20,
                      alignSelf: "center",
                    }}
                  >
                    <Text
                      style={{ fontFamily: "KoPubWorldDotum500", fontSize: 16 }}
                    >
                      {account}
                    </Text>
                  </View>
                </Pressable>
                <Pressable
                  onPress={() => {
                    console.log("check account");
                    navigation.replace("LinkAccount_002");
                  }}
                >
                  <View
                    style={{
                      width: 333,
                      backgroundColor: "#292929",
                      height: 45,
                      borderRadius: 19,
                      justifyContent: "center",
                      alignSelf: "center",
                      marginTop: 360,
                    }}
                  >
                    <Text
                      style={{
                        fontFamily: "KoPubWorldDotum700",
                        fontSize: 20,
                        color: "#ECECEC",
                        alignSelf: "center",
                      }}
                    >
                      1원 인증하기
                    </Text>
                  </View>
                </Pressable>
              </View>
            ) : null}

            <Modal transparent={true} visible={modal}>
              <Pressable
                onPress={() => {
                  setModal(false);
                }}
              >
                <View
                  style={{
                    height: height - 405,
                    backgroundColor: "rgba(0,0,0,0.58)",
                  }}
                ></View>
              </Pressable>

              <View
                style={{
                  height: 405,
                  backgroundColor: "rgba(0,0,0,0.58)",
                }}
              >
                <View
                  style={{
                    height: 405,
                    backgroundColor: "white",
                    borderRadius: 20,
                    paddingTop: 29,
                    paddingHorizontal: 29,
                    paddingBottom: 57,
                  }}
                >
                  <Text
                    style={{
                      fontFamily: "KoPubWorldDotum700",
                      fontSize: 24,
                      marginLeft: 9,
                    }}
                  >
                    은행선택
                  </Text>
                  <View
                    style={{
                      backgroundColor: "#EFF1F5",
                      height: 62,
                      alignItems: "center",
                      paddingLeft: 18,
                      marginTop: 14,
                      marginBottom: 6,
                      borderRadius: 20,
                      flexDirection: "row",
                    }}
                  >
                    <Image
                      source={require("../../assets/find.png")}
                      style={{ marginRight: 12, width: 24, height: 24 }}
                    />
                    <TextInput
                      placeholder="은행검색"
                      style={{ fontSize: 16, flex: 1 }}
                      onChangeText={finding}
                    />
                  </View>
                  <View style={{ paddingHorizontal: 12 }}>
                    <FlatList
                      data={data}
                      renderItem={mapping}
                      numColumns={2}
                      keyExtractor={(item) => item.name}
                    />
                  </View>
                </View>
              </View>
            </Modal>
            <Modal transparent={true} visible={keypad}>
              <Pressable onPress={() => setKeypad(false)}>
                <View style={{ height: height - 300 }} />
              </Pressable>
              <View style={{ position: "absolute", bottom: 0 }}>
                <View style={styles.container}>
                  <View style={styles.row}>
                    <TouchableOpacity
                      style={styles.button}
                      onPress={() => setAccount(account + "1")}
                    >
                      <Text style={styles.buttonText}>1</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.button}
                      onPress={() => setAccount(account + "2")}
                    >
                      <Text style={styles.buttonText}>2</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.button}
                      onPress={() => setAccount(account + "3")}
                    >
                      <Text style={styles.buttonText}>3</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.row}>
                    <TouchableOpacity
                      style={styles.button}
                      onPress={() => setAccount(account + "4")}
                    >
                      <Text style={styles.buttonText}>4</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.button}
                      onPress={() => setAccount(account + "5")}
                    >
                      <Text style={styles.buttonText}>5</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.button}
                      onPress={() => setAccount(account + "6")}
                    >
                      <Text style={styles.buttonText}>6</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.row}>
                    <TouchableOpacity
                      style={styles.button}
                      onPress={() => setAccount(account + "7")}
                    >
                      <Text style={styles.buttonText}>7</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.button}
                      onPress={() => setAccount(account + "8")}
                    >
                      <Text style={styles.buttonText}>8</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.button}
                      onPress={() => setAccount(account + "9")}
                    >
                      <Text style={styles.buttonText}>9</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={[styles.row, { borderBottomWidth: 0 }]}>
                    <TouchableOpacity
                      style={styles.button}
                      onPress={() => setKeypad(false)}
                    >
                      <Text style={styles.buttonText}>내리기</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.button}
                      onPress={() => setAccount(account + "0")}
                    >
                      <Text style={styles.buttonText}>0</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.button}
                      onPress={() => setAccount(account.slice(0, -1))}
                    >
                      <Text style={styles.buttonText}>{"<"}</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </Modal>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
export default LinkAccount_000;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" && Constants.statusBarHeight,
  },

  rootContainer: {
    flex: 1,
    marginTop: 22,
  },
  buttonContainer: {
    width: 120,
    height: 40,
    justifyContent: "center",
  },
  modal: {
    width: "100%",
    height: "100%",
    backgroundColor: "black",
    opacity: 0.7,
  },
  buttonWrapper: {
    backgroundColor: "#292929",
    width: 333,
    borderRadius: 20,
    position: "absolute",
    bottom: 0,
    height: 45,
    justifyContent: "center",
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
