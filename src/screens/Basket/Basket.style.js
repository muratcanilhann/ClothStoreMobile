import { StyleSheet,Dimensions } from "react-native";
import {font} from "@style";

  const w = Dimensions.get("window").width;
  const h = Dimensions.get("window").height;

 
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
      width: w * 0.5,
      backgroundColor: "gray",
      height: h * 0.06,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 20,
    },
  });
  