import { useState } from "react";
import { StyleSheet, View, ImageBackground, ToastAndroid } from "react-native";
import { Text, Checkbox, Button } from "react-native-paper";
// @ts-ignore
import theme from "../../assets/images/firstScreenImage.png";
import { DM_WIDTH, DM_HEIGHT } from "../../common/Dimensions";
import { HOME_DATA } from "./data";
// @ts-ignore
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import isWEB from "../../common/Resolutions/isWEB";

export default function HomeScreen({ navigation }: NativeStackScreenProps) {
  const [checked, setChecked] = useState(false);
  const check = "Potwierdź swój wiek!";

  const checkAge = () => {
    checked
      ? navigation.navigate("Information")
      : isWEB()
      ? alert(check)
      : ToastAndroid.show(check, ToastAndroid.CENTER);
  };

  return (
    <ImageBackground source={theme} style={styles.image}>
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text variant="titleLarge" style={styles.title}>
            {HOME_DATA.title}
          </Text>
        </View>
        <View style={styles.headlineContainer}>
          <Text variant="titleSmall" style={styles.title}>
            {HOME_DATA.subTitle}
          </Text>
          <View style={styles.checkContainer}>
            <Checkbox
              uncheckedColor="red"
              color="red"
              status={checked ? "checked" : "unchecked"}
              onPress={() => {
                setChecked(!checked);
              }}
            />
            <Text variant="titleSmall" style={styles.title}>
              {HOME_DATA.variantTitle}
            </Text>
          </View>
        </View>
        <Button
          textColor={!checked ? "lightgray" : "red"}
          buttonColor={!checked ? "gray" : "white"}
          icon="sword"
          mode="contained"
          onPress={() => checkAge()}
        >
          {HOME_DATA.buttonTitle}
        </Button>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "98%",
    height: "98%",
    alignItems: "center",
    alignContent: "center",
    justifyContent: "space-around",
    borderRadius: 20,
  },
  titleContainer: {
    height: "6%",
    backgroundColor: "#000000a0",
    alignItems: "center",
    alignContent: "center",
    justifyContent: "space-around",
    borderRadius: 20,
  },
  headlineContainer: {
    height: "12%",
    marginLeft: 20,
    marginRight: 20,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    backgroundColor: "#000000a0",
    borderRadius: 20,
  },
  checkContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-start",
    alignContent: "center",
  },
  title: {
    top: 0,
    textTransform: "uppercase",
    fontWeight: "bold",
    color: "white",
    padding: 10,
  },
  image: {
    flex: 1,
    width: DM_WIDTH,
    height: DM_HEIGHT,
    justifyContent: "center",
    alignItems: "center",
  },
});
