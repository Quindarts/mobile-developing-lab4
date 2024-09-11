import React, { useState } from "react";
import {
  Button,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

function Screen_2a() {
  const [showPass, setShowPass] = useState(false);
  const handleShowPass = () => {
    setShowPass(!showPass);
  };

  return (
    <View
      style={{
        backgroundColor: "#FBCB00",
        width: "100vw",
        height: "100vh",
      }}
    >
      <View
        style={{
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          paddingHorizontal: 10,
        }}
      >
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 36,
            alignSelf: "flex-start",
            marginBottom: 40,
          }}
        >
          LOGIN
        </Text>
        <View
          style={{
            width: "100%",
          }}
        >
          <TextInput
            style={{
              width: "100%",
              borderWidth: 2,
              borderColor: "white",
              height: 54,
              fontSize: 18,
              paddingHorizontal: 10,
            }}
            placeholder="Name"
          />
        </View>
        <View
          style={{
            width: "100%",
          }}
        >
          <TextInput
            style={{
              width: "100%",
              borderWidth: 2,
              borderColor: "white",
              height: 54,
              fontSize: 18,
              paddingHorizontal: 10,
            }}
            keyboardType="password"
            placeholder="password"
          />
        </View>
        <TouchableOpacity
          style={{
            color: "white",
            fontWeight: "bold",
            width: "100%",
            padding: "auto",
            marginTop: 20,
            marginBottom: 30,
            backgroundColor: "black",
            height: 45,
          }}
          onPress={() => {}}
        >
          <Text
            style={{
              color: "white",
              margin: "auto",
              fontWeight: "bold",
              fontSize: 20,
            }}
          >
            LOGIN
          </Text>
        </TouchableOpacity>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 20,
            marginTop: 20,
          }}
        >
          Forgot your password?
        </Text>
      </View>
    </View>
  );
}

export default Screen_2a;
