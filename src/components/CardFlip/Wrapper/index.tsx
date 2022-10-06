import React from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import {
  DM_WIDTH,
  DM_HEIGHT_MARGIN,
} from "../../../common/Dimensions";
import { ReactNode } from "react";
import isWEB from "../../../common/Resolutions/isWEB";

interface WrapperProps {
  children: ReactNode;
}

const Wrapper = (props: WrapperProps): JSX.Element => {
  return (
    <SafeAreaView>
      <View style={styles.imageContainer}>{props.children}</View>
    </SafeAreaView>
  );
};

export default Wrapper;

const WEB = isWEB() ? DM_WIDTH / 1.4 : DM_WIDTH;

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    width: WEB,
    height: DM_HEIGHT_MARGIN,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "flex-start",
  },
});
