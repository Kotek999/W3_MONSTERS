import React, { useState, useEffect, FC } from "react";
import { SafeAreaView, StyleSheet, View, Text } from "react-native";
import { IconButton, MD3Colors, Button, Snackbar } from "react-native-paper";
import { CARD_DATA } from "../CardData";
import { DM_WIDTH, DM_HEIGHT } from "../../common/Dimensions";
import ModalData from "../../helpers/getModalData";

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


  const [visible, setVisible] = React.useState(false);

  const onToggleSnackBar = () => setVisible(!visible);

  const onDismissSnackBar = () => setVisible(false);


  return (
    <SafeAreaView style={{ flex: 1 }}>
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
          <Button onPress={onToggleSnackBar}>{visible ? 'Hide' : 'Show'}</Button>
      <Snackbar
        style={styles.imageAnimateSnack}
        visible={visible}
        onDismiss={onDismissSnackBar}
        duration={Infinity}
        action={{
          label: 'Undo',
          onPress: () => {
            navigation.navigate("Information")
          },
        }}>
       <ModalData />
      </Snackbar>
      <Button onPress={onToggleSnackBar}>{visible ? 'Hide' : null}</Button>
        </View>
      </View>
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
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "flex-start",
    borderRadius: 20,
    top: "10%",
    margin: "6.5%",
  },
  imageAnimateSnack: {
    backgroundColor: "gray",
    width: DM_WIDTH - 50,
    height: DM_HEIGHT / 1.5,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "flex-start",
    borderRadius: 20,
    top: "0%",
    margin: "0%",
  }
});
