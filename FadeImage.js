import React, { useState } from "react";
import { Animated, TouchableOpacity, StyleSheet, Image } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    zIndex: 1,
    position: "absolute",
    height: "100%",
    width: "100%"
  }
});

export const FadeImage = () => {
  const [fadeOut] = useState(new Animated.Value(1));

  const handleEnd = () => {
    Animated.timing(fadeOut, {
      toValue: 0,
      duration: 1000
    }).start();
  };

  const color = fadeOut.interpolate({
    inputRange: [0, 1],
    outputRange: ["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0.7)"]
  });

  return (
    <Animated.View
      style={[
        styles.container,
        {
          backgroundColor: color
        }
      ]}
    >
      <TouchableOpacity style={styles.container} onPress={handleEnd}>
        <Animated.View
          style={{
            position: "absolute",
            top: 100,
            opacity: fadeOut,
            transform: [
              {
                translateY: fadeOut.interpolate({
                  inputRange: [0, 1],
                  outputRange: [-300, 0]
                })
              }
            ]
          }}
        >
          <Image
            style={{ width: 50, height: 50 }}
            source={{
              uri:
                "https://facebook.github.io/react-native/docs/assets/favicon.png"
            }}
          />
        </Animated.View>
      </TouchableOpacity>
    </Animated.View>
  );
};
