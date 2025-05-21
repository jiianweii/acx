import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface ButtonProps {
  title: string;
  redirect?: () => void;
}

export default function Button({ title, redirect }: ButtonProps) {
  return (
    <View>
      <TouchableOpacity style={styles.btn} onPress={redirect}>
        <Text style={styles.txt}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  btn: {
    width: 200,
    height: 50,
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,

    backgroundColor: "#000",
  },
  txt: {
    color: "#fff",
    fontSize: 14,
    fontFamily: "JosefinSans-Medium",
  },
});
