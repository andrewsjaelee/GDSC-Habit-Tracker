import React from "react";
import { Text, Button, View } from "react-native";
import {
  FacebookSocialButton,
  GoogleSocialButton,
  TwitterSocialButton,
} from "react-native-social-buttons";

function Login({ navigation }) {
  return (
    <View className="flex-1 items-center justify-center bg-black">
      <Text className="font-extrabold text-2xl text-white mb-5">
        Log In to get started!
      </Text>

      <FacebookSocialButton
        onPress={() => navigation.navigate("Home")}
        buttonViewStyle={{ borderRadius: 100, marginBottom: 10 }}
      />
      <GoogleSocialButton
        onPress={() => navigation.navigate("Home")}
        buttonViewStyle={{ borderRadius: 100, marginBottom: 10 }}
      />
      <TwitterSocialButton
        onPress={() => navigation.navigate("Home")}
        buttonViewStyle={{ borderRadius: 100, marginBottom: 10 }}
      />
    </View>
  );
}

export default Login;
