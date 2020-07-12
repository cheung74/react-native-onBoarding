import React from "react";
import { StyleSheet, View } from "react-native";

import { Button, Text } from "../../components";

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    padding: 44,
    flex: 1,
  },
  subTitle: {
    marginBottom: 12,
    textAlign: "center",
  },
  description: {
    textAlign: "center",
    marginBottom: 40,
  },
});
interface SubslideProp {
  subTitle: string;
  description: string;
  last?: boolean;
  onPress: () => void;
}

const Subslide = ({ subTitle, description, last, onPress }: SubslideProp) => {
  return (
    <View style={styles.container}>
      <Text variant="title2" style={styles.subTitle}>
        {subTitle}
      </Text>
      <Text variant="body" style={styles.description}>
        {description}
      </Text>
      <Button
        label={last ? "Let's get started" : "Next"}
        variant={last ? "primary" : "default"}
        {...{ onPress }}
      />
    </View>
  );
};

export default Subslide;
