import { Pressable, StyleSheet, Text } from "react-native";

function ChallengeItem({ onPress }) {
  return (
    <Pressable
      style={styles.container}
      onPress={() => {
        onPress();
      }}
    >
      <Text>배달팁 아끼기</Text>
    </Pressable>
  );
}

export default ChallengeItem;

const styles = StyleSheet.create({
  container: {
    width: 300,
    height: 90,
    borderRadius: 15,
    padding: 15,
    margin: 7,
    backgroundColor: "#f0f0f0",
  },
});
