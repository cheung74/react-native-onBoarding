import React from "react";
import Animated, { Extrapolate, interpolate } from "react-native-reanimated";
interface DotProp {
  index: number;
  currentIndex: Animated.Node<number>;
}

const Dot = ({ index, currentIndex }: DotProp) => {
  const opacity = interpolate(currentIndex, {
    inputRange: [index - 1, index, index + 1],
    outputRange: [0.25, 1, 0.25],
    extrapolate: Extrapolate.CLAMP,
  });
  const scale = interpolate(currentIndex, {
    inputRange: [index - 1, index, index + 1],
    outputRange: [1, 1.25, 1],
    extrapolate: Extrapolate.CLAMP,
  });
  return (
    <Animated.View
      style={{
        opacity,
        backgroundColor: "#2CB9B0",
        width: 8,
        height: 8,
        borderRadius: 4,
        margin: 4,
        transform: [{ scale }],
      }}
    />
  );
};

export default Dot;
