import React, { useState, useEffect, FC } from "react";
import { View, Text } from "react-native";
import { CARD_DATA } from "../components/CardData";

export default function ModalData() {
  const randomCard = CARD_DATA[Math.floor(Math.random() * CARD_DATA.length)];

  const [image, setImage] = useState(randomCard);

  useEffect(() => {
    () => {
      const randomCard =
        CARD_DATA[Math.floor(Math.random() * CARD_DATA.length)];
      setImage(randomCard);
    };
  }, [setImage]);

  const id: any = image.id;
  const value: any = image.value;

  return (
    <View>
      <Text style={{ color: "red", fontSize: 24 }}>Id: {id}</Text>
      <Text style={{ color: "red", fontSize: 24 }}>Value: {value}</Text>
    </View>
  );
}
