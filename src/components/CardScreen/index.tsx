import "react-native-gesture-handler";
import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";

export default function CardScreen() {
  const NUMBERS = [
    {
      id: 0,
      value: "idjwiwd",
    },
    {
      id: 1,
      value: "irgrg",
    },
    {
      id: 2,
      value: "iregr433",
    },
    {
      id: 3,
      value: "iegge34w3",
    },
    {
      id: 4,
      value: "rwwrerwe",
    },
    {
      id: 5,
      value: "wr4334rr",
    },
    {
      id: 6,
      value: "wfe332",
    },
    {
      id: 7,
      value: "wewefwe",
    },
    {
      id: 8,
      value: "wfeefe",
    },
  ];

  const getRandomObject = (array: any) => {
    const randomObject = array[Math.floor(Math.random() * array.length)];
    return randomObject;
  };

  const [randomData, setRandomData] = useState(() => getRandomObject(NUMBERS));

  useEffect(() => {
    getRandomObject(NUMBERS);
  }, []);

  return (
    <View style={styles.container}>
      <View>
        <Text>Losowa liczba: {randomData.id}</Text>
        <Text>Losowy tekst: {randomData.value}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
