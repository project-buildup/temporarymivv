//수정사항
//비밀번호 수정 버튼 눌럿을 때, PWRegScreen에서 이동이 안됢

import {
  TouchableOpacity,
  Text,
  View,
  StyleSheet,
  Dimensions,
  Pressable,
} from "react-native";
// import { useNavigation } from "@react-navigation/native";

const width = Dimensions.get("window").width;
const arr = [0, 1, 2, 3, 4, 5];

export const CustomNumberPad = (props) => {
  // const navigation = useNavigation();

  const mapping = arr.map((index) => {
    return (
      <View
        key={index}
        style={[
          {
            backgroundColor: "#D9D9D9",
            borderRadius: "100",
            width: 25,
            height: 25,
            margin: 11,
          },
          index < props.PW.length ? { backgroundColor: "#206CFF" } : null,
        ]}
      ></View>
    );
  });
  ////////////////////////////

  const correctPW = () => {
    // navigation.navigate("PWReg_000");
    console.log("correct");
  };
  ////////////////////////////

  return (
    <View>
      <View style={{ alignItems: "center", marginBottom: 60 }}>
        <View
          style={{
            flexDirection: "row",
          }}
        >
          {mapping}
        </View>
        <Text style={{ marginTop: 21, color: "#717171", fontSize: 12 }}>
          {props.text}
        </Text>
        {props.button ? (
          <Pressable onPress={correctPW}>
            <View
              style={{
                backgroundColor: "#292929",
                borderRadius: 10,
                width: 162,
                marginTop: 21,
                height: 27,
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  color: "#ECECEC",
                  textAlign: "center",
                  fontSize: 13,
                  fontWeight: "bold",
                }}
              >
                비밀번호 재설정
              </Text>
            </View>
          </Pressable>
        ) : null}
      </View>

      <View>
        <View style={styles.container}>
          <View style={styles.row}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => props.onKeyPress("1")}
            >
              <Text style={styles.buttonText}>1</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => props.onKeyPress("2")}
            >
              <Text style={styles.buttonText}>2</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => props.onKeyPress("3")}
            >
              <Text style={styles.buttonText}>3</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => props.onKeyPress("4")}
            >
              <Text style={styles.buttonText}>4</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => props.onKeyPress("5")}
            >
              <Text style={styles.buttonText}>5</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => props.onKeyPress("6")}
            >
              <Text style={styles.buttonText}>6</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => props.onKeyPress("7")}
            >
              <Text style={styles.buttonText}>7</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => props.onKeyPress("8")}
            >
              <Text style={styles.buttonText}>8</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => props.onKeyPress("9")}
            >
              <Text style={styles.buttonText}>9</Text>
            </TouchableOpacity>
          </View>
          <View style={[styles.row, { borderBottomWidth: 0 }]}>
            <TouchableOpacity style={styles.button}></TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => props.onKeyPress("0")}
            >
              <Text style={styles.buttonText}>0</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => props.onKeyPress("<")}
            >
              <Text style={styles.buttonText}>{"<"}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width,
    backgroundColor: "#EFF1F5",
    paddingTop: 30,
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
    height: 80,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 24,
    color: "#616161",
  },
});

export default CustomNumberPad;
