import { StyleSheet, TextInput, View } from "react-native";

interface InputFieldProps {
  placeholder: string;
}

export default function InputField({ placeholder }: InputFieldProps) {
  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor={"#000"}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    width: 300,
    height: 50,
    borderWidth: 2,
    padding: 10,
    borderRadius: 12,
    fontFamily: "JosefinSans-Regular",
  },
});
