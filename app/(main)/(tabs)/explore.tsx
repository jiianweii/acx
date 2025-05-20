import { SafeAreaView, StyleSheet, Text } from "react-native";

export default function TabTwoScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Explore</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
