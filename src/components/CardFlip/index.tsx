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
import { cardFlipData } from "./data";
import {
  DM_WIDTH,
  DM_WIDTH_MARGIN,
  DM_HEIGHT_MARGIN,
  DM_WIDTH_MARGIN_WEB,
} from "../../common/Dimensions";
import Wrapper from "./Wrapper";
import { FlexAlignType } from "react-native";
import { useNavigation } from "@react-navigation/native";
//@ts-ignore
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import isWEB from "../../common/Resolutions/isWEB";

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

  const navigation: NativeStackScreenProps = useNavigation();

  const onClickGoToRedux = () => navigation.navigate("Data");

  interface ColorArray {
    color: string;
    unknown: string | undefined;
  }

  interface TypeArray {
    epic: string;
    rare: string;
    common: string;
  }

  interface MonstersType {
    epic_Monster: string;
    rare_Monster: string;
    common_Monster: string;
  }

  const colorArray: ColorArray[] = [
    {
      color: MD3Colors.error50,
      unknown: cardData.color,
    },
  ];

  const typeArray: TypeArray[] = [
    {
      epic: "Unikat",
      rare: "Rzadki",
      common: "Zwyczajny",
    },
  ];

  const monstersType: MonstersType[] = [
    {
      epic_Monster: typeArray[0].epic,
      rare_Monster: typeArray[0].rare,
      common_Monster: typeArray[0].common,
    },
  ];

  const typeColor = colorArray[0].color;
  const typeUnknown = colorArray[0].unknown;

  const typeFirst =
    cardData.type === monstersType[0].epic_Monster ||
    cardData.type === monstersType[0].rare_Monster ||
    cardData.type === monstersType[0].common_Monster
      ? typeColor
      : typeUnknown;

  const typeSecond =
    cardData.type === monstersType[0].epic_Monster ||
    cardData.type === monstersType[0].rare_Monster
      ? typeColor
      : typeUnknown && cardData.type === monstersType[0].common_Monster
      ? typeUnknown
      : typeUnknown;

  const typeThird =
    cardData.type === monstersType[0].epic_Monster
      ? typeColor
      : typeUnknown && cardData.type === monstersType[0].rare_Monster
      ? typeUnknown
      : typeUnknown && cardData.type === monstersType[0].common_Monster
      ? typeUnknown
      : typeUnknown;

  const typeObj = [
    {
      iconType: typeFirst,
    },
    {
      iconType: typeSecond,
    },
    {
      iconType: typeSecond,
    },
    {
      iconType: typeThird,
    },
    {
      iconType: typeThird,
    },
  ];

  interface IconProps {
    color: string | undefined;
  }

  const IconPower = (props: IconProps) => {
    return <IconButton icon="skull" iconColor={props.color} size={20} />;
  };

  interface ImageProps {
    // width: number;
    flexDirection: "row" | undefined;
    flexWrap: "wrap" | undefined;
    justifyContent: "center" | undefined;
    alignItems: FlexAlignType | undefined;
    borderRadius: number;
    marginTop: string;
    borderWidth: number;
    borderColor: string;
  }

  const image: ImageProps = {
    // width: DM_WIDTH - 40,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "flex-start",
    borderRadius: 25,
    marginTop: "20%",
    borderWidth: 4,
    borderColor: cardData.borderColor,
  };
  return (
    <SafeAreaView>
      <Wrapper>
        <ImageBackground
          source={cardData.image}
          style={image}
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
              <View style={styles.avatarWithText}>
                <Avatar.Image size={150} source={cardData.image} />
                <View style={styles.personalDataContainer}>
                  <Text style={styles.personalDataText}>
                    {cardFlipData.card_id} {cardData.id + 1}
                  </Text>
                  <Text style={styles.personalDataTextMarginName}>
                    {cardFlipData.card_name} {cardData.value}
                  </Text>
                  <Text style={styles.personalDataTextMarginType}>
                    {cardFlipData.card_type}{" "}
                    <Text style={{ color: cardData.typeColor }}>
                      {cardData.type}
                    </Text>
                  </Text>
                </View>
              </View>
              <View style={styles.contentContainer}>
                <View style={styles.firstContentContainer}>
                  <View style={styles.locationContainer}>
                    <Text style={styles.contentText}>
                      {cardFlipData.card_location}
                    </Text>
                    <Text style={styles.contentText}>{cardData.place}</Text>
                  </View>
                </View>
                <View style={styles.secondContentContainer}>
                  <View style={styles.strengthContainer}>
                    <Text style={styles.contentText}>
                      {cardFlipData.card_strength}
                    </Text>
                    <View style={styles.iconsContainer}>
                      {typeObj.map((type, key) => {
                        return (
                          <IconPower
                            color={type.iconType}
                            key={`type-icon-${key}`}
                          />
                        );
                      })}
                    </View>
                  </View>
                </View>
                <View style={styles.thirdContentContainer}>
                  <Text style={styles.contentText}>
                    {cardFlipData.card_resources}
                  </Text>
                  <View style={styles.lootContainer}>
                    <Text style={styles.contentText}>
                      {cardData.loot_first}
                    </Text>
                    <Text style={styles.contentText}>
                      {cardData.loot_second}
                    </Text>
                    <Text style={styles.contentText}>
                      {cardData.loot_third}
                    </Text>
                  </View>
                </View>

                <View style={styles.refreshWithCards}>
                  {refresh && (
                    <View style={styles.refreshContainer}>
                      <View style={styles.refreshIconsContainer}>
                        <IconButton
                          icon={"arrow-bottom-left"}
                          iconColor={MD3Colors.error50}
                          size={34}
                          onPress={onPressArea}
                        />
                        <IconButton
                          // icon={"cards"}
                          icon={"heart"}
                          size={30}
                          onPress={onClickGoToRedux}
                          iconColor={MD3Colors.error80}
                        />
                      </View>
                    </View>
                  )}
                </View>
              </View>
            </View>
          </Snackbar>
        </ImageBackground>
      </Wrapper>
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
  imagePressableArea: {
    backgroundColor: "transparent",
    width: DM_WIDTH_MARGIN_WEB,
    height: DM_HEIGHT_MARGIN,
    flexDirection: "row",
    flexWrap: "wrap",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  imageFlipedContainer: {
    top: 50,
    width: DM_WIDTH_MARGIN,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: isWEB() ? "center" : "flex-start",
    alignItems: "center",
  },
  flipedCard: {
    backgroundColor: "#333333",
    width: DM_WIDTH_MARGIN_WEB,
    height: DM_HEIGHT_MARGIN,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "flex-start",
    borderRadius: 20,
    margin: "0%",
  },
  refreshContainer: {
    width: isWEB() ? "25%" : "100%",
    height: 80,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    alignContent: "center",
  },
  refreshIconsContainer: {
    width: "100%",
    flexDirection: "row",
    flexWrap: "nowrap",
    justifyContent: "space-between",
    alignItems: "center",
    alignContent: "center",
  },
  avatarWithText: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  personalDataContainer: {
    flexDirection: "column",
    marginLeft: 30,
  },
  personalDataText: {
    color: "white",
    fontSize: 18,
  },
  personalDataTextMarginName: {
    color: "white",
    fontSize: 18,
    top: 5,
  },
  personalDataTextMarginType: {
    color: "white",
    fontSize: 18,
    top: 10,
  },
  refreshWithCards: {
    top: 100,
    width: "100%",
    height: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
  },
  contentContainer: {
    width: "90%",
    marginTop: 60,
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    alignContent: "center",
  },
  firstContentContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },
  locationContainer: {
    width: isWEB() ? "150%" : "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    alignContent: "center",
  },
  contentText: {
    color: "white",
    fontSize: 16,
  },
  secondContentContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    top: 20,
  },
  strengthContainer: {
    width: isWEB() ? "160%" : "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    alignContent: "center",
  },
  iconsContainer: {
    width: "115%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },
  thirdContentContainer: {
    top: 40,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },
  lootContainer: {
    width: "100%",
    top: 20,
    flexDirection: "column",
    // when I find an images, change to this ==> flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "flex-start",
    alignContent: "center",
  },
});
