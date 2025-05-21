import Button from "@/components/Button";
import InputField from "@/components/InputField";
import { useNavigation } from "@react-navigation/native";
import {
  Image,
  Keyboard,
  SafeAreaView,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";

export default function login() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.form}>
          <Image
            style={{ width: 100, height: 100, resizeMode: "contain" }}
            source={require("@/assets/images/ACX.png")}
          />
          <InputField placeholder="Email Address" />
          <InputField placeholder="Password" />
          <View style={styles.btnContainer}>
            <Button title="Sign In" />
            <Button
              title="Register An Account"
              redirect={() => navigation.navigate("register")}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  form: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    rowGap: 30,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  btnContainer: {
    rowGap: 20,
  },
});
