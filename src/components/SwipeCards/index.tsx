import React, { useState, useEffect, FC } from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
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
  Divider,
  IconButton,
  MD3Colors,
} from "react-native-paper";
// @ts-ignore
import modalBgImage_Three from "../../assets/images/modalBgImage_Three.jpg";
import { CARD_DATA } from "../CardData";
import { DM_WIDTH, DM_HEIGHT } from "../../common/Dimensions";

const SwipeableCard = ({ swipedDirection, navigation }: any) => {
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

  const [noMoreCard, setNoMoreCard] = useState(true);
  const [sampleCardArray, setSampleCardArray] = useState(CARD_DATA);
  const [swipeDirection, setSwipeDirection] = useState("--");

  const removeCard = (id: any) => {
    // alert(id);
    sampleCardArray.splice(
      sampleCardArray.findIndex((item) => item.id == id),
      1
    );
    setSampleCardArray(sampleCardArray);
    if (sampleCardArray.length == 0) {
      setNoMoreCard(false);
    }
  };

  const lastSwipedDirection = (swipeDirection: any) => {
    setSwipeDirection(swipeDirection);
  };

  const [state, setState] = React.useState({ open: false });

  const onStateChange = ({ open }: any) => setState({ open });

  const { open } = state;

  const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = {
    width: "100%",
    top: "25%",
    padding: 0,
  };

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
      <ImageBackground
        source={image.image}
        style={styles.imageAnimate}
        borderRadius={20}
      ></ImageBackground>
      {/* <View style={styles.imageModal}>
    <Provider>
          <Portal>
            <Provider>
              <Portal>
                <Modal
                  visible={visible}
                  onDismiss={hideModal}
                  // style={styles.modal}
                  contentContainerStyle={containerStyle}
                >
                  <ImageBackground
                    borderRadius={16}
                    source={modalBgImage_Three}
                    style={{
                      padding: 20,
                      top: 0,
                      height: DM_HEIGHT / 2,
                    }}
                  >
                    <Card.Content
                      style={{
                        width: "80%",
                        height: "30%",
                        backgroundColor: "transparent",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "flex-start",
                        alignContent: "center",
                      }}
                    >
                      <Title style={{ color: "white" }}>Potwór:</Title>
                      <Divider style={styles.divider} />
                      <Text style={{ top: 10, color: "white" }}>
                        Losowa liczba: {image.id}
                      </Text>
                      <Text style={{ top: 10, color: "white" }}>
                        Losowy tekst: {image.value}
                      </Text>
                    </Card.Content>
                  </ImageBackground>
                </Modal>
              </Portal>
            </Provider>
            {!visible ? (
              <FAB.Group
                backdropColor="#000000a0"
                visible
                style={{marginBottom: 24}}
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
                actions={[
                  { icon: "plus", onPress: () => console.log("Pressed add") },
                  {
                    icon: "star",
                    label: "Star",
                    labelTextColor: "white",
                    onPress: () => console.log("Pressed star"),
                  },
                  {
                    icon: "email",
                    label: "Email",
                    labelTextColor: "white",
                    onPress: () => console.log("Pressed email"),
                  },
                  {
                    icon: "bell",
                    label: "Remind",
                    labelTextColor: "white",
                    onPress: showModal,
                  },
                ]}
                onStateChange={onStateChange}
              />
            )}
          </Portal>
        </Provider>
        </View> */}
        </Animated.View>
  );
};

const SwipeCards = ({ navigation }: any) => {
  const [noMoreCard, setNoMoreCard] = useState(true);
  const [sampleCardArray, setSampleCardArray] = useState(CARD_DATA);
  const [swipeDirection, setSwipeDirection] = useState("--");

  const removeCard = (id: any) => {
    // alert(id);
    sampleCardArray.splice(
      sampleCardArray.findIndex((item) => item.id == id),
      1
    );
    setSampleCardArray(sampleCardArray);
    if (sampleCardArray.length == 0) {
      setNoMoreCard(false);
    }
  };

  const lastSwipedDirection = (swipeDirection: any) => {
    setSwipeDirection(swipeDirection);
  };

  const [state, setState] = React.useState({ open: false });

  const onStateChange = ({ open }: any) => setState({ open });

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
          {sampleCardArray.map((item, key) => (
            <SwipeableCard
              key={key}
              item={item}
              removeCard={() => removeCard(item.id)}
              swipedDirection={lastSwipedDirection}
            />
          ))}
          {noMoreCard && (
            <View style={styles.containerArrow}>
              <IconButton
                icon="arrow-left"
                iconColor={MD3Colors.error50}
                size={34}
                onPress={() => navigation.navigate("Home")}
              />
            </View>
          )}
          {/* {noMoreCard && (
            <View style={styles.container}>
              <IconButton
                icon="arrow-left"
                iconColor={MD3Colors.error50}
                size={34}
                onPress={() => navigation.navigate("Home")}
              />
            </View>
          )} */}
          <Provider>
            <Portal>
              <Provider>
                <Portal>
                  <Modal
                    visible={visible}
                    onDismiss={hideModal}
                    // style={styles.modal}
                    contentContainerStyle={containerStyle}
                  >
                    <ImageBackground
                      borderRadius={16}
                      source={modalBgImage_Three}
                      style={{
                        padding: 20,
                        top: 0,
                        height: DM_HEIGHT / 2,
                      }}
                    >
                      <Card.Content
                        style={{
                          width: "80%",
                          height: "30%",
                          backgroundColor: "transparent",
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "flex-start",
                          alignContent: "center",
                        }}
                      >
                        <Title style={{ color: "white" }}>Potwór:</Title>
                        <Divider style={styles.divider} />
                        <Text style={{ top: 10, color: "white" }}>
                          Losowa liczba: {image.id}
                        </Text>
                        <Text style={{ top: 10, color: "white" }}>
                          Losowy tekst: {image.value}
                        </Text>
                      </Card.Content>
                    </ImageBackground>
                  </Modal>
                </Portal>
              </Provider>
              {!visible ? (
                <FAB.Group
                  backdropColor="#000000a0"
                  visible
                  style={{marginBottom: 24}}
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
                  actions={[
                    { icon: "plus", onPress: () => console.log("Pressed add") },
                    {
                      icon: "star",
                      label: "Star",
                      labelTextColor: "white",
                      onPress: () => console.log("Pressed star"),
                    },
                    {
                      icon: "email",
                      label: "Email",
                      labelTextColor: "white",
                      onPress: () => console.log("Pressed email"),
                    },
                    {
                      icon: "bell",
                      label: "Remind",
                      labelTextColor: "white",
                      onPress: showModal,
                    },
                  ]}
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
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  cardStyle: {
    width: "75%",
    height: "45%",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    borderRadius: 7,
  },
  cardTitleStyle: {
    color: "#fff",
    fontSize: 24,
  },
  swipeText: {
    fontSize: 18,
    textAlign: "center",
  },
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
  imageModal: {
      width: DM_WIDTH,
      height: DM_HEIGHT,
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "center",
      alignItems: "flex-start",
      top: "60%",
  },
  containerArrow: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    alignContent: 'center',
  },
  imageAnimate: {
    backgroundColor: "black",
    flex: 1,
    width: DM_WIDTH - 50,
    height: DM_HEIGHT / 1.5,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "flex-start",
    top: "20%",
  },
  modal: {
    height: "50%",
    backgroundColor: "#000000a0",
    alignItems: "center",
    justifyContent: "center",
  },
  divider: {
    backgroundColor: "yellow",
    width: "50%",
    height: 3,
  },
});
