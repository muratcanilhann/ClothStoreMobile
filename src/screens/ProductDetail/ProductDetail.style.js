import { StyleSheet,Dimensions } from "react-native";
import {font,color} from "@style";

const w = Dimensions.get("window").width;
const h = Dimensions.get("window").height;

export default StyleSheet.create({
    image: {
      width: w ,  
      height: h * 0.601,    
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
      height: h *0.08,
      alignItems: "center",
      justifyContent: "center",
    },
    descText: {
      fontFamily: font.LIGHT,
    },
    likeButton:{
        backgroundColor: "white",
        width: w * 0.09,
        height: h * 0.037,
        alignItems: "center",
        justifyContent: "center",
    },
    likeButtonText:{
      fontFamily: font.SEMIBOLD_ITALIC,
    },
    productDetailsContainer:{
       flexDirection: "row", justifyContent: "space-between" ,
       
    }
  });
  