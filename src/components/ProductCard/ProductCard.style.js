import { StyleSheet,Dimensions } from "react-native";
import {color,font} from "@style";

const w = Dimensions.get("window").width;
const h = Dimensions.get("window").height;

export default StyleSheet.create({
    cardContainer: {
      width: w * 0.48,
      height: h * 0.25,
      padding: 10, 
    },
    image: {
      width: "100%",
      height: "80%",
      
    },
    categoryText: {
      color: color.SMOKE,
      fontFamily: font.REGULAR_ITALIC,
    },
    productInfoContainer: {
      flexDirection: "row", 
      justifyContent: "space-between", 
      alignItems: "center", 
    },
    productNameText: {
      fontFamily: font.REGULAR_ITALIC,
    },
    productPriceText: {
      color: "#000000", 
      fontFamily: font.SEMIBOLD_ITALIC,
    }
  });
  