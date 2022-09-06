import "react-native-gesture-handler";
import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image, ImageBackground, Dimensions, Button } from "react-native";
// @ts-ignore
import temporaryImage from '../../assets/temporaryImage.png';
// @ts-ignore
import temporaryImage_Two from '../../assets/temporaryImage_Two.png';

export default function CardScreen() {

  const CARD_DATA = [
    {
      id: 0,
      value: "idjwiwd",
      image: temporaryImage_Two,
    },
    {
      id: 1,
      value: "irgrg",
      image: temporaryImage,
    },
    {
      id: 2,
      value: "iregr433",
      image: temporaryImage_Two,
    },
    {
      id: 3,
      value: "iegge34w3",
      image: temporaryImage_Two,
    },
    {
      id: 4,
      value: "rwwrerwe",
      image: temporaryImage_Two,
    },
    {
      id: 5,
      value: "wr4334rr",
      image: temporaryImage,
    },
    {
      id: 6,
      value: "wfe332",
      image: temporaryImage,
    },
    {
      id: 7,
      value: "wewefwe",
      image: temporaryImage,
    },
    {
      id: 8,
      value: "wfeefe",
      image: temporaryImage,
    },
  ];

  const getCardInfo = (array: any) => {
    const randomCard = array[Math.floor(Math.random() * array.length)];
    return randomCard;
  };

  const [randomData, setRandomData] = useState(() => getCardInfo(CARD_DATA));

  useEffect(() => {
    getCardInfo(CARD_DATA);
  }, []);

  return (
    
    <ImageBackground source={randomData.image} style={styles.image}>
    <View style={styles.container}>
      <View>
        <Text>Losowa liczba: {randomData.id}</Text>
        <Text>Losowy tekst: {randomData.value}</Text>
       
          
          
       
        
      </View>
    </View>
   </ImageBackground>
  );
}

const DM_WIDTH = Dimensions.get("window").width;
const DM_HEIGHT = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    flex: 1,
    width: DM_WIDTH,
    height: DM_HEIGHT,
    justifyContent: "center",
    alignItems: "center",
  },
});
