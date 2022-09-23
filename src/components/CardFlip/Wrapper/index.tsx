import React from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import { DM_WIDTH, DM_HEIGHT_MARGIN } from "../../../common/Dimensions";

const Wrapper = (props: any): JSX.Element => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.imageContainer}>{props.children}</View>
    </SafeAreaView>
  );
};

export default Wrapper;

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    width: DM_WIDTH,
    height: DM_HEIGHT_MARGIN,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "flex-start",
  },
});
