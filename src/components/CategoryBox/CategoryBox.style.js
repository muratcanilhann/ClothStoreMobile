import { StyleSheet,Dimensions } from "react-native";
import {font, color} from "@style";

const w = Dimensions.get("window").width;
const h = Dimensions.get("window").height;

export default StyleSheet.create({
    container: {
      width: w * 0.3,
      height: h * 0.05,
      borderWidth: 2,
      borderColor: color.SMOKEGRAY,
      borderStyle: "solid",
      justifyContent: "center",
    },
    text: {
      color: color.SMOKEGRAY,
      fontFamily: font.THIN,
      textAlign: "center",
    },
  });
  