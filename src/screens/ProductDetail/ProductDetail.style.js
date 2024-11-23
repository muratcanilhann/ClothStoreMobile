import { StyleSheet } from "react-native";
import {font,color} from "@style";

export default StyleSheet.create({
    image: {
      width: "100%",  
      height: 300,    
      resizeMode: "contain",
    },
    otherImage: {
      width: 120,    
      height: 120,   
      marginRight: 10, 
      resizeMode: "contain",
    },
    otherImagesText: {
      fontFamily: font.SEMIBOLD_ITALIC,
      marginBottom: 10,
    },
    nameText: {
      fontFamily: font.SEMIBOLD_ITALIC,
    },
    taxText: {
      fontFamily: font.SEMIBOLD_ITALIC,
      color: color.SMOKEGRAY,
    },
    addButton: {
      position: "absolute",
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: color.WHITE_SMOKE,
      height: 50,
      alignItems: "center",
      justifyContent: "center",
    },
    descText: {
      fontFamily: font.LIGHT,
    },
    likeButton:{
        backgroundColor: "white",
        width: 35,
        height: 35,
        alignItems: "center",
        justifyContent: "center",
    },
    likeButtonText:{
      fontFamily: font.SEMIBOLD_ITALIC,
    },
    productDetailsContainer:{
       flexDirection: "row", justifyContent: "space-between" 
    }
  });
  