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

  const typeArray = [
    {
      monstersPower: {
        color: MD3Colors.error50,
        unknown: cardData.color,
      },
      monstersType: {
        unique: "Unikat",
        rare: "Rzadki",
        common: "Zwyczajny",
      },
    },
  ];

  const unique = typeArray[0].monstersType.unique;
  const rare = typeArray[0].monstersType.rare;
  const common = typeArray[0].monstersType.common;

  const typeColor = typeArray[0].monstersPower.color;
  const typeUnknown = typeArray[0].monstersPower.unknown;

  const typeFirst =
    cardData.type === unique ||
    cardData.type === rare ||
    cardData.type === common
      ? typeColor
      : typeUnknown;

  const typeSecond =
    cardData.type === unique || cardData.type === rare
      ? typeColor
      : typeUnknown && cardData.type === common
      ? typeUnknown
      : typeUnknown;

  const typeThird =
    cardData.type === unique
      ? typeColor
      : typeUnknown && cardData.type === rare
      ? typeUnknown
      : typeUnknown && cardData.type === common
      ? typeUnknown
      : typeUnknown;

  const typeObj = {
    firstIcon: typeFirst,
    secondIcon: typeSecond,
    thirdIcon: typeSecond,
    fourthIcon: typeThird,
    fifthIcon: typeThird,
  };
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
              <View
                style={{
                  width: "90%",
                  marginTop: 60,
                  flexDirection: "column",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  alignContent: "center",
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    alignContent: "center",
                  }}
                >
                  <View
                    style={{
                      width: "100%",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      alignContent: "center",
                    }}
                  >
                    <Text style={{ color: "white", fontSize: 20 }}>
                      Lokalizacja:
                    </Text>
                    <Text style={{ color: "white", fontSize: 20 }}>
                      "Miejsce"
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    width: "115%",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    alignContent: "center",
                  }}
                >
                  <Text style={{ color: "white", fontSize: 20 }}>Siła:</Text>
                  <View
                    style={{
                      width: "100%",
                      flexDirection: "row",
                      justifyContent: "center",
                      alignItems: "center",
                      alignContent: "center",
                    }}
                  >
                    <IconButton
                      icon="sword-cross"
                      iconColor={typeObj.firstIcon}
                      size={20}
                    />
                    <IconButton
                      icon="sword-cross"
                      iconColor={typeObj.secondIcon}
                      size={20}
                    />
                    <IconButton
                      icon="sword-cross"
                      iconColor={typeObj.thirdIcon}
                      size={20}
                    />
                    <IconButton
                      icon="sword-cross"
                      iconColor={typeObj.fourthIcon}
                      size={20}
                    />
                    <IconButton
                      icon="sword-cross"
                      iconColor={typeObj.fifthIcon}
                      size={20}
                    />
                  </View>
                </View>
                <Text style={{ color: "white", fontSize: 20 }}>Surowce:</Text>
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
    backgroundColor: "#90a4ae",
    width: "90%",
    height: 1,
  },
});
