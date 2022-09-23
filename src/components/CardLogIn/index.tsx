import React, { useState } from "react";
import { View } from "react-native";
import { TextInput, Button } from "react-native-paper";
//@ts-ignore
import type { NativeStackScreenProps } from "@react-navigation/native-stack";

export default function CardLogIn({ navigation }: NativeStackScreenProps) {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  //   console.log("Nazwa:", name);
  //   console.log("Hasło:", password);

  const checkData = () => {
    if (name === "Geralt" && password === "Ciri") {
      return navigation.navigate("Home");
    } else if (name === "Geralt" && password != "Ciri") {
      console.log("Poprawna nazwa, hasło nie");
    } else if (name != "Geralt" && password === "Ciri") {
      console.log("Poprawne hasło, nazwa nie");
    } else if (name != "Geralt" && password != "Ciri") {
      console.log("Nie poprawne dane");
    }
  };

  return (
    <View>
      <TextInput
        label="Nazwa"
        value={name}
        onChangeText={(name) => setName(name)}
        style={{ top: 20, width: "80%" }}
      />
      <TextInput
        label="Hasło"
        secureTextEntry
        value={password}
        onChangeText={(password) => setPassword(password)}
        style={{ top: 40, width: "80%" }}
      />
      <Button
        style={{ top: 60, width: "80%" }}
        icon="camera"
        mode="contained"
        onPress={() => checkData()}
      >
        Zaloguj
      </Button>
    </View>
  );
}
