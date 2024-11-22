import { StyleSheet } from "react-native";
import {font,typography} from "@style";

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
    }
})