import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  ImageBackground,
} from "react-native";
import {
  Snackbar,
  TouchableRipple,
  IconButton,
  MD3Colors,
  Avatar,
  Divider,
} from "react-native-paper";
import { CARD_DATA } from "../CardData";
import {
  DM_WIDTH,
  DM_WIDTH_MARGIN,
  DM_HEIGHT_MARGIN,
} from "../../common/Dimensions";

const CardFlip = (): JSX.Element => {
  const randomCard = CARD_DATA[Math.floor(Math.random() * CARD_DATA.length)];

  const [cardData, setCardData] = useState(randomCard);

  useEffect(() => {
    () => {
      const randomCard =
        CARD_DATA[Math.floor(Math.random() * CARD_DATA.length)];
      setCardData(randomCard);
    };
  }, [setCardData]);

  const [refresh, setRefresh] = React.useState(false);

  const onPressArea = () => setRefresh(!refresh);

  const onNoPressArea = () => setRefresh(false);

  // const avatar = require("../../assets/images/temporaryImage_Two.png");

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.imageContainer}>
        <ImageBackground
          source={cardData.image}
          style={styles.image}
          borderRadius={20}
        >
          <TouchableRipple
            disabled={false}
            onPress={onPressArea}
            rippleColor="transparent"
            style={styles.imagePressableArea}
          >
            <Text></Text>
          </TouchableRipple>
          <Snackbar
            style={styles.flipedCard}
            visible={refresh}
            onDismiss={onNoPressArea}
            duration={Infinity}
            action={{
              label: "",
            }}
          >
            <View style={styles.imageFlipedContainer}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Avatar.Image
                  size={150}
                  source={cardData.image}
                  style={{ borderWidth: 2, borderColor: cardData.borderColor }}
                />
                <View style={{ flexDirection: "column", marginLeft: 30 }}>
                  <Text style={{ color: "white", fontSize: 20 }}>
                    Numer: {cardData.id}
                  </Text>
                  <Text style={{ color: "white", fontSize: 20 }}>
                    Nazwa: {cardData.value}
                  </Text>
                  <Text style={{ color: "white", fontSize: 20 }}>
                    Typ: {cardData.type}
                  </Text>
                </View>
              </View>
              <View
                style={{
                  width: "100%",
                  height: 1,
                }}
              >
                <Divider style={styles.divider} />
                {refresh && (
                  <View style={styles.refreshContainer}>
                    <Text style={styles.refreshTitle}>Odśwież</Text>
                    <IconButton
                      icon="refresh"
                      iconColor={MD3Colors.error50}
                      size={34}
                      onPress={onPressArea}
                    />
                  </View>
                )}
              </View>
            </View>
          </Snackbar>
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
};

export default CardFlip;

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
  image: {
    width: DM_WIDTH_MARGIN,
    height: DM_HEIGHT_MARGIN,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "flex-start",
    borderRadius: 20,
    marginTop: "20%",
  },
  imagePressableArea: {
    backgroundColor: "transparent",
    width: DM_WIDTH_MARGIN,
    height: DM_HEIGHT_MARGIN,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  imageFlipedContainer: {
    flex: 1,
    width: DM_WIDTH_MARGIN,
    height: DM_HEIGHT_MARGIN,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  flipedCard: {
    backgroundColor: "#333333",
    width: DM_WIDTH_MARGIN,
    height: DM_HEIGHT_MARGIN,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "flex-start",
    borderRadius: 20,
    margin: "0%",
  },
  refreshContainer: {
    top: "70%",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    alignContent: "flex-end",
  },
  refreshTitle: {
    marginTop: 16,
    color: "white",
    fontSize: 20,
  },
  divider: {
    top: 20,
    marginBottom: 20,
    backgroundColor: "#90a4ae",
    width: "90%",
    height: 1,
  },
});
