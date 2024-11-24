import { StyleSheet, Dimensions } from "react-native";
import {font,typography, color} from "@style";

const w = Dimensions.get("window").width;

export default StyleSheet.create({
    container:{
        flex:1,
        marginHorizontal:12,
        marginTop:32
    },
    genderText:{
    fontFamily:font.THIN,
    fontSize:typography.HUGE
    },  
    header:{
        fontFamily:font.EXTRA_BOLD,
        fontSize: typography.HUGE, 
    },
    subTitle:{
        fontFamily: font.SEMIBOLD_ITALIC
    },
    shoppingButton:{
        backgroundColor: color.SMOKE,
        width: w * 0.5,
        padding: 10,
        marginTop: 20,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: 10
    }
})