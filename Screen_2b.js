import React from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Rating } from "react-native-ratings";

function Screen_2b() {
  return (
    <View
      style={{
        width: "100vw",
        height: "100vh",
        paddingHorizontal: 10,
      }}
    >
      <view
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 10,
        }}
      >
        <View> </View>
        <View>aaasabdsadsadjsak</View>
      </view>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 20,
            marginTop: "40%",
            marginBottom: 20,
          }}
        >
          Cực kỳ hài lòng
        </Text>
        <View>
          <Rating style={{ paddingVertical: 10 }} />
        </View>
        <TouchableOpacity
          style={{
            borderColor: "#23235B",
            borderRadius: 8,
            borderWidth: 2,
            width: "100%",
            padding: 20,
            fontSize: 24,
            fontWeight: "bold",
            marginTop: 20,
          }}
        >
          {" "}
          Thêm hình ảnh
        </TouchableOpacity>
        <TextInput
          style={{
            borderWidth: 2,
            borderColor: "#CECEDDFF",
            borderRadius: 2,
            marginTop: 20,
            width: "100%",
            fontWeight: "bold",
            fontSize: 20,
            padding: 10,
          }}
          placeholder="Hãy chia sẻ những điều gì mà bạn thích về sản phẩm"
          editable
          multiline
          numberOfLines={4}
          maxLength={40}
        />
        <TouchableOpacity
          style={{
            borderRadius: 8,
            borderWidth: 2,
            backgroundColor: "#0d5db6",
            width: "100%",
            padding: 10,
            fontSize: 24,
            fontWeight: "bold",
            color: "white",
            marginTop: 20,
            textAlign: "center",
          }}
        >
          Gửi
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Screen_2b;
