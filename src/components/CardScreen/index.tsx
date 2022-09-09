import "react-native-gesture-handler";
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Dimensions,
} from "react-native";
// @ts-ignore
import temporaryImage from "../../assets/images/temporaryImage.png";
// @ts-ignore
import temporaryImage_Two from "../../assets/images/temporaryImage_Two.png";
// @ts-ignore
import modalBgImage from "../../assets/images/modalBgImage.png";
// @ts-ignore
import modalBgImage_Two from "../../assets/images/modalBgImage_Two.jpg";
// @ts-ignore
import modalBgImage_Three from "../../assets/images/modalBgImage_Three.jpg";
// @ts-ignore
import monster_GraveHag from "../../assets/monsters/monsterImage_GraveHag.png";
import {
  FAB,
  Portal,
  Provider,
  Modal,
  Button,
  Card,
  Title,
  Paragraph,
  Divider,
} from "react-native-paper";

export const CARD_DATA = [
  {
    id: 0,
    value: "idjwiwd",
    image: monster_GraveHag,
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

export default function CardScreen({ navigation }: any) {
  
  const getCardInfo = (array: any) => {
    const randomCard = array[Math.floor(Math.random() * array.length)];
    return randomCard;
  };

  const [randomData] = useState(() => getCardInfo(CARD_DATA));

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

  useEffect(() => {
    getCardInfo(CARD_DATA);
  }, []);

  console.log(randomData.id);
  console.log(randomData.value);

  return (
    <ImageBackground source={randomData.image} style={styles.image}>
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
                        Losowa liczba: {randomData.id}
                      </Text>
                      <Text style={{ top: 10, color: "white" }}>
                        Losowy tekst: {randomData.value}
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
    backgroundColor: "black",
    flex: 1,
    width: DM_WIDTH,
    height: DM_HEIGHT / 1.5,
    justifyContent: "center",
    alignItems: "center",
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
