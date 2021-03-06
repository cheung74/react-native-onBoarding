import React, { useRef } from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import Animated, { multiply, divide } from "react-native-reanimated";
import { interpolateColor, useScrollHandler } from "react-native-redash";

import Slide, { SLIDE_HEIGHT, BORDER_RADIUS } from "./Slide";
import Subslide from "./Subslide";
import Dot from "./Dot";

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  slider: {
    height: SLIDE_HEIGHT,
    backgroundColor: "red",
    borderBottomRightRadius: BORDER_RADIUS,
  },
  footer: {
    flex: 1,
  },
  footerContent: {
    flex: 1,
    backgroundColor: "white",
    borderTopLeftRadius: BORDER_RADIUS,
  },
  pagination: {
    ...StyleSheet.absoluteFillObject,
    height: BORDER_RADIUS,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});

const slides = [
  {
    title: "Relaxed",
    subTitle: "Find Your Outfits",
    description:
      "Confused about your outfit? Don't worry! Find out the best outfit here!",
    color: "#BFEAF5",
    picture: require("./assets/1.png"),
  },
  {
    title: "Playful",
    subTitle: "Hear it First, Wear it First",
    description:
      "Hating the clothes in your wardrobe? Explore hundreds of outfit ideas",
    color: "#BEECC4",
    picture: require("./assets/2.png"),
  },
  {
    title: "Eccentric",
    subTitle: "Your Styles, Your Way",
    description:
      "Create your individual & unique style and look amazing everyday",
    color: "#FFE4D9",
    picture: require("./assets/3.png"),
  },
  {
    title: "Funky",
    subTitle: "Look Good, Feel Good",
    description:
      "Discover the latest trends in fashion and explore your personality",
    color: "#FFDDDD",
    picture: require("./assets/4.png"),
  },
];

const OnBoarding = () => {
  const scroll = useRef<Animated.ScrollView>(null);
  const { scrollHandler, x } = useScrollHandler();
  const backgroundColor = interpolateColor(x, {
    inputRange: slides.map((_, i) => i * width),
    outputRange: slides.map((slide) => slide.color),
  });
  return (
    <View style={styles.container}>
      <Animated.View style={[styles.slider, { backgroundColor }]}>
        <Animated.ScrollView
          ref={scroll}
          horizontal
          snapToInterval={width}
          decelerationRate="fast"
          showsHorizontalScrollIndicator={false}
          bounces={false}
          {...scrollHandler}
        >
          {slides.map(({ title, picture }, index) => (
            <Slide {...{ title, picture }} key={index} right={!!(index % 2)} />
          ))}
        </Animated.ScrollView>
      </Animated.View>
      <View style={styles.footer}>
        <Animated.View
          style={{
            ...StyleSheet.absoluteFillObject,
            backgroundColor,
          }}
        />
        <View style={styles.footerContent}>
          <View style={styles.pagination}>
            {slides.map((_, index) => (
              <Dot key={index} currentIndex={divide(x, width)} {...{ index }} />
            ))}
          </View>
          <Animated.View
            style={{
              flex: 1,
              flexDirection: "row",
              width: width * slides.length,
              transform: [{ translateX: multiply(x, -1) }],
            }}
          >
            {slides.map(({ subTitle, description }, index) => (
              <Subslide
                {...{ subTitle, description, x }}
                onPress={() => {
                  if (scroll.current) {
                    scroll.current
                      .getNode()
                      .scrollTo({ x: width * (index + 1), animated: true });
                  }
                }}
                key={index}
                last={index === slides.length - 1}
              />
            ))}
          </Animated.View>
        </View>
      </View>
    </View>
  );
};
export default OnBoarding;
