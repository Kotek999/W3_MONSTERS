import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, View, Dimensions, ImageBackground } from "react-native";
import { Text, Checkbox, Button } from "react-native-paper";
// @ts-ignore
import theme from "../../assets/firstScreenImage.png";

const DM_WIDTH = Dimensions.get("window").width;
const DM_HEIGHT = Dimensions.get("window").height;

export default function HomeScreen() {
  function checkAge() {
    if (!checked) {
      return alert("Nie ma wstępu!");
    }
    return alert("Możesz przejść!");
  }

  const [checked, setChecked] = useState(false);

  return (
    <ImageBackground source={theme} style={styles.image}>
      <View style={styles.container}>
        <Text variant="titleLarge" style={styles.title}>
          The Witcher 3 - Monsters
        </Text>
        {/* <StatusBar style="auto" /> */}
        <View style={styles.headlineContainer}>
          <Text variant="titleSmall" style={styles.title}>
            Aplikacja wymaga potwierdzenia wieku.
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
              Czy masz ukończone 18 lat?
            </Text>
          </View>
        </View>

        <Button
          textColor="red"
          buttonColor="white"
          icon="sword"
          mode="contained"
          onPress={() => checkAge()}
        >
          Exploruj!
        </Button>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "90%",
    height: "90%",
    backgroundColor: "#000000a0",
    alignItems: "center",
    alignContent: "center",
    justifyContent: "space-around",
    borderRadius: 20,
  },
  headlineContainer: {
    marginLeft: 20,
    marginRight: 20,
    justifyContent: "center",
    alignItems: "flex-start",
    alignContent: "center",
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
