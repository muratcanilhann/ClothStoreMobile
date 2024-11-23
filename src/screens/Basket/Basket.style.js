import { StyleSheet } from "react-native";
import {font} from "@style";

export default StyleSheet.create({
    button: {
      flex: 1,
      paddingVertical: 10,
    },
    activeButton: {
      textAlign: "center",
      alignItems: "center",
      fontFamily: font.SEMIBOLD_ITALIC,
    },
    text: {
      fontFamily: font.LIGHT,
      textAlign: "center",
      alignItems: "center",
    },
    continueButton: {
      width: 200,
      backgroundColor: "gray",
      height: 50,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 20,
    },
  });
  