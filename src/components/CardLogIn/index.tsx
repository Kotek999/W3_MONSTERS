import React, { useState } from "react";
import { View } from "react-native";
import { TextInput, Button, Text } from "react-native-paper";
//@ts-ignore
import type { NativeStackScreenProps } from "@react-navigation/native-stack";

export default function CardLogIn({ navigation }: NativeStackScreenProps) {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({});

  //   console.log("Nazwa:", name);
  //   console.log("Hasło:", password);

  const validNameWithPassword = name === "Geralt" && password === "Ciri";
  const inValidPassword = name === "Geralt" && password != "Ciri";
  const inValidName = name != "Geralt" && password === "Ciri";
  const inValidNameWithPassword = name != "Geralt" && password != "Ciri";

  const badName = name != "" && name != "Geralt";
  const badPassword = password != "" && password != "Ciri";

  const checkData = () => {
    if (validNameWithPassword) {
      return navigation.navigate("Home");
    } else if (inValidPassword) {
      console.log("Poprawna nazwa, hasło nie");
    } else if (inValidName) {
      console.log("Poprawne hasło, nazwa nie");
    } else if (inValidNameWithPassword) {
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
        error={badName}
      />
      <View style={{ top: 30 }}>
        {badName && <Text style={{ color: "red" }}>Zła nazwa</Text>}
      </View>
      <TextInput
        label="Hasło"
        secureTextEntry
        value={password}
        onChangeText={(password) => setPassword(password)}
        style={{ top: 40, width: "80%" }}
        error={badPassword}
      />
      <View style={{ top: 50 }}>
        {badPassword && <Text style={{ color: "red" }}>Złe hasło</Text>}
      </View>
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
