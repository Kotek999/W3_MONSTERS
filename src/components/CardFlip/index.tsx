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
} from "react-native-paper";
import { CARD_DATA } from "../CardData";
import {
  DM_WIDTH,
  DM_WIDTH_MARGIN,
  DM_HEIGHT_MARGIN,
} from "../../common/Dimensions";

const CardFlip = () => {
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
            style={styles.imageFlipedCard}
            visible={refresh}
            onDismiss={onNoPressArea}
            duration={Infinity}
            action={{
              label: "",
            }}
          >
            <View style={styles.imageFlipedContainer}>
              <ImageBackground
                source={cardData.image}
                style={{ width: "70%", height: "70%" }}
                borderRadius={20}
              >
                <Text></Text>
              </ImageBackground>
              <Text style={{ color: "white", fontSize: 20 }}>
                Numer: {cardData.id}
              </Text>
              <Text style={{ color: "white", fontSize: 20 }}>
                Nazwa: {cardData.value}
              </Text>
            </View>
          </Snackbar>
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
  imageFlipedCard: {
    backgroundColor: "gray",
    width: DM_WIDTH_MARGIN,
    height: DM_HEIGHT_MARGIN,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "flex-start",
    borderRadius: 20,
    margin: "0%",
  },
  imageFlipedContainer: {
    flex: 1,
    width: DM_WIDTH_MARGIN,
    height: DM_HEIGHT_MARGIN,
  },
  refreshContainer: {
    flexDirection: "row",
  },
  refreshTitle: {
    marginTop: 16,
    color: "cyan",
    fontSize: 20,
  },
});
