import { Platform } from "react-native";

export default () => {
  if (Platform.OS === "web") {
    return true;
  }
  return false;
};
