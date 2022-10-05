import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Animated,
  PanResponder,
  ImageBackground,
} from "react-native";
import {
  FAB,
  Portal,
  Provider,
  Modal,
  Card,
  Title,
  IconButton,
  MD3Colors,
} from "react-native-paper";
// @ts-ignore
import modalBgImage_Three from "../../assets/images/modalBgImage_Three.jpg";
import { CARD_DATA } from "../CardData";
import {
  DM_WIDTH,
  DM_HEIGHT,
  DM_WIDTH_MARGIN,
  DM_HEIGHT_MARGIN,
} from "../../common/Dimensions";
import CardFlip from "../CardFlip";
import CardLogIn from "../CardLogIn";
//@ts-ignore
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import isWEB from "../../common/Resolutions/isWEB";

const SwipeableCard = ({ swipedDirection }: any) => {
  const randomCard = CARD_DATA[Math.floor(Math.random() * CARD_DATA.length)];

  const [image, setImage] = useState(randomCard);

  useEffect(() => {
    () => {
      const randomCard =
        CARD_DATA[Math.floor(Math.random() * CARD_DATA.length)];
      setImage(randomCard);
    };
  }, [setImage]);

  const [xPosition] = useState(new Animated.Value(0));
  let swipeDirectionRight = "";
  let swipeDirectionLeft = "";
  let cardOpacity = new Animated.Value(1);
  let rotateCard = xPosition.interpolate({
    inputRange: [0, 0, 150],
    outputRange: ["-0deg", "0deg", "0deg"],
  });

  let panResponder = PanResponder.create({
    onMoveShouldSetPanResponderCapture: () => true,
    onPanResponderMove: (e, gestureState) => {
      xPosition.setValue(gestureState.dx);
      if (gestureState.dx > DM_WIDTH - 250) {
        swipeDirectionRight = "Right";
        swipeDirectionLeft = "Left";
      }
    },
    onPanResponderRelease: (e, gestureState) => {
      if (
        gestureState.dx < DM_WIDTH - 150 &&
        gestureState.dx > -DM_WIDTH + 150
      ) {
        swipedDirection(swipeDirectionLeft);
        Animated.spring(xPosition, {
          toValue: 0,
          speed: 5,
          bounciness: 10,
          useNativeDriver: true,
        }).start();
      } else if (gestureState.dx > DM_WIDTH - 150) {
        Animated.parallel([
          Animated.timing(xPosition, {
            toValue: DM_WIDTH,
            duration: 200,
            useNativeDriver: true,
          }),
          Animated.timing(cardOpacity, {
            toValue: 0,
            duration: 200,
            useNativeDriver: true,
          }),
        ]).start(() => {
          swipedDirection(swipeDirectionRight);
        });
      } else if (gestureState.dx < -DM_WIDTH + 150) {
        Animated.parallel([
          Animated.timing(xPosition, {
            toValue: -DM_WIDTH,
            duration: 200,
            useNativeDriver: true,
          }),
          Animated.timing(cardOpacity, {
            toValue: 0,
            duration: 200,
            useNativeDriver: true,
          }),
        ]).start(() => {
          swipedDirection(swipeDirectionRight);
        });
      }
    },
  });

  return (
    <Animated.View
      {...panResponder.panHandlers}
      style={[
        styles.cardStyle,
        {
          transform: [{ translateX: xPosition }, { rotate: rotateCard }],
        },
      ]}
    >
      <CardFlip />
    </Animated.View>
  );
};

const SwipeCards = ({ navigation }: NativeStackScreenProps) => {
  const [noMoreCard, setNoMoreCard] = useState(true);
  const [sampleCardArray, setSampleCardArray] = useState(CARD_DATA);
  const [swipeDirection, setSwipeDirection] = useState("--");

  const removeCard = (id: number) => {
    sampleCardArray.splice(
      sampleCardArray.findIndex((item) => item.id == id),
      1
    );
    setSampleCardArray(sampleCardArray);
    if (sampleCardArray.length == 0) {
      setNoMoreCard(false);
    }
  };

  const lastSwipedDirection = (
    swipeDirection: React.SetStateAction<string>
  ) => {
    setSwipeDirection(swipeDirection);
  };

  const [state, setState] = React.useState({ open: false });

  const onStateChange = (
    open: React.SetStateAction<{
      open: boolean;
    }>
  ) => setState(open);

  const { open } = state;

  const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = {
    width: "100%",
    top: "25%",
    padding: 0,
  };

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
          {!isWEB() &&
            sampleCardArray.map((item, key) => (
              <SwipeableCard
                key={key}
                item={item}
                removeCard={() => removeCard(item.id)}
                swipedDirection={lastSwipedDirection}
              />
            ))}
          {noMoreCard && (
            <>
              <View style={styles.containerArrow}>
                <IconButton
                  icon="arrow-left"
                  iconColor={MD3Colors.error50}
                  size={34}
                  onPress={() => navigation.navigate("Home")}
                />
              </View>
              {isWEB() && <CardFlip />}
            </>
          )}
          <Provider>
            <Portal>
              <Provider>
                <Portal>
                  <Modal
                    visible={visible}
                    onDismiss={hideModal}
                    contentContainerStyle={containerStyle}
                  >
                    <ImageBackground
                      borderRadius={16}
                      source={modalBgImage_Three}
                      style={styles.imageBackgroundStyle}
                    >
                      <Card.Content style={styles.cardContentContainer}>
                        <Title style={styles.text}>Logowanie</Title>
                        <CardLogIn navigation={navigation} />
                      </Card.Content>
                    </ImageBackground>
                  </Modal>
                </Portal>
              </Provider>
              {!visible ? (
                <FAB.Group
                  backdropColor="#000000a0"
                  visible
                  style={{ marginBottom: 24 }}
                  open={open}
                  icon={open ? "calendar-today" : "plus"}
                  actions={
                    [
                      // actions
                    ]
                  }
                  onStateChange={showModal}
                />
              ) : (
                <FAB.Group
                  backdropColor="#000000a0"
                  visible={false}
                  open={open}
                  icon={open ? "calendar-today" : "plus"}
                  actions={
                    [
                      // actions
                    ]
                  }
                  onStateChange={onStateChange}
                />
              )}
            </Portal>
          </Provider>
        </View>
      )}
    </SafeAreaView>
  );
};

export default SwipeCards;

const styles = StyleSheet.create({
  cardStyle: {
    width: "75%",
    height: "45%",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    borderRadius: 7,
  },
  image: {
    backgroundColor: "black",
    flex: 1,
    width: DM_WIDTH,
    height: DM_HEIGHT_MARGIN,
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
    backgroundColor: "black",
    flex: 1,
    width: DM_WIDTH_MARGIN,
    height: DM_HEIGHT_MARGIN,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "flex-start",
    top: "50%",
  },
  imageAnimateButton: {
    backgroundColor: "transparent",
    width: DM_WIDTH_MARGIN,
    height: DM_HEIGHT_MARGIN,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "flex-start",
    top: "50%",
  },
  divider: {
    backgroundColor: "yellow",
    width: "50%",
    height: 3,
  },
  imageBackgroundStyle: {
    padding: 20,
    top: 0,
    height: DM_HEIGHT / 2,
  },
  cardContentContainer: {
    top: 20,
    backgroundColor: "transparent",
    flexDirection: "column",
    alignContent: "center",
  },
  text: {
    color: "white",
  },
});
