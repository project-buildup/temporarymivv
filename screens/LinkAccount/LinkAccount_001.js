//수정사항
//은행 가져와서 flatlist
//은행 누르면 원 색깔 채우기
//누른 은행 이름 빈칸에 띄우기

import {
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Pressable,
  Dimensions,
} from "react-native";
import Constants from "expo-constants";

const width = Dimensions.get("window").width;

function LinkAccount_001({ navigation }) {
  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.rootContainer}>
        <View style={styles.container}>
          {/* 위에가 flatlist로 변경해야하는 부분 */}
          <View style={styles.listContainer}>
            <Text style={styles.textSize}>계좌 연결</Text>
          </View>
          <View style={styles.buttonContainer}>
            <Pressable
              onPress={() => {
                navigation.goBack();
              }}
            >
              <View style={styles.button}>
                <Text style={styles.textSize}>A 은행</Text>
                <View
                  style={{
                    borderWidth: 1,
                    borderRadius: 100,
                    width: 20,
                    height: 20,
                    borderColor: "#696969",
                  }}
                />
              </View>
            </Pressable>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
export default LinkAccount_001;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    // backgroundColor: "black",
  },
  rootContainer: {
    flex: 1,
    paddingTop: Platform.OS === "android" && Constants.statusBarHeight,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  container: {
    width: "100%",
    height: 300,
    backgroundColor: "#f0f0f0",
    alignItems: "center",
    justifyContent: "center",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  buttonContainer: {
    marginTop: 50,
    justifyContent: "space-around",
    alignItems: "center",
  },
  button: {
    margin: 10,
    height: 40,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    width: width * 0.8,
  },
  textSize: {
    fontSize: 20,
  },
  listContainer: {
    borderBottomWidth: 1,
    borderColor: "#CCCDD0",
    width: "90%",
    alignItems: "center",
    height: 50,
    position: "absolute",
    top: 30,
  },
});
