import { Stack } from "expo-router";

export default function AuthLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="login"
        options={{ title: "login", headerShown: false }}
      />
      <Stack.Screen
        name="register"
        options={{ title: "register", headerShown: false }}
      />
    </Stack>
  );
}
