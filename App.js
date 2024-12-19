import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import * as serviceWorkerRegistration from "./sw/serviceWorkerRegistration";

export default function App() {
  const [btntext, setBtntext] = useState("Click me");
  return (
    <View style={styles.container}>
      <Text testID={"welcomeText:0"} nativeID={"welcomeText:0"}>
        Hello World!
      </Text>
      <Text testID={"welcomeBro:1"} nativeID={"welcomeText:1"}>
        Hello World!
      </Text>
      <Text testID={"welcomeText:1"} nativeID={"welcomeText:2"}>
        Hello World!
      </Text>
      <Button
        testID={"welcomeButton"}
        onPress={() => setBtntext("Button clicked!")}
        title={btntext}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

/* istanbul ignore next */
serviceWorkerRegistration.register({
  onUpdate: (registration) => {},
  onSuccess: (registration) => {},
});