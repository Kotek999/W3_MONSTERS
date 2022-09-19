import React, { useState, useEffect, FC } from "react";
import { SafeAreaView, StyleSheet, View, Text } from "react-native";
import { IconButton, MD3Colors, Button } from "react-native-paper";
import { CARD_DATA } from "../CardData";
import { DM_WIDTH, DM_HEIGHT } from "../../common/Dimensions";

const CardFlip = ({ navigation }: any) => {
  const randomCard = CARD_DATA[Math.floor(Math.random() * CARD_DATA.length)];

  const [image, setImage] = useState(randomCard);

  useEffect(() => {
    () => {
      const randomCard =
        CARD_DATA[Math.floor(Math.random() * CARD_DATA.length)];
      setImage(randomCard);
    };
  }, [setImage]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {image && (
        <View style={styles.image}>
          <View style={styles.containerArrow}>
            <IconButton
              icon="arrow-left"
              iconColor={MD3Colors.error50}
              size={34}
              onPress={() => navigation.navigate("Home")}
            />
          </View>
          <View style={styles.imageAnimate}>
            <Text style={{ color: "red", fontSize: 24 }}></Text>
            <Text style={{ color: "red", fontSize: 24 }}></Text>
            <Button onPress={() => console.log("pressed")}>Klik</Button>
          </View>
        </View>
      )}
    </SafeAreaView>
  );
};

export default CardFlip;

const styles = StyleSheet.create({
  image: {
    backgroundColor: "black",
    flex: 1,
    width: DM_WIDTH,
    height: DM_HEIGHT / 1.5,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  containerArrow: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-start",
    alignContent: "center",
  },
  imageAnimate: {
    backgroundColor: "green",
    width: DM_WIDTH - 50,
    height: DM_HEIGHT / 1.5,
    margin: "5.8%",
    borderRadius: 20,
  },
});
