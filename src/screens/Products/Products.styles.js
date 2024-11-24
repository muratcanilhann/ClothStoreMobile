import { StyleSheet } from "react-native";
import {font,typography,color} from "@style";
export default StyleSheet.create({
    container: {
      flex: 1,
      marginHorizontal: 12,
      marginTop: 30,
    },
    headerLocation: {
      textAlign: "center",
      fontFamily: font.REGULAR_ITALIC,
    },
    header: {
      fontFamily: font.EXTRA_BOLD,
      fontSize: typography.BIG,
      textAlign: "center",
    },
    flatList: {
      paddingHorizontal: 10,
      gap: 10,
    },
    noProductsText: {
      textAlign: "center",
      marginTop: 20,
      fontSize: typography.MEDIUM,
      color: color.SMOKE,
    },
  });
  