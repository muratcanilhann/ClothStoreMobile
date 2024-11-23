import { StyleSheet } from "react-native";
import {font, typography, color} from "@style";

export default StyleSheet.create({
    container:{
   paddingHorizontal: 10 
    },
    header: {
      fontSize: typography.BIG,
      fontFamily: font.EXTRA_BOLD,
    },
    tab: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginTop: 30,
    },
    input: {
      borderWidth: 1,
      borderColor: color.WHITE_SMOKE,
      placeholderTextColor: font.SMOKEGRAY,
      fontFamily: font.SEMIBOLD_ITALIC,
      marginTop: 9,
      paddingHorizontal: 10,
      paddingVertical: 12,
    },
    inputHalf: {
      flex: 1,
      marginRight: 10, 
    },
    halfContainer: {
      flexDirection: "row", 
      justifyContent: "space-between", 
      marginTop: 10,
    },
    subTitle: {
      fontFamily: font.SEMIBOLD_ITALIC,
      marginTop: 10,
    },
    picker:{
      backgroundColor:null,
      borderWidth:1,
      borderColor: color.WHITE_SMOKE,
      marginTop:10,
      fontFamily: font.SEMIBOLD_ITALIC,
    },
    pickerItem:{
        fontFamily:font.SEMIBOLD_ITALIC,
        color: color. WHITE_SMOKE
    },
    orderContainer:{
      borderWidth:1,
      borderColor: color. WHITE_SMOKE,
      marginTop:20,
      padding:20
  
    },
   button: {backgroundColor:"#827D7D",padding:14,marginTop:20,
      flexDirection:"row",
      justifyContent:"space-between",
      alignItems:"center",
      gap:10},
    orderText:{
      fontFamily:"BeatriceDeck-EBItalic"
    }
  });
  