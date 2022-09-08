import React, { useState, useEffect } from 'react';

// import all the components we are going to use
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Dimensions,
  Animated,
  PanResponder,
  ImageBackground,
} from 'react-native';
import {
    FAB,
    Portal,
    Provider,
    Modal,
    Card,
    Title,
    Divider,
    Button,
  } from "react-native-paper";
// @ts-ignore
import temporaryImage_Two from "../../assets/images/temporaryImage_Two.png";
// @ts-ignore
import modalBgImage_Three from "../../assets/images/modalBgImage_Three.jpg";

const SCREEN_WIDTH = Dimensions.get('window').width;

const SwipeableCard = ({ item, removeCard, swipedDirection } : any) => {
  // let xPosition = new Animated.Value(0);
  const [xPosition, setXPosition] = useState(new Animated.Value(0));
  let swipeDirection = '';
  let cardOpacity = new Animated.Value(1);
  let rotateCard = xPosition.interpolate({
    inputRange: [-150, 0, 150],
    outputRange: ['-20deg', '0deg', '20deg'],
  });


  let panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => false,
    onMoveShouldSetPanResponder: () => true,
    onStartShouldSetPanResponderCapture: () => false,
    onMoveShouldSetPanResponderCapture: () => true,
    onPanResponderMove: (evt, gestureState) => {
      xPosition.setValue(gestureState.dx);
      if (gestureState.dx > SCREEN_WIDTH - 250) {
        swipeDirection = 'Right';
      } else if (gestureState.dx < -SCREEN_WIDTH + 250) {
        swipeDirection = 'Left';
      }
    },
    onPanResponderRelease: (evt, gestureState) => {
      if (
        gestureState.dx < SCREEN_WIDTH - 150 &&
        gestureState.dx > -SCREEN_WIDTH + 150
      ) {
        swipedDirection('--');
        Animated.spring(xPosition, {
          toValue: 0,
          speed: 5,
          bounciness: 10,
          useNativeDriver: false,
        }).start();
      } else if (gestureState.dx > SCREEN_WIDTH - 150) {
        Animated.parallel([
          Animated.timing(xPosition, {
            toValue: SCREEN_WIDTH,
            duration: 200,
            useNativeDriver: false,
          }),
          Animated.timing(cardOpacity, {
            toValue: 0,
            duration: 200,
            useNativeDriver: false,
          }),
        ]).start(() => {
          swipedDirection(swipeDirection);
          removeCard();
        });
      } else if (gestureState.dx < -SCREEN_WIDTH + 150) {
        Animated.parallel([
          Animated.timing(xPosition, {
            toValue: -SCREEN_WIDTH,
            duration: 200,
            useNativeDriver: false,
          }),
          Animated.timing(cardOpacity, {
            toValue: 0,
            duration: 200,
            useNativeDriver: false,
          }),
        ]).start(() => {
          swipedDirection(swipeDirection);
          removeCard();
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
          backgroundColor: "red",
          opacity: cardOpacity,
          transform: [{ translateX: xPosition }, { rotate: rotateCard }],
        },
      ]}>
     <ImageBackground source={temporaryImage_Two} style={styles.image}></ImageBackground>
    </Animated.View>
  );
};

const SwipeCards = ({navigation}: any) => {

  const [noMoreCard, setNoMoreCard] = useState(false);
  const [sampleCardArray, setSampleCardArray] = useState(DEMO_CONTENT);
  const [swipeDirection, setSwipeDirection] = useState('--');

  const removeCard = (id : any) => {
    // alert(id);
    sampleCardArray.splice(
      sampleCardArray.findIndex((item) => item.id == id),
      1
    );
    setSampleCardArray(sampleCardArray);
    if (sampleCardArray.length == 0) {
      setNoMoreCard(true);
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
    <SafeAreaView style={{flex: 1}}>
        
    <View style={styles.image}>
    {sampleCardArray.map((item, key) => (
          <SwipeableCard
            key={key}
            item={item}
            removeCard={() => removeCard(item.id)}
            swipedDirection={lastSwipedDirection}
          />
        ))}
        {noMoreCard ? (
            <View style={styles.container}>
          <Text style={{ fontSize: 22, color: '#fff' }}>No Cards Found.<Button onPress={() => navigation.navigate("Dane")}>Go Back:</Button> </Text>
          </View>
        ) : null}
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
                {/* <View style={styles.container}>
                  <Text style={{color: "white"}}>Losowa liczba: {randomData.id}</Text>
                  <Text style={{color: "white"}}>Losowy tekst: {randomData.value}</Text>
                </View> */}
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
                      <Title style={{ color: "white" }} >Potwór:</Title>
                      <Divider style={styles.divider} />
                      <Text style={{ top: 10, color: "white" }}>
                        Losowa liczba: 
                      </Text>
                      <Text style={{ top: 10, color: "white" }}>
                        Losowy tekst: 
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
              open={open}
              icon={open ? "calendar-today" : "plus"}
              actions={[
                // { icon: "plus", onPress: () => console.log("Pressed add") },
                // {
                //   icon: "star",
                //   label: "Star",
                //   labelTextColor: "white",
                //   onPress: () => console.log("Pressed star"),
                // },
                // {
                //   icon: "email",
                //   label: "Email",
                //   labelTextColor: "white",
                //   onPress: () => console.log("Pressed email"),
                // },
                // {
                //   icon: "bell",
                //   label: "Remind",
                //   labelTextColor: "white",
                //   onPress: showModal,
                // },
              ]}
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
    </SafeAreaView>
  );
};

export default SwipeCards;

const DM_WIDTH = Dimensions.get("window").width;
const DM_HEIGHT = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 20,
  },
  cardStyle: {
    width: '75%',
    height: '45%',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    borderRadius: 7,
  },
  cardTitleStyle: {
    color: '#fff',
    fontSize: 24,
  },
  swipeText: {
    fontSize: 18,
    textAlign: 'center',
  },
  image: {
    backgroundColor: "black",
    flex: 1,
    width: DM_WIDTH,
    height: DM_HEIGHT / 1.5,
    
    flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'center',
  alignItems: 'flex-start',
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

const DEMO_CONTENT = [
  {
    id: '1',
    cardTitle: 'Card 1',
    backgroundColor: '#FFC107',
  },
  {
    id: '2',
    cardTitle: 'Card 2',
    backgroundColor: '#ED2525',
  },
  {
    id: '3',
    cardTitle: 'Card 3',
    backgroundColor: '#E7088E',
  },
  {
    id: '4',
    cardTitle: 'Card 4',
    backgroundColor: '#00BCD4',
  },
  {
    id: '5',
    cardTitle: 'Card 5',
    backgroundColor: '#FFFB14',
  },
].reverse();