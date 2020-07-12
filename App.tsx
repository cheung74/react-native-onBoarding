import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { ThemeProvider } from "@shopify/restyle";

import { OnBoarding, Welcome } from "./src/Auth";
import { LoadAssets, theme } from "./src/components";

const fonts = {
  "SFProText-Bold": require("./assets/fonts/SF-Pro-Text-Bold.otf"),
  "SFProText-Semibold": require("./assets/fonts/SF-Pro-Text-Semibold.otf"),
  "SFProText-Regular": require("./assets/fonts/SF-Pro-Text-Regular.otf"),
};

const AuthStack = createStackNavigator();

const AuthNavigator = () => {
  return (
    <AuthStack.Navigator headerMode="none">
      <AuthStack.Screen name="OnBoarding" component={OnBoarding} />
      <AuthStack.Screen name="Welcome" component={Welcome} />
    </AuthStack.Navigator>
  );
};
export default function App() {
  return (
    <ThemeProvider {...{ theme }}>
      <LoadAssets {...{ fonts }}>
        <AuthNavigator />
      </LoadAssets>
    </ThemeProvider>
  );
}
