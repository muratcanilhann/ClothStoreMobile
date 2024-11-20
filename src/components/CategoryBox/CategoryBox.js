import { View,Text,StyleSheet,TouchableOpacity } from "react-native"

export default function CategoryBox({text}){
    return(
        <TouchableOpacity style={style.container}>
            <Text style={style.text}>{text}</Text>
        </TouchableOpacity>
    )
}


const style = StyleSheet.create({
    container : {
        width:100,
        height:40,
        borderWidth:2,
        borderColor:"#A3A3A3",
        borderStyle:"solid",
        justifyContent:"center"   
    
    },
    text:{
        color:"#A3A3A3",
        fontFamily:"BeatriceDeck-Thin",
        textAlign:"center",
    }
})